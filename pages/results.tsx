import React from 'react';
import ProductCard, {Product} from "@/components/results/ProductCard";
import RelatedProducts from "@/components/results/RelatedProducts";
import Search from "@/components/results/Search";
import NavBar from "@/components/NavBar";

const products: Product[] = [
    { id: '1', name: 'Sony WH-1000XM4', seller: 'Sony Electronics', price: 199.99, saving: 150.00, imageColor: 'bg-gray-200' },
    { id: '2', name: 'Sony WH-1000XM4', seller: 'Target', price: 349.99, originalPrice: 349.99, imageColor: 'bg-gray-800' },
];

export default function Results() {
    return (
        <div className="min-h-screen bg-white font-sans max-w-md mx-auto border-x border-gray-200 pb-10">

            {/* Header / Search Bar */}
            <div className="p-4 sticky top-0 bg-white z-10 border-b border-gray-100">
                <NavBar/>
                <Search />
            </div>

            <div className="p-4">
                <p className="text-gray-600 mb-4">Here's what we found...</p>

                {/* Results List */}
                <div className="space-y-4">
                    {products.map((p) => (
                        <ProductCard id={p.id} name={p.name} seller={p.seller} key={p.id} price={p.price} imageColor={p.imageColor} />
                    ))}
                </div>

                {/* "You may also like" Section */}
                <RelatedProducts/>
            </div>
        </div>
    );
}