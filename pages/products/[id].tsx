import React, { useState } from 'react';
import { useRouter } from 'next/router';
import NavBar from "@/components/NavBar";
import ActionButtons from "@/components/product/ActionButtons";
import ChatInput from "@/components/product/chat/ChatInput";
import ProductReviewCard from "@/components/product/ProductReviewCard";
import ProductStats from "@/components/product/ProductStats";
import ProductHero from "@/components/product/ProductHero";
import ChatOverlay from "@/components/product/chat/ChatOverlay";

// Import Custom Hook
import { useChatHistory, Message } from '@/components/hooks/useChatHistory';

// Import Data
import productsData from "../api/products.json";
import reviewsData from "../api/reviews.json";

export default function ProductDetail() {
    const router = useRouter();
    // Force id to string to satisfy type requirements
    const id = typeof router.query.id === 'string' ? router.query.id : undefined;

    const product = productsData.find((p) => p.id === id);
    const productReviews = reviewsData.filter((r) => r.productId === id);

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // --- USE THE CUSTOM HOOK ---
    // This one line replaces all the useEffects and localStorage logic
    const { messages, setMessages, clearHistory } = useChatHistory(id);

    const handleSend = async (text: string) => {
        const userMsg: Message = { id: Date.now(), role: 'user', content: text };
        const newHistory = [...messages, userMsg];
        setMessages(newHistory);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: newHistory.map(m => ({ role: m.role, content: m.content })),
                    product: product,
                    reviews: productReviews
                }),
            });

            if (!response.ok) throw new Error('Failed to fetch response');

            const data = await response.json();

            const aiMsg: Message = {
                id: Date.now() + 1,
                role: 'assistant',
                content: data.message.content
            };
            setMessages(prev => [...prev, aiMsg]);

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                role: 'assistant',
                content: "Sorry, I'm having trouble connecting to the server right now."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!product) {
        return <div className="p-10 text-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-white font-sans max-w-md mx-auto border-x border-gray-200 relative">
            <NavBar/>

            <div className="p-4 pb-40">
                <ProductHero product={product} />
                <ProductStats/>
                <ProductReviewCard reviews={productReviews} />

                {/* Optional: Dev tool to clear chat */}
                {/* <button onClick={clearHistory} className="text-xs text-red-400 mt-4">Clear Chat History</button> */}
            </div>

            {/* Chat Overlay */}
            {isChatOpen && (
                <ChatOverlay
                    messages={messages.map(m => ({
                        id: m.id,
                        text: m.content,
                        sender: m.role === 'user' ? 'user' : 'agent'
                    }))}
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
                {isLoading && <p className="text-xs text-center text-gray-400 mb-2">Scout is thinking...</p>}
                <ActionButtons productURL={product.productURL} />
            </div>
        </div>
    );
}