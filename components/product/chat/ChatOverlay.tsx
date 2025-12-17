import React, { useEffect, useRef } from "react";
import ChatInput from "@/components/product/chat/ChatInput";
import AgentChatBubble from "@/components/product/chat/AgentChatBubble";
import UserChatBubble from "@/components/product/chat/UserChatBubble";

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'agent';
}

interface ChatOverlayProps {
    messages: Message[];
    onClose: () => void;
    onSend: (text: string) => void;
}

const ChatOverlay = ({ messages, onClose, onSend }: ChatOverlayProps) => {
    const bottomRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm max-w-md mx-auto p-4 flex flex-col h-full animate-fade-in-up">
            {/* Close Button */}
            <div className="flex justify-end mb-2">
                <button onClick={onClose} className="p-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition">✕</button>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto mb-4 p-2">
                {messages.map((msg) => (
                    msg.sender === 'user'
                        ? <UserChatBubble key={msg.id} text={msg.text} />
                        : <AgentChatBubble key={msg.id} text={msg.text} />
                ))}
                <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <div className="mt-auto">
                <ChatInput onSend={onSend} />
            </div>
        </div>
    )
}
export default ChatOverlay;