import React from 'react';
import { useRouter } from 'next/router';
import ProductCard from "@/components/results/ProductCard";
import RelatedProducts from "@/components/results/RelatedProducts";
import Search from "@/components/results/Search";
import NavBar from "@/components/NavBar";
import productsData from "./api/products.json";
import SEOHead from "@/components/SEOHead";

export default function Results() {
    const router = useRouter();
    const { q } = router.query;

    // Filter products if a query exists, otherwise show all (or a default set)
    const filteredProducts = q
        ? productsData.filter(p =>
            p.name.toLowerCase().includes((q as string).toLowerCase()) ||
            p.seller.toLowerCase().includes((q as string).toLowerCase())
        )
        : productsData.slice(0, 5); // Default to first 5 if no search

    return (
        <div className="min-h-screen bg-white font-sans max-w-md mx-auto border-x border-gray-200 pb-10">
            <SEOHead title={`Results for "${q}"... - ShopScout`} />
            <div className="p-4 sticky top-0 bg-white z-10 border-b border-gray-100">
                <NavBar/>
                <Search />
            </div>

            <div className="p-4">
                <p className="text-gray-600 mb-4">
                    {q ? `Results for "${q}"...` : "Here's what we found..."}
                </p>

                <div className="space-y-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((p) => (
                            <ProductCard
                                key={p.id}
                                id={p.id}
                                name={p.name}
                                seller={p.seller}
                                price={p.price}
                                imageURL={p.imageURL}
                                productURL={p.productURL}
                                saving={p.saving}
                                originalPrice={p.originalPrice}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 mt-10">No products found.</p>
                    )}
                </div>

                <RelatedProducts/>
            </div>
        </div>
    );
}