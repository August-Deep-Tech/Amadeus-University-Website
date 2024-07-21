import { menuData } from '@/constant/Menu';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

interface MenuItem {
    name: string;
    link: string;
    submenu?: MenuItem[];
}

interface MobileNavProps {
    open: boolean;
    setIsOpen: (open: boolean) => void;
}

const MobileNav: FC<MobileNavProps> = ({ open, setIsOpen }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
    const [openNestedSubmenuIndex, setOpenNestedSubmenuIndex] = useState<{ parentIndex: number, childIndex: number } | null>(null);

    const toggleSubmenu = (index: number) => {
        setOpenSubmenuIndex(prevIndex => prevIndex === index ? null : index);
        setOpenNestedSubmenuIndex(null); 
    };

    const toggleNestedSubmenu = (parentIndex: number, childIndex: number) => {
        const key = { parentIndex, childIndex };
        setOpenNestedSubmenuIndex(prevKey => 
            prevKey && prevKey.parentIndex === parentIndex && prevKey.childIndex === childIndex ? null : key
        );
    };

    useEffect(() => {
        if (open) {
            setIsVisible(true);
        }
    }, [open]);

    return (
        <nav className={`${isVisible ? "" : "hidden"} relative-element ${open ? "slide-in" : "slide-out"}`}>
            <div className="px-4 py-2 fixed h-[100vh] w-[100%] bg-au-white">
                <div className='flex justify-between items-center'>
                    <h1 className='text-[28px]'>Menu</h1>
                    <div className="">
                        <X className="" onClick={() => setIsOpen(false)} />
                    </div>
                </div>
                <div className='mt-[30px]'>
                    {menuData.map((item: MenuItem, index: number) => (
                        <div key={index} className="py-0">
                            <div className="flex justify-between items-center">
                                <Link href={item.link}
                                    onClick={() => { 
                                        setIsOpen(false)
                                    }}
                                    className="block py-2 text-au-true-black hover:text-au-burgundy">{item.name}</Link>
                                {item.submenu && (
                                    <button onClick={() => toggleSubmenu(index)} className="ml-2">
                                        {openSubmenuIndex === index ? <ChevronUp className="w-5 h-5 text-au-true-black" /> : <ChevronDown className="w-5 h-5 text-au-true-black" />}
                                    </button>
                                )}
                            </div>
                            {item.submenu && openSubmenuIndex === index && (
                                <ul className="ml-4">
                                    {item.submenu.map((subItem: MenuItem, subIndex: number) => (
                                        <li key={subIndex} className="py-1">
                                            <div className="flex justify-between items-center">
                                                <Link href={subItem.link}
                                                    onClick={() => 
                                                        {
                                                            setIsOpen(false)
                                                        }

                                                    }
                                                    className="block py-0 text-au-true-black hover:text-au-burgundy">{subItem.name}</Link>
                                                {subItem.submenu && (
                                                    <button onClick={() => toggleNestedSubmenu(index, subIndex)} className="ml-2">
                                                        {openNestedSubmenuIndex?.parentIndex === index && openNestedSubmenuIndex.childIndex === subIndex ? <ChevronUp className="w-5 h-5 text-au-true-black" /> : <ChevronDown className="w-5 h-5 text-au-true-black" />}
                                                    </button>
                                                )}
                                            </div>
                                            {subItem.submenu && openNestedSubmenuIndex?.parentIndex === index && openNestedSubmenuIndex.childIndex === subIndex && (
                                                <ul className="ml-4">
                                                    {subItem.submenu.map((nestedItem: MenuItem, nestedIndex: number) => (
                                                        <li key={nestedIndex}>
                                                            <Link href={nestedItem.link}
                                                                onClick={() => {
                                                                    setIsOpen(false)
                                                                }}
                                                                className="block py-1 text-au-true-black hover:text-au-burgundy">{nestedItem.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;
