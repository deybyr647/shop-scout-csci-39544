import React from "react";

export interface Review {
    id: string;
    productId: string;
    author: string;
    rating: number;
    date: string;
    content: string;
}

interface ProductReviewCardProps {
    reviews: Review[];
}

const ProductReviewCard = ({ reviews }: ProductReviewCardProps) => {

    // Helper to render stars
    const renderStars = (rating: number) => {
        return (
            <span className="text-yellow-400 text-sm">
                {"★".repeat(rating)}
                <span className="text-gray-300">{"★".repeat(5 - rating)}</span>
            </span>
        );
    };

    return (
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 mb-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Customer Reviews</h3>

            {reviews.length > 0 ? (
                <div className="space-y-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">
                                        {review.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">{review.author}</p>
                                        <div className="leading-none">{renderStars(review.rating)}</div>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">{review.date}</span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed mt-2">
                                "{review.content}"
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-8 text-gray-500 text-sm">
                    No reviews yet. Be the first to review!
                </div>
            )}
        </div>
    )
}

export default ProductReviewCard;