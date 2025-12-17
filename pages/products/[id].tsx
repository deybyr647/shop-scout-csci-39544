import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from "@/components/NavBar";
import ActionButtons from "@/components/product/ActionButtons";
import ChatInput from "@/components/product/chat/ChatInput";
import ProductReviewCard from "@/components/product/ProductReviewCard";
import ProductStats from "@/components/product/ProductStats";
import ProductHero from "@/components/product/ProductHero";
import ChatOverlay from "@/components/product/chat/ChatOverlay";

// Import Data
import productsData from "../api/products.json";
import reviewsData from "../api/reviews.json";

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'agent';
}

export default function ProductDetail() {
    const router = useRouter();
    const { id } = router.query;

    // Find the product
    const product = productsData.find((p) => p.id === id);

    // Filter reviews for this product
    const productReviews = reviewsData.filter((r) => r.productId === id);

    // Chat State
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi! I'm Scout. Ask me anything about this product.", sender: 'agent' }
    ]);

    const handleSend = (text: string) => {
        const newMessage: Message = { id: Date.now(), text, sender: 'user' };
        setMessages(prev => [...prev, newMessage]);

        setTimeout(() => {
            const responseText = `Here is some info about "${text}" regarding the ${product?.name || 'product'}. (This is a simulated AI response).`;
            setMessages(prev => [...prev, { id: Date.now() + 1, text: responseText, sender: 'agent' }]);
        }, 1000);
    };

    if (!product) {
        return <div className="p-10 text-center">Loading product or not found...</div>;
    }

    return (
        <div className="min-h-screen bg-white font-sans max-w-md mx-auto border-x border-gray-200 relative">
            <NavBar/>

            <div className="p-4 pb-40">
                <ProductHero product={product} />

                {/* Pass filtered reviews to Stats and Review Card */}
                <ProductStats/>
                <ProductReviewCard reviews={productReviews} />
            </div>

            {/* Chat Overlay */}
            {isChatOpen && (
                <ChatOverlay
                    messages={messages}
                    onClose={() => setIsChatOpen(false)}
                    onSend={handleSend}
                />
            )}

            {/* Sticky Bottom Area */}
            <div className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-gray-100 p-4 rounded-t-3xl shadow-lg transition-transform ${isChatOpen ? 'z-0 hidden' : 'z-20'}`}>
                <ChatInput
                    onFocus={() => setIsChatOpen(true)}
                    onSend={handleSend}
                />
                <ActionButtons productURL={product.productURL} />
            </div>
        </div>
    );
}