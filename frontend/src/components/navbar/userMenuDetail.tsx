// import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import Image from "next/image";
import { IoReorderThreeOutline } from "react-icons/io5";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Dropdown from "../Dropdown";
import { useState } from "react";

const UserMenuDetail = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  type MenuType = {
    label: string;
    key: string;
    action: () => void;
  };
  const menuItems: MenuType[] = [
    {
      label: 'Prediction',
      key: 'action1',
      action: () => {
        router.push("/prediction");
      },
    },
    {
      label: 'Sign Out',
      key: 'action2',
      action: () => {
        localStorage.removeItem("userData");
        localStorage.removeItem("connectedAccount");
        router.push("/");
        signOut();
      },
    },

  ];

  const AvatarUrl = localStorage.getItem("userData");
  const handleItemClick = (action: () => void) => {
    action();
    setIsDropdownOpen(false);
  }

  const handleAvatarClick = () => {
    setIsDropdownOpen(true);
  };

  const showDropDown = () => {
    setIsDropdownOpen(true);
  }

  const hideDropDown = () => {
    setIsDropdownOpen(false);
  }

  return (
    <div className="relative" onMouseEnter={showDropDown}>
      <div className={`rounded-lg flex gap-x-[4px] items-center border-w-[100px] px-[20px] py-[3px]  hover:cursor-pointer hover:opacity-60 }`} onClick={handleAvatarClick}>
        {/* <IoReorderThreeOutline className="w-[20px] h-[20px] text-gray-500" /> */}
        <Image src="/img/user.svg" width={30} height={30} alt="user" />
      </div>
      {isDropdownOpen &&
        <div onMouseLeave={hideDropDown}  >
          <Dropdown menu={menuItems} onItemClick={handleItemClick} className="p-[10px]" />
        </div>

      }
    </div>

  );
};

export default UserMenuDetail;
