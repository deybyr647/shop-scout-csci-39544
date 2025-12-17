import React from "react";
import { useRouter } from 'next/router';

const PopularProducts = () => {
    const router = useRouter();

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Popular Items</h2>
            <ul className="space-y-4">
                {['Glasses', 'Portable Chargers', 'Laptops'].map((item) => (
                    <li
                        key={item}
                        className="text-gray-700 text-lg cursor-pointer hover:text-black"
                        onClick={() => router.push('/results')}
                    >
                        {item}
                    </li>
                ))}
                <li className="text-gray-400">...</li>
            </ul>
        </div>
    )
}

export default PopularProducts;