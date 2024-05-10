"use client"

import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ModelItem from "@/components/ModelItem";
import Loader from "@/components/Loader";
import { useTheme } from "next-themes";
import { Pagination } from "antd";
import axios from "axios";

const Search = () => {

    const searchParams = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredModules, setFilteredModules] = useState<any[]>([]);
    const [displayedModules, setDisplayedModules] = useState<any[]>([]);
    const searchString = searchParams.get("query");
    const itemsPerPage = 12;

    async function getData() {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/replicate/`
        );
        const loadedModules: any[] = response.data;

        const filtered = searchString
            ? loadedModules.filter((module) =>
                module.name?.toLowerCase().includes(searchString.toLowerCase())
            )
            : loadedModules;
        setFilteredModules(filtered);

    }

    useEffect(() => {

        if (searchString) {
            setCurrentPage(1);
            updateDisplayedModules(filteredModules, 1);
        } else {
            updateDisplayedModules(filteredModules, currentPage);
        }
    }, [filteredModules, searchString]);

    useEffect(() => {
        getData();
    }, [searchString]);


    const handlePageChange = (page: any) => {
        setCurrentPage(page);
        updateDisplayedModules(filteredModules, page);
    };

    const updateDisplayedModules = (modules: any[], page: number) => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setDisplayedModules(modules.slice(startIndex, endIndex));
    };

    const { theme } = useTheme();

    return (
        <>
            {displayedModules && displayedModules.length > 0 ? (
                <div className="mt-[112px] mb-[50px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-[48px] justify-center  lg:justify-between px-[48px]">
                        {displayedModules.map((model, idx) => (
                            <ModelItem
                                key={idx}
                                cover_image_url={model.image_url}
                                name={model.name}
                                owner={model.owner}
                                github={model.github_url}
                                description={model.description}
                            />
                        ))}
                    </div>
                    <div className="flex items-center my-[30px] ">
                        <Pagination
                            current={currentPage}
                            total={filteredModules.length}
                            defaultPageSize={12}
                            showSizeChanger={false}
                            onChange={handlePageChange}
                            className={`${theme} mx-auto`}
                        />
                    </div>

                </div>
            ) : (
                <span className="md:px-10 px-5 text-[26px]">
                    <Loader />
                </span>
            )}
        </>
    )
}

export default Search;