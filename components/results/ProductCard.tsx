import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';

// Updated Data Type matching your JSON
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
    const [imgSrc, setImgSrc] = useState(product.imageURL);

    // Update state if props change
    useEffect(() => {
        setImgSrc(product.imageURL);
    }, [product.imageURL]);

    return (
        <div
            onClick={() => router.push(`/products/${product.id}`)}
            className="border border-gray-200 rounded-xl p-3 flex gap-4 shadow-sm hover:shadow-md transition cursor-pointer bg-white relative overflow-hidden"
        >
            {/* Image Container */}
            <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100 p-2">
                <img
                    src={imgSrc}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                    onError={() => setImgSrc('/placeholder.png')}
                />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 leading-tight truncate pr-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-2">Sold by {product.seller}</p>

                <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-bold text-lg text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through decoration-gray-400">
                            ${product.originalPrice}
                        </span>
                    )}
                </div>

                {product.saving && (
                    <div className="mt-1 inline-flex self-start bg-red-50 px-2 py-0.5 rounded text-red-600 text-[10px] font-bold uppercase tracking-wide border border-red-100">
                        Save ${product.saving}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductCard;