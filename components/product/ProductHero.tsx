import React from "react";

const ProductHero = () => {
    return (
        <div className="bg-gray-100 rounded-xl p-4 mb-6">
            <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-300 rounded-lg flex-shrink-0"></div> {/* Image Placeholder */}
                <div>
                    <h2 className="font-bold text-lg">Sony WH-1000XM4</h2>
                    <p className="text-sm text-gray-600">Seller: Sony Electronics</p>
                    <p className="font-semibold mt-1">Price: $199.99</p>
                    <p className="text-red-500 text-xs font-bold">SAVING $150.00</p>
                </div>
            </div>
        </div>
    )
}

export default ProductHero;