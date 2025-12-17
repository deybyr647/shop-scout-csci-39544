import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import productsData from "../../pages/api/products.json";
// We reuse the interface, but not the component, to keep the custom styling of this section
import { Product } from "./ProductCard";

const RelatedProducts = () => {
    const router = useRouter();
    const [related, setRelated] = useState<Product[]>([]);

    useEffect(() => {
        // Randomly select 3 products to simulate a "recommendation engine"
        // In a real app, this would filter by category or user preference
        const shuffled = [...productsData].sort(() => 0.5 - Math.random());
        setRelated(shuffled.slice(0, 3));
    }, []);

    return (
        <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-gray-600 mb-3">You may also like...</p>
            <div className="space-y-3">
                {related.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => router.push(`/products/${product.id}`)}
                        className="border border-gray-200 rounded-xl p-3 flex gap-4 shadow-sm opacity-75 hover:opacity-100 hover:shadow-md transition cursor-pointer bg-white"
                    >
                        {/* Image Container with Fallback */}
                        <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden border border-gray-100">
                            <img
                                src={product.imageURL}
                                alt={product.name}
                                className="w-full h-full object-contain mix-blend-multiply"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/placeholder.png';
                                }}
                            />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col justify-center">
                            <h3 className="font-bold text-gray-800 line-clamp-1">{product.name}</h3>
                            <p className="text-sm text-gray-600">Seller: {product.seller}</p>
                            <span className="font-semibold text-sm">Price: ${product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts;