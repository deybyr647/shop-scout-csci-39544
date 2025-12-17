import React from "react";

const ProductReviewCard = () => {
    return (
        <div className="mb-6">
            <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-orange-200 rounded-full"></div>
                    <span className="font-bold text-xs">Jasmine</span>
                </div>
                <p>"Ideally best headphones I've verified these are cleaner..."</p>
            </div>
        </div>
    )
}

export default ProductReviewCard;