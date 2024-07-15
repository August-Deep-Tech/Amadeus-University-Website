"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import { menuData } from '@/constant/Menu';
import { Menu } from 'lucide-react';
import MobileNav from './MobileNav';

const Navbar = () => {
    const pathname = usePathname();
    const isHome = pathname === "/"
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [currentPath, setCurrentPath] = useState("")
    const [isInnerNav, setIsInnerNav] = useState(false)
    const [isOuterNav, setIsOuterNav] = useState(false)
    const [innerNav, setInnerNav] = useState(false)
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

    const getmenuByName = (data: any, menuName: any) => {
        const menuItem = data.find((item: any) => item.name === menuName);
        return menuItem ? menuItem.submenu || [] : [];
    };


    const getSubmenuByName = (data: any, menuName: any) => {
        for (let item of data) {
            if (item.name === menuName) {
                return item.submenu || [];
            }
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
    }, [isMobileMenuOpen])

    
    useEffect(() => {
     console.log(currentPath)
    }, [currentPath])

    return (
        <>
            <MobileNav open={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
            <nav className={`${isHome ? "absolute" : "relative"} w-full border-b border-au-white mb-[100px]`}>
                <div className="2xl:w-[1440px] 2xl:mx-auto py-2.5 px-5 2xl:px-0">
                    <div className='flex justify-between items-center xl:hidden px-4'>
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
                            className={`w-10 h-10 ${isHome ? "text-au-white" : "text-au-100-black"}`} />

                    </div>
                    <div className="hidden xl:flex justify-between items-center">
                        <Link href="/" className="relative h-6 w-6 sm:h-20 sm:w-20">
                            <Image
                                src="/assets/au-web-logo-d.png"
                                fill
                                alt={"Logo preview"}
                            />
                        </Link>

                        <ul className={`${isHome ? "text-au-white" : "text-au-100-black"} flex justify-between gap-0`}>
                            {menuData.map((item, index) => (
                                <li key={index} className="group">
                                    <Link href={item.link} onClick={() => {
                                        setInnerNav(false)
                                        setIsInnerNav(false)

                                    }}
                                        onMouseEnter={() => {
                                            // setCurrentPath(item.name)
                                            setIsOuterNav(true)
                                            isInnerNav && setInnerNav(false)
                                        }}
                                        onMouseLeave={() => {
                                            isInnerNav && setInnerNav(true) 
                                        }}
                                        className={`${isHome ? "text-au-white" : "text-au-true-black"} py-[40px] -translate-y-1 px-4 mx-2 hover:transition-all hover:ease-in-out delay-150  hover:border-b-4 hover:border-au-burgundy ${item.name === currentPath && "border-b-4"}  ${pathname.startsWith(item.link) ? "border-b-4" : ""} border-au-burgundy`}>{item.name}
                                    </Link>
                                    {item.submenu.length > 0 && (
                                        <div>
                                            <div className={`absolute left-0 mt-[40px] w-[100%] bg-au-light-purple hidden group-hover:block group-hover:z-[10] hover:transition-all hover:ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-0`}
                                                onMouseEnter={() => isOuterNav && setInnerNav(false)}
                                                onMouseLeave={() => {
                                                    setIsOuterNav(false)
                                                    // console.log(getSubmenuByName(menuData, currentPath))
                                                    isInnerNav ? "" : setCurrentPath("")
                                                    isInnerNav && setInnerNav(true)
                                                }
                                                }
                                            >
                                                <div className="2xl:w-[1440px] 2xl:mx-auto px-5 2xl:px-0 flex justify-between items-center ">
                                                    <p className='text-[20px] font-bold'>
                                                        {innerNav ? currentPath : item.name}
                                                    </p>
                                                    <div className=''>
                                                        {!innerNav && <ul className='flex items-center gap-5'>
                                                            {item.submenu.map((subItem, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <Link href={subItem.link} onClick={() => {
                                                                        setInnerNav(true)
                                                                        setIsInnerNav(true)
                                                                        setCurrentPath(subItem.name)
                                                                    }} className="block py-4">{subItem.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>}
                                                    </div>
                                                    {(pathname.startsWith(item.link) && innerNav) && <ul className='flex items-center gap-5'>
                                                        {getSubmenuByName(menuData, currentPath).map((subItem: any, subIndex: any) => (
                                                            <li key={subIndex}>
                                                                <Link href={subItem.link} onClick={() => setCurrentPath(subItem.name)} className="block py-4">{subItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>}
                                                </div>
                                            </div>
                                            {(pathname === "/job-openings" ? isHome : !isHome) && <div className={`absolute left-0 mt-[40px] w-[100%] bg-au-light-purple hover:transition-all hover:ease-in-out delay-150 ${pathname.startsWith(item.link) && "block z-[5]"}`}>
                                                <div className="2xl:w-[1440px] 2xl:mx-auto px-5 2xl:px-0 flex justify-between items-center ">
                                                    <div className=''>
                                                        <p className='text-[20px] font-bold'>
                                                        {innerNav ? currentPath : item.name}
                                                    </p>
                                                        </div>
                                                    <div className=''>
                                                        {!innerNav && <ul className='flex items-center gap-5'>
                                                            {item.submenu.map((subItem, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <Link href={subItem.link} onClick={() => {
                                                                        setInnerNav(true)
                                                                        setIsInnerNav(true)
                                                                        setCurrentPath(subItem.name)
                                                                    }} className="block py-4">{subItem.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>}
                                                    </div>
                                                    {(pathname.startsWith(item.link) && innerNav) && <ul className='flex items-center gap-5'>
                                                        {getSubmenuByName(menuData, currentPath).map((subItem: any, subIndex: any) => (
                                                            <li key={subIndex}>
                                                                <Link href={subItem.link} onClick={() => setCurrentPath(subItem.name)} className="block py-4">{subItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>}
                                                </div>
                                            </div>}
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
}

export default Navbar;
