import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: FC = () => {

    return (
        <header className="bg-light mb-3 shadow-lg sticky top-0 z-40">
            <div className="container mx-auto">
                <div className="flex items-center justify-between p-4">
                    <Link href="/">
                        <Image
                            src="https://res.cloudinary.com/dwpjjpgrz/image/upload/v1676022120/ICON/logo_zxf49n.png"
                            alt="logo"
                            width={100}
                            height={50}
                        />
                    </Link>
                    <nav className="hidden lg:flex space-x-4">
                        <Link href="/" className={`text-lg font-semibold`}>
                            Trang chủ
                        </Link>
                        <Link href="/products" className={`text-lg font-semibold`}>
                            Sản phẩm
                        </Link>
                        <Link href="/partners" className={`text-lg font-semibold`}>
                            Đối tác
                        </Link>
                        <Link href="/news" className={`text-lg font-semibold`}>
                            Tin tức
                        </Link>
                    </nav>
                    <div className="hidden lg:flex space-x-4 items-center">
                        <input
                            type="search"
                            placeholder="Search"
                            className="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md"
                            aria-label="Search"
                        />
                        <div className="bg-gray-100 rounded-md overflow-hidden">
                            {/* Các mục tìm kiếm ở đây */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
