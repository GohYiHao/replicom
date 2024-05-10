"use client";

import classNames from "classnames";
import { IoIosSearch } from "react-icons/io";
import classes from "./search-bar.module.css";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  setSearchString: (value: string) => void;
  searchString: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  setSearchString,
  searchString,
}) => {

  const router = useRouter();
  const search = () => {
    setSearchString('');
    router.push(`/search?query=${searchString}`)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      search();
    }
  };

  return (
    <section
      className={classNames(
        " my-auto mx-auto bg-gray-100 rounded-2xl border-zinc-700 dark:bg-gray-200 dark:border-gray-100 border-solid shadow-md "
      )}
    >
      <div className="flex justify-between items-center pr-[10px]  dark:bg-gray-800 rounded-xl">
        <input
          type="text"
          className={classNames(
            " p-[0.5rem] text-black dark:text-[#DADADA] dark:bg-gray-800 rounded-xl ",
            classes.searchInput
          )}
          value={searchString}
          onChange={({ target: { value } }) => setSearchString(value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for module"
        />
        <IoIosSearch className="text-black w-[25px] h-[25px] dark:text-white dark:bg-gray-800 hover:cursor-pointer" onClick={search} />
      </div>

    </section>
  );
};

export default SearchBar;
