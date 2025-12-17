import React from 'react';
import Search from "@/components/results/Search";
import PopularProducts from "@/components/landing/PopularProducts";

export default function Home() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 max-w-md mx-auto border-x border-gray-200">
            <main className="p-6 flex flex-col h-full">
                {/* Header */}
                <div className="mt-10 mb-8 text-center">
                    <h1 className="text-3xl font-bold mb-2">Welcome to ShopScout!</h1>
                    <p className="text-gray-600 text-sm">
                        Find the best product for you with our AI powered shopping assistant
                    </p>
                </div>

                {/* Search Bar */}
                <Search />

                {/* Hero Image Section */}
                <div className="flex justify-center my-10 relative">
                    {/* Gradient removed as requested */}

                    {/* Mascot Image - Increased size to w-72 h-72 */}
                    <img
                        src="/scout.png"
                        alt="ShopScout Mascot"
                        className="w-60 h-60 object-contain animate-float"
                    />
                </div>

                {/* Popular Items */}
                <PopularProducts/>
            </main>
        </div>
    );
}