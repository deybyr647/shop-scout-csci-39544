import React, { useState, useEffect } from "react";
import { Product } from "@/components/results/ProductCard";

interface ProductHeroProps {
    product: Product;
}

const ProductHero = ({ product }: ProductHeroProps) => {
    const [imgSrc, setImgSrc] = useState(product.imageURL);

    // Reset image source if the product prop changes
    useEffect(() => {
        setImgSrc(product.imageURL);
    }, [product.imageURL]);

    return (
        // Updated: Changed from bg-gray-100 to the white card style
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 mb-6 relative overflow-hidden">
            <div className="flex gap-4">
                {/* Product Image */}
                <div className="w-24 h-24 bg-gray-50 rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center border border-gray-100">
                    <img
                        src={imgSrc}
                        alt={product.name}
                        className="w-full h-full object-contain p-2 mix-blend-multiply"
                        onError={() => setImgSrc('/placeholder.png')}
                    />
                </div>

                <div className="flex flex-col justify-center flex-1">
                    <h2 className="font-bold text-lg leading-tight mb-1 text-gray-900">{product.name}</h2>
                    <p className="text-sm text-gray-500 mb-2">Seller: {product.seller}</p>

                    <div className="flex items-baseline gap-2">
                        <p className="font-bold text-lg text-gray-900">${product.price}</p>
                        {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                    </div>

                    {product.saving && (
                        <div className="mt-1 inline-flex self-start bg-red-50 px-2 py-0.5 rounded text-red-600 text-[10px] font-bold uppercase tracking-wide border border-red-100">
                            Save ${product.saving}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductHero;