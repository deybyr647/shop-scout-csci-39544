import React, { useState } from "react";

interface ChatInputProps {
    onFocus?: () => void;
    onSend: (text: string) => void;
}

const ChatInput = ({ onFocus, onSend }: ChatInputProps) => {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        onSend(input);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="mb-4">
            <p className="text-gray-600 text-sm font-semibold mb-2 ml-1">Questions? Ask Scout!</p>
            <div className="bg-white rounded-2xl p-2 flex items-center shadow-sm border border-gray-200">
                <input
                    type="text"
                    placeholder="Ask anything"
                    className="flex-1 outline-none text-sm px-2 py-1"
                    onFocus={onFocus}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div className="flex gap-2 text-gray-400 px-2">
                    <span className="cursor-pointer">📷</span>
                    <span className="cursor-pointer">🎤</span>
                </div>
                <button
                    onClick={handleSend}
                    className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 transition"
                >
                    ↑
                </button>
            </div>
        </div>
    )
}
export default ChatInput;