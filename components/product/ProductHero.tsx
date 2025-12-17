import React from "react";
import { Product } from "@/components/results/ProductCard";

interface ProductHeroProps {
    product: Product;
}

const ProductHero = ({ product }: ProductHeroProps) => {
    return (
        <div className="bg-gray-100 rounded-xl p-4 mb-6">
            <div className="flex gap-4">
                {/* Dynamic Image Color */}
                <div className={`w-24 h-24 ${product.imageColor || 'bg-gray-300'} rounded-lg flex-shrink-0`}></div>
                <div>
                    <h2 className="font-bold text-lg">{product.name}</h2>
                    <p className="text-sm text-gray-600">Seller: {product.seller}</p>
                    <p className="font-semibold mt-1">Price: ${product.price}</p>
                    {product.saving && (
                        <p className="text-red-500 text-xs font-bold">SAVING ${product.saving}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductHero;