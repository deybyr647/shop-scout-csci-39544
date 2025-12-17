import React, {useState} from "react";
import ChatInput from "@/components/product/chat/ChatInput";
import AgentChatBubble from "@/components/product/chat/AgentChatBubble";
import UserChatBubble from "@/components/product/chat/UserChatBubble";

const ChatOverlay = () => {
    const [isChatOpen, setIsChatOpen] = useState(true);
    const [chatInput, setChatInput] = useState("");

    return (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm max-w-md mx-auto p-4 flex flex-col h-full animate-fade-in-up">
            {/* Close Button */}
            <div className="flex justify-end mb-2">
                <button onClick={() => setIsChatOpen(false)} className="p-2 bg-gray-200 rounded-full text-gray-600">✕</button>
            </div>

            {/* AI Response Bubble */}
            <div className="flex-1 overflow-y-auto">
                <UserChatBubble />

                <AgentChatBubble/>
            </div>
        </div>
    )
}

export default ChatOverlay;