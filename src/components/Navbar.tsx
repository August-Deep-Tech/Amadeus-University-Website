"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { menuData } from "@/constant/Menu";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import { it } from "node:test";

const Navbar = () => {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [isMobileMenuOpen]);

    const normalizeString = (str: string) => {
        return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    };

    useEffect(() => {
        const handlePathCheck = () => {
            const normalizedSearchString = normalizeString(currentPath);

            const containsSearchString = pathname
                .toLowerCase()
                .split('/')
                .some(segment => normalizeString(segment) === normalizedSearchString);
                console.log(containsSearchString)
                console.log(normalizedSearchString)
            if (containsSearchString) {
                console.log(`The path contains the normalized search string: "${normalizedSearchString}"`);
            }
        };
        window.addEventListener('popstate', handlePathCheck);

        handlePathCheck();

        return () => {
            window.removeEventListener('popstate', handlePathCheck);
        };
    }, [pathname, currentPath]);


    useEffect(() => {
        const item = findMenuItemByLink(menuData, pathname);
        if (!item?.submenu) {
            const highestLevelItem = findHighestLevelNameByLink(menuData, pathname);
            const parentItem = findMenuItemByLink(menuData, highestLevelItem?.link || '');
            if (parentItem?.submenu) {
                setCurrentItem(parentItem);
                setprevItem(parentItem);
            }
        } else {
            if (item) {
                setCurrentItem(item);
                setprevItem(item);
            }
        }
    }, [pathname]);

    const findMenuItemByLink = (data: any[], link: string): any | null => {
        for (const item of data) {
            if (item?.link === link) {
                return { name: item.name, link: item.link, submenu: item.submenu || null };
            }
            if (item.submenu) {
                const foundInSubmenu = findMenuItemByLink(item.submenu, link);
                if (foundInSubmenu) {
                    return foundInSubmenu;
                }
            }
        }
        return null;
    };

    const findHighestLevelNameByLink = (data: any[], link: string, parent: any = null): any | null => {
        for (const item of data) {
            if (item.link === link) {
                return parent ? parent : item;
            }
            
            if (item.submenu) {
                const found = findHighestLevelNameByLink(item.submenu, link, item);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    };


    const [currentItem, setCurrentItem] = useState<{ name: string; link: string; submenu?: any[] } | null>(null);
    const [prevItem, setprevItem] = useState<{ name: string; link: string; submenu?: any[] } | null>(null);

    const handleClick = (link: string) => {
        const item = findMenuItemByLink(menuData, link);
        console.log(item)
        if (item?.submenu !== null) {
            setCurrentItem(item);
        }
    };

    useEffect(() => {
        // console.log(currentItem)
        // console.log(currentPath)
    }, [currentItem, currentPath]);

    return (
        <>
            <MobileNav
                open={isMobileMenuOpen}
                setIsOpen={setIsMobileMenuOpen}
            />
            <nav
                className={`${isHome ? "absolute" : "relative"
                    } w-full border-b border-au-white lg:mb-[60px]`}
            >
                <div className="2xl:w-[1440px] 2xl:mx-auto py-2.5 lg:px-2.5 2xl:px-0">
                    <div className="flex justify-between items-center lg:hidden px-4">
                        <Link href="/">
                            <div className="relative h-12 w-12">
                                <Image
                                    src="/assets/au-web-logo-d.png"
                                    fill
                                    alt={"Logo preview"}
                                />
                            </div>
                        </Link>
                        <Menu
                            onClick={() => setIsMobileMenuOpen(true)}
                            className={`w-10 h-10 ${isHome ? "text-au-white" : "text-au-100-black"
                                }`}
                        />
                    </div>
                    <div className="hidden lg:flex justify-between items-center">
                        <Link
                            href="/"
                            className="relative h-6 w-6 sm:h-20 sm:w-20"
                        >
                            <Image
                                src="/assets/au-web-logo-d.png"
                                fill
                                alt={"Logo preview"}
                            />
                        </Link>

                        <ul
                            className={`${isHome ? "text-au-white" : "text-au-100-black"
                                } flex justify-between gap-0`}
                        >
                            {menuData.map((item, index) => (
                                <li key={index} className="group">
                                    <Link
                                        href={item.link}
                                        onClick={() => {
                                            handleClick(item.link);
                                            setCurrentPath(item.name)
                                        }}
                                        onMouseEnter={() => {
                                            handleClick(item.link);
                                        }}
                                        onMouseLeave={() => {

                                        }}
                                        className={`${isHome ? "text-au-white" : "text-au-true-black"
                                            } py-[40px] -translate-y-1 px-4 mx-2 hover:transition-all hover:ease-in-out delay-150 hover:border-b-4 group-hover:border-au-burgundy ${!isHome && item.name === currentItem?.name && "border-b-4"
                                            }  ${pathname.startsWith(item.link) ? "border-b-4" : ""
                                            } border-au-burgundy`}
                                    >
                                        {item?.name}
                                    </Link>
                                    {item?.submenu.length > 0 && (
                                        <div>
                                            <div
                                                onMouseLeave={() => {
                                                    if (prevItem?.link && prevItem.link.length > 0) {
                                                        handleClick(prevItem.link);
                                                    }
                                                }}
                                                className={`absolute left-0 mt-[40px] w-[100%] bg-au-burgundy text-au-white group-hover:block group-hover:z-[10] hover:transition-all hover:ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-0 block ${!isHome ? "z-[5]" : "hidden"}`}
                                            >
                                                <div className="2xl:w-[1440px] 2xl:mx-auto px-5 2xl:px-0 flex justify-between items-center ">
                                                    <p className="text-[20px] font-bold py-4">
                                                        {currentItem?.name?.length === 0 ? item.name : currentItem?.name}
                                                    </p>
                                                    <div className="">
                                                        <ul className={`flex items-center gap-5`}>
                                                            {currentItem?.submenu && currentItem?.submenu.map((subItem, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <Link
                                                                        href={subItem?.link}
                                                                        onClick={() => {
                                                                            handleClick(subItem.link);
                                                                            setCurrentPath(item?.name)
                                                                        }}
                                                                        className={`block text-sm py-4 ${currentItem?.name === subItem?.name
                                                                            ? "font-bold text-bold"
                                                                            : ""
                                                                            }`}
                                                                    >
                                                                        {subItem?.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
