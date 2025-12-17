import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import productsData from '../../pages/api/products.json';

const PopularProducts = () => {
    const router = useRouter();
    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        // Shuffle the products array and pick the first 3 items to simulate "Popular" trends
        const shuffled = [...productsData].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3).map(p => p.name);
        setItems(selected);
    }, []);

    const handleItemClick = (term: string) => {
        // Navigate to results with the search query pre-filled
        router.push(`/results?q=${encodeURIComponent(term)}`);
    };

    // Show a loading state or nothing while hydrating to prevent flicker
    if (items.length === 0) {
        return (
            <div>
                <h2 className="text-xl font-semibold mb-4">Popular Items</h2>
                <div className="space-y-4 animate-pulse">
                    <div className="h-6 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-6 bg-gray-100 rounded w-1/2"></div>
                    <div className="h-6 bg-gray-100 rounded w-2/3"></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Popular Items</h2>
            <ul className="space-y-4">
                {items.map((item) => (
                    <li
                        key={item}
                        className="text-gray-700 text-lg cursor-pointer hover:text-black transition-colors"
                        onClick={() => handleItemClick(item)}
                    >
                        {item}
                    </li>
                ))}
                <li className="text-gray-400 select-none">...</li>
            </ul>
        </div>
    )
}

export default PopularProducts;