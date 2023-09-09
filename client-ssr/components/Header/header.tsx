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

        // <header className="w-full bg-light sticky shadow top-0">
        //     <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        //         <div>
        //             <div className="flex items-center justify-between py-3 md:py-5 md:block">
        //                 <Link href="/">
        //                     <img
        //                         src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676022120/ICON/logo_zxf49n.png"
        //                         alt="logo"
        //                         width={100}
        //                         height={50}
        //                         className={styles.logo}
        //                     />
        //                 </Link>
        //                 <div className="md:hidden">
        //                     <button
        //                         className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
        //                         onClick={() => setNavbar(!navbar)}
        //                     >
        //                         {navbar ? (
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6 text-white"
        //                                 viewBox="0 0 20 20"
        //                                 fill="currentColor"
        //                             >
        //                                 <path
        //                                     fillRule="evenodd"
        //                                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        //                                     clipRule="evenodd"
        //                                 />
        //                             </svg>
        //                         ) : (
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6 text-white"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                                 strokeWidth={2}
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     d="M4 6h16M4 12h16M4 18h16"
        //                                 />
        //                             </svg>
        //                         )}
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>
        //             <div
        //                 className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
        //                     }`}
        //             >
        //                 <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        //                     <li className="after:absolute after:bottom-0 after:left-0 after:bg-orange 
        //                 after:h-0.5 after:w-0 hover:after:w-5 after:transition-all after:ease-in-out after:duration-300">
        //                         <Link href="/">
        //                             Trang chủ
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link href="/products">
        //                             Sản phẩm
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link href="/partners">
        //                             Đối tác
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link href="/news">
        //                             Tin tức
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </header>
        <header className="py-6 mx-10 sticky top-0">
            <nav className="flex flex-row justify-between items-center ">
                <div className="logo basis-1/6 text-center text-xl font-semibold cursor-pointer">
                    <Link href="/">
                        <img
                            src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676022120/ICON/logo_zxf49n.png"
                            alt="logo"
                            width={100}
                            height={50}
                            className={styles.logo}
                        />
                    </Link>
                </div>
                <ul id="ct-top-menu" className="basis-4/6 uppercase text-sm text-gray-500 font-medium hidden lg:flex lg:items-center lg:justify-end lg:gap-8">
                    <li className="cursor-pointer py-1 hover:text-gray-800 relative after:absolute after:bottom-0 after:left-0 after:bg-orange 
                        after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                        <Link href="/">
                            Trang chủ
                        </Link>
                    </li>
                    <li className="ct-top-menu-item">
                        <Link href="/products">
                            Sản phẩm
                        </Link>
                    </li>
                    <li className="ct-top-menu-item">
                        <Link href="/partners">
                            Đối tác
                        </Link>
                    </li>
                    <li className="ct-top-menu-item">
                        <Link href="/news">
                            Tin tức
                        </Link>
                    </li>
                </ul>

                <ul className="basis-3/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
                    <li className="ct-top-menu-item">
                        <a href="#" className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ct-icon" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <span className="mx-2">Cart</span>
                            <span className="ct-badge-circle bg-orange-400 text-white">10</span>
                        </a>
                    </li>
                </ul>

                <div className="basis-1/6 lg:hidden flex items-center sm:px-4 px-2 cursor-pointer">
                    <svg id="ct-top-menu-icon" xmlns="http://www.w3.org/2000/svg" className="ct-icon w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
        </header>

    );
};

export default Header;
