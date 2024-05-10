"use client";

import Logo from "./logo";
import UserMenu from "./userMenu";
import React, { ReactNode, useState } from "react";
import { getCurrentUser } from "@/services/user";
import SearchBar from "../search-bar/search-bar";
import { usePredictionContext } from "@/context/prediction";
import ThemeChanger from "../ThemeChanger";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";


type NavigationBarProps = {
  children: ReactNode;
};

const NavigationBar = () => {
  const { searchString, setSearchString } = usePredictionContext();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  const toggleClose = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <>
      <header className="top-0 left-0 w-full bg-white dark:bg-[#131B2A] fixed z-10 animate-menu-fade shadow-xl">
        <nav className="py-4 border-b-[0px] px-10">
          <div className="flex justify-between items-center ">
            <div className="flex items-center justify-between w-full">
              <Logo />
              <SearchBar
                searchString={searchString}
                setSearchString={setSearchString}
              />
              <div className="hidden md:block">
                <div className=" flex justify-between items-center gap-[20px]">
                  <ThemeChanger />
                  <UserMenu />
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <BsThreeDotsVertical className="w-[25px] h-[25px] text-black dark:text-white hover:cursor-pointer" onClick={toggleMenu} />
            </div>

          </div>
        </nav>
      </header>

      <>
        {
          isOpenMenu && (
            <div className="py-4 px-10 top-0 left-0 w-full bg-white dark:bg-[#131B2A] fixed z-20 animate-menu-fade shadow-xl flex items-center justify-between">
              <UserMenu />
              <ThemeChanger />
              <IoIosCloseCircle className="w-[25px] h-[25px] text-black dark:text-white hover:cursor-pointer" onClick={toggleClose} />
            </div>
          )
        }
      </>


    </>

  );
};

export default NavigationBar;
