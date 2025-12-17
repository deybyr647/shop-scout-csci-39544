import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import ActionButtons from "@/components/product/ActionButtons";
import ChatInput from "@/components/product/chat/ChatInput";
import ProductReviewCard from "@/components/product/ProductReviewCard";
import ProductStats from "@/components/product/ProductStats";
import ProductHero from "@/components/product/ProductHero";
import ChatOverlay from "@/components/product/chat/ChatOverlay";

export default function ProductDetail() {
    const [isChatOpen, setIsChatOpen] = useState(true);
    const [chatInput, setChatInput] = useState("");

    return (
        <div className="min-h-screen bg-white font-sans max-w-md mx-auto border-x border-gray-200 relative">

            {/* --- Top Navigation --- */}
            <NavBar/>

            {/* --- Main Scrollable Content (Screens 3 & 4) --- */}
            <div className="p-4 pb-40"> {/* pb-40 ensures space for fixed bottom elements */}

                {/* Product Hero */}
                <ProductHero/>

                {/* Helpful Info / Charts */}
                <ProductStats/>

                {/* Text Review */}
                <ProductReviewCard/>
            </div>

            {/* --- Chat Overlay (Screen 5 State) --- */}
            {isChatOpen && (
                <ChatOverlay/>
            )}

            {/* --- Sticky Bottom Action Area (Screen 6) --- */}
            <div className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-gray-100 p-4 rounded-t-3xl shadow-lg transition-transform ${isChatOpen ? 'z-50 translate-y-0' : 'z-20'}`}>

                {/* Chat Input */}
                <ChatInput/>

                {/* Action Buttons */}
                <ActionButtons/>
            </div>

        </div>
    );
}