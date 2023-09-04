"use client"
import { FC, useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";

const Header: FC = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        // <header className={`bg-light mb-3 shadow-lg sticky top-0 z-40 ${styles.header}`}>
        //     <div className="container mx-auto">
        //         <div className="flex items-center justify-between p-4">
        //             <Link href="/">
        //                 <Image
        //                     src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676022120/ICON/logo_zxf49n.png"
        //                     alt="logo"
        //                     width={100}
        //                     height={50}
        //                     className={styles.logo}
        //                 />
        //             </Link>
        //             <nav className={`hidden lg:flex space-x-4 ${styles.textMenu}`}>
        //                 <Link href="/" className={`text-lg font-semibold ${styles.textOne}`}>
        //                     <img
        //                         className={styles.image}
        //                         src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1677207311/ICON/icons8-home-page_wdrltd.gif"
        //                         alt="home"
        //                     />{" "}
        //                     Trang chủ
        //                 </Link>
        //                 <Link href="/products" className={`text-lg font-semibold ${styles.textOne}`}>
        //                     Sản phẩm
        //                 </Link>
        //                 <Link href="/partners" className={`text-lg font-semibold ${styles.textOne}`}>
        //                     Đối tác
        //                 </Link>
        //                 <Link href="/news" className={`text-lg font-semibold ${styles.textOne}`}>
        //                     Tin tức
        //                 </Link>
        //             </nav>
        //             <div className="hidden lg:flex space-x-4 items-center">
        //                 <input
        //                     type="search"
        //                     placeholder="Search"
        //                     className="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md"
        //                     aria-label="Search"
        //                 />
        //                 <div className="bg-gray-100 rounded-md overflow-hidden">
        //                     {/* Các mục tìm kiếm ở đây */}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </header>
        <nav className="w-full bg-light sticky shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <img
                                src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676022120/ICON/logo_zxf49n.png"
                                alt="logo"
                                width={100}
                                height={50}
                                className={styles.logo}
                            />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li>
                                <Link href="/">
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link href="/products">
                                    Sản phẩm
                                </Link>
                            </li>
                            <li>
                                <Link href="/partners">
                                    Đối tác
                                </Link>
                            </li>
                            <li>
                                <Link href="/news">
                                    Tin tức
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
