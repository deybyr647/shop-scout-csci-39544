import React, { useState } from "react";
import { useRouter } from 'next/router';

export interface Product {
    id: string;
    name: string;
    seller: string;
    price: number;
    originalPrice?: number;
    saving?: number;
    imageURL: string;
    productURL: string;
}

const ProductCard = (product: Product) => {
    const router = useRouter();
    // Initialize state with the intended image URL
    const [imgSrc, setImgSrc] = useState(product.imageURL);

    return (
        <div
            key={product.id}
            onClick={() => router.push(`/products/${product.id}`)}
            className="border border-gray-200 rounded-xl p-3 flex gap-4 shadow-sm hover:shadow-md transition cursor-pointer bg-white"
        >
            {/* Image Container */}
            <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden border border-gray-100">
                <img
                    src={imgSrc}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                    onError={() => setImgSrc('/placeholder.png')} // Fallback on error
                />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
                <h3 className="font-bold text-gray-800 line-clamp-2">{product.name}</h3>
                <p className="text-sm text-gray-600">Seller: {product.seller}</p>
                <div className="mt-1">
                    <span className="font-semibold block">Price: ${product.price}</span>
                    {product.saving && (
                        <span className="text-red-500 text-xs font-bold">SAVING ${product.saving}</span>
                    )}
                    {product.originalPrice && (
                        <span className="text-purple-500 text-xs font-bold">Original Price</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;