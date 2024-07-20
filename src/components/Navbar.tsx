"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuData } from "@/constant/Menu";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";

const Navbar = () => {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState("");
    const [prevPath, setPrevPath] = useState("");
    const [currentinnerPath, setCurrentinnerPath] = useState(false);
    const [isInnerNav, setIsInnerNav] = useState(false);
    const [isOuterNav, setIsOuterNav] = useState(false);
    const [innerNav, setInnerNav] = useState(false);

    const findHighestLevelNameByLink = (data: any[], link: string): string | null => {
        for (const item of data) {
          // Check if the link is directly matched
          if (item.link === link) {
            return item.name;
          }
          
          // If the item has a submenu, check in the submenu
          if (item.submenu) {
            const found = findHighestLevelNameByLink(item.submenu, link);
            if (found) {
              // If found in submenu, return the name of the immediate parent item
              return item.name;
            }
          }
        }
        return null;
      };
    

    const getmenuByName = (data: any, menuName: any) => {
        const menuItem = data.find((item: any) => item.name === menuName);
        return menuItem ? menuItem.submenu || [] : [];
    };

    const getSubmenuByName = (data: any, menuName: any) => {
        for (let item of data) {
            if (item.submenu) {
                for (let subItem of item.submenu) {
                    if (subItem.name === menuName) {
                        return subItem.submenu || [];
                    }
                    if (subItem.submenu) {
                        for (let nestedItem of subItem.submenu) {
                            if (nestedItem.name === menuName) {
                                return nestedItem.submenu || [];
                            }
                        }
                    }
                }
            }
        }
        return [];
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const pathFromLocalStorage =
            typeof localStorage !== "undefined"
                ? localStorage.getItem("currentpath")
                : null;
        const current_path = pathFromLocalStorage ? pathFromLocalStorage : "";
        setCurrentPath(current_path);
        setPrevPath(current_path);
    }, []);

    useEffect(() => {
        console.log(currentPath)
        const a = getSubmenuByName(menuData, currentPath);
        if (a.length === 0) {
            setCurrentinnerPath(false);
            setInnerNav(false);
        } else {
            setCurrentinnerPath(true);
            setInnerNav(true);
        }
    }, [currentPath, innerNav]);

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
        const name = findHighestLevelNameByLink(menuData, pathname);
        if (name !== null) {
          setCurrentPath(name);
          localStorage.setItem("currentpath", name);
        }
      }, [pathname]);

    return (
        <>
            <MobileNav
                open={isMobileMenuOpen}
                setIsOpen={setIsMobileMenuOpen}
                currentPath={currentPath}
                setCurrentPath={setCurrentPath}
                prevPath={prevPath}
                setPrevPath={setPrevPath}
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
                            onClick={() => setCurrentPath("")}
                            className="relative h-6 w-6 sm:h-20 sm:w-20"
                        >
                            <Image
                                src="/assets/au-web-logo-d.png"
                                fill
                                alt={"Logo preview"}
                            />
                        </Link>

                        <ul
                            onMouseLeave={() => {
                                setCurrentPath(prevPath);
                            }}
                            className={`${isHome ? "text-au-white" : "text-au-100-black"
                                } flex justify-between gap-0`}
                        >
                            {menuData.map((item, index) => (
                                <li key={index} className="group">
                                    <Link
                                        href={item.link}
                                        onClick={() => {
                                            setInnerNav(false);
                                            setIsInnerNav(false);
                                            setCurrentPath(item.name);
                                            // addRoute(item.name)
                                            setPrevPath(item.name);
                                            localStorage.setItem("currentpath", item.name);
                                        }}
                                        onMouseEnter={() => {
                                            setCurrentPath(item.name);
                                            // setPrevPath(item.name)
                                            setInnerNav(false);
                                            setIsInnerNav(false);
                                            // setCurrentinnerPath(false)
                                            setIsOuterNav(true);
                                            isInnerNav && setInnerNav(false);
                                        }}
                                        onMouseLeave={() => {
                                            // item.name === "About" && setCurrentPath(prevPath)
                                            isInnerNav && setInnerNav(true);
                                        }}
                                        className={`${isHome ? "text-au-white" : "text-au-true-black"
                                            } py-[40px] -translate-y-1 px-4 mx-2 hover:transition-all hover:ease-in-out delay-150 group-hover:border-b-4 hover:border-au-burgundy ${!isHome && item.name === currentPath && "border-b-4"
                                            }  ${pathname.startsWith(item.link) ? "border-b-4" : ""
                                            } border-au-burgundy`}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.submenu.length > 0 && (
                                        <div>
                                            <div
                                                className={`absolute left-0 mt-[40px] w-[100%] bg-au-burgundy text-au-white hidden group-hover:block group-hover:z-[10] hover:transition-all hover:ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-0`}
                                                onMouseEnter={() => isOuterNav && setInnerNav(false)}
                                                onMouseLeave={() => {
                                                    setIsOuterNav(false);
                                                    setCurrentPath(prevPath);
                                                    // console.log(getSubmenuByName(menuData, currentPath))
                                                    isInnerNav ? "" : setCurrentPath("");
                                                    isInnerNav && setInnerNav(true);
                                                }}
                                            >
                                                <div className="2xl:w-[1440px] 2xl:mx-auto px-5 2xl:px-0 flex justify-between items-center ">
                                                    <p className="text-[20px] font-bold py-4">
                                                        {/* {innerNav ? currentPath : item.name} */}
                                                        {currentPath?.length === 0 ? item.name : currentPath}
                                                        {/* {currentPath}
                                                        {pathname} */}
                                                    </p>
                                                    <div className="">
                                                        {!innerNav && (
                                                            <ul className={`flex items-center gap-5`}>
                                                                {item.submenu.map((subItem, subIndex) => (
                                                                    <li key={subIndex}>
                                                                        <Link
                                                                            href={subItem.link}
                                                                            onClick={() => {
                                                                                // if (currentinnerPath) {
                                                                                // setInnerNav(true)
                                                                                setIsInnerNav(true);
                                                                                setCurrentPath(subItem.name);
                                                                                setPrevPath(subItem.name);
                                                                                // addRoute(subItem.name)
                                                                                localStorage.setItem(
                                                                                    "currentpath",
                                                                                    subItem.name
                                                                                );
                                                                                // }
                                                                                // else {
                                                                                //     setInnerNav(false)
                                                                                //     setIsInnerNav(false)
                                                                                //     setCurrentPath(subItem.name)
                                                                                // }
                                                                            }}
                                                                            className={`block py-4 ${currentPath === subItem.name
                                                                                ? "font-bold text-bold"
                                                                                : ""
                                                                                }`}
                                                                        >
                                                                            {subItem.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                    {pathname.startsWith(item.link) && innerNav && (
                                                        <ul className="flex items-center gap-5">
                                                            {getSubmenuByName(menuData, currentPath).map(
                                                                (subItem: any, subIndex: any) => (
                                                                    <li key={subIndex}>
                                                                        <Link
                                                                            href={subItem.link}
                                                                            onClick={() => {
                                                                                // setCurrentPath(subItem.name)
                                                                                // setPrevPath(subItem.name)
                                                                                localStorage.setItem(
                                                                                    "currentpath",
                                                                                    subItem.name
                                                                                );
                                                                            }}
                                                                            className={`${currentPath === subItem.name
                                                                                ? "font-bold text-bold"
                                                                                : ""
                                                                                }`}
                                                                        >
                                                                            {subItem.name}
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                            {(pathname === "/job-openings" ? isHome : !isHome) && (
                                                <div
                                                    className={`absolute left-0 mt-[40px] w-[100%] text-au-white bg-au-burgundy hover:transition-all hover:ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-0 ${pathname.startsWith(item.link) && "block z-[5]"
                                                        }`}
                                                >
                                                    <div className="2xl:w-[1440px] 2xl:mx-auto px-5 2xl:px-0 flex justify-between items-center ">
                                                        <div className="py-4">
                                                            <p className="text-[20px] font-bold">
                                                                {currentPath?.length === 0
                                                                    ? item.name
                                                                    : currentPath}
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            {!innerNav && (
                                                                <ul className={`flex items-center gap-5`}>
                                                                    {item.submenu.map((subItem, subIndex) => (
                                                                        <li key={subIndex}>
                                                                            <Link
                                                                                href={subItem.link}
                                                                                onClick={() => {
                                                                                    setIsInnerNav(true);
                                                                                    setIsOuterNav(false);
                                                                                    setCurrentPath(subItem.name);
                                                                                    setPrevPath(subItem.name);
                                                                                    // addRoute(subItem.name)
                                                                                    localStorage.setItem(
                                                                                        "currentpath",
                                                                                        subItem.name
                                                                                    );
                                                                                }}
                                                                                className={`block py-4 ${currentPath === subItem.name
                                                                                    ? "font-bold text-bold"
                                                                                    : ""
                                                                                    }`}
                                                                            >
                                                                                {subItem.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                        {innerNav && pathname.startsWith(item.link) && (
                                                            <ul className="flex items-center gap-5">
                                                                {getSubmenuByName(menuData, currentPath).map(
                                                                    (subItem: any, subIndex: any) => (
                                                                        <li key={subIndex} className="">
                                                                            <Link
                                                                                href={subItem.link}
                                                                                onClick={() => {
                                                                                    // setCurrentPath(subItem.name)
                                                                                    // setPrevPath(subItem.name)
                                                                                    localStorage.setItem(
                                                                                        "currentpath",
                                                                                        subItem.name
                                                                                    );
                                                                                }}
                                                                                className={`${currentPath === subItem.name
                                                                                    ? "font-bold text-bold"
                                                                                    : ""
                                                                                    }`}
                                                                            >
                                                                                {subItem.name}
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        )}
                                                        {/* <ul className='flex items-center gap-5'>
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link href={subItem.link} className="block py-4">{subItem.name}</Link>
                                                            </li>
                                                        ))}
                                                    </ul> */}
                                                    </div>
                                                </div>
                                            )}
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
