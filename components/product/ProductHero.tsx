import React, { useState, useEffect } from "react";
import { Product } from "@/components/results/ProductCard";

interface ProductHeroProps {
    product: Product;
}

const ProductHero = ({ product }: ProductHeroProps) => {
    const [imgSrc, setImgSrc] = useState(product.imageURL);

    // Reset image source if the product prop changes (e.g. navigation between products)
    useEffect(() => {
        setImgSrc(product.imageURL);
    }, [product.imageURL]);

    return (
        <div className="bg-gray-100 rounded-xl p-4 mb-6">
            <div className="flex gap-4">
                {/* Product Image */}
                <div className="w-24 h-24 bg-white rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center border border-gray-200">
                    <img
                        src={imgSrc}
                        alt={product.name}
                        className="w-full h-full object-contain p-1"
                        onError={() => setImgSrc('/placeholder.png')}
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="font-bold text-lg leading-tight mb-1">{product.name}</h2>
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