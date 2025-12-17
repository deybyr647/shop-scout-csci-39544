import React from "react";
import { useRouter } from 'next/router';

// Mock Data Type
export interface Product {
    id: string;
    name: string;
    seller: string;
    price: number;
    originalPrice?: number;
    saving?: number;
    imageColor: string; // Placeholder for real image
}

const ProductCard = (product: Product) => {
    const router = useRouter();

    return (
        <div
            key={product.id}
            onClick={() => router.push(`/products/${product.id}`)}
            className="border border-gray-200 rounded-xl p-3 flex gap-4 shadow-sm hover:shadow-md transition cursor-pointer"
        >
            {/* Image Placeholder */}
            <div className={`w-24 h-24 ${product.imageColor} rounded-md flex-shrink-0 flex items-center justify-center text-xs text-gray-500`}>
                Product Img
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
                <h3 className="font-bold text-gray-800">{product.name}</h3>
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