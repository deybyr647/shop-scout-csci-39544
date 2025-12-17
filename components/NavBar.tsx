import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="p-4 flex justify-center border-b border-gray-100 sticky top-0 bg-white z-10">
            <Link href="/" className="cursor-pointer no-underline">
                <h1 className="font-bold text-lg text-gray-900 hover:text-gray-600 transition-colors">
                    ShopScout
                </h1>
            </Link>
        </div>
    )
}

export default NavBar;