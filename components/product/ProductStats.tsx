import React, { useEffect, useState } from "react";

const ProductStats = () => {
    const [stats, setStats] = useState<number[]>([]); // Percentages for bars
    const [average, setAverage] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number>(0);

    useEffect(() => {
        // 1. Generate random "counts" for 5 stars down to 1 star
        // We bias the random numbers higher for 5/4 stars to simulate a generally "good" product
        const counts = [
            Math.floor(Math.random() * 400) + 150, // 5 stars
            Math.floor(Math.random() * 150) + 50,  // 4 stars
            Math.floor(Math.random() * 80) + 20,   // 3 stars
            Math.floor(Math.random() * 40) + 10,   // 2 stars
            Math.floor(Math.random() * 30) + 5     // 1 star
        ];

        // 2. Calculate Total Reviews
        const total = counts.reduce((acc, curr) => acc + curr, 0);

        // 3. Calculate Weighted Average
        // Formula: (5*count5 + 4*count4 ... + 1*count1) / total
        const sumWeighted = counts.reduce((acc, count, index) => {
            const starValue = 5 - index;
            return acc + (count * starValue);
        }, 0);

        const calculatedAvg = total > 0 ? (sumWeighted / total) : 0;

        // 4. Calculate percentages for the bars
        const percentages = counts.map(count => total > 0 ? (count / total) * 100 : 0);

        setStats(percentages);
        setAverage(calculatedAvg);
        setTotalCount(total);
    }, []);

    // Helper to render star icons based on the average
    const renderStars = (rating: number) => {
        return (
            <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                    <span key={i}>
                        {i < Math.round(rating) ? "★" : <span className="text-gray-300">★</span>}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="mb-6">
            <h3 className="font-semibold mb-3">Reviews & Ratings</h3>
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex flex-col sm:flex-row gap-6 items-center">

                {/* Left Side: Big Average & Total */}
                <div className="flex flex-col items-center justify-center min-w-[100px]">
                    <div className="text-5xl font-bold text-gray-900">
                        {average.toFixed(1)}
                    </div>
                    <div className="mt-1 mb-1">
                        {renderStars(average)}
                    </div>
                    <p className="text-xs text-gray-500 font-medium">
                        {totalCount.toLocaleString()} Reviews
                    </p>
                </div>

                {/* Right Side: Distribution Bars */}
                <div className="flex-1 w-full space-y-2">
                    {stats.length > 0 ? (
                        stats.map((percentage, index) => (
                            <div key={index} className="flex items-center gap-3 text-xs">
                                <span className="w-3 font-bold text-gray-500">{5 - index}</span>
                                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-yellow-400 rounded-full"
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Loading State
                        <div className="animate-pulse space-y-2">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="h-2 bg-gray-100 rounded-full w-full"></div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductStats;