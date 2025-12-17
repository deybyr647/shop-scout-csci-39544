import React from "react";

const RelatedProducts = () => {
    return (
        <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-gray-600 mb-3">You may also like...</p>
            <div className="border border-gray-200 rounded-xl p-3 flex gap-4 shadow-sm opacity-75">
                <div className="w-24 h-24 bg-black rounded-md flex-shrink-0"></div>
                <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-gray-800">Bose QuietComfort</h3>
                    <p className="text-sm text-gray-600">Seller: Bose Shop</p>
                    <span className="font-semibold text-sm">Price: $179.99</span>
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts;