type MenuType = {
    label: string;
    key: string;
    action: () => void;
}
type DropdownType = {
    menu: MenuType[];
    className?: string;
    onItemClick: (action: () => void) => void;
}

const Dropdown: React.FC<DropdownType> = ({ menu, className, onItemClick }) => {
    return (
        <div className={`dropdown-menu ${className} fixed dark:text-white text-black bg-slate-100 p-[10px] rounded-lg dark:bg-slate-900 `}>
            {menu.map((item) => (
                <div key={item.key} onClick={() => onItemClick(item.action)} className="p-[5px] hover:opacity-40">
                    {item.label}
                </div>
            ))}
        </div>
    )
}

export default Dropdown;