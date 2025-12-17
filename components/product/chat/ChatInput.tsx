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
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2 ml-1">Ask Scout</p>
            {/* Updated: rounded-xl to match other cards, focus-within ring for accessibility */}
            <div className="bg-white rounded-xl p-1.5 flex items-center shadow-sm border border-gray-200 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
                <input
                    type="text"
                    placeholder="Ask anything about this product..."
                    className="flex-1 outline-none text-sm px-3 py-2 text-gray-700 placeholder-gray-400"
                    onFocus={onFocus}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div className="flex gap-1 text-gray-400 px-1">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-400 hover:text-gray-600">📷</button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-400 hover:text-gray-600">🎤</button>
                </div>
                <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                        input.trim()
                            ? "bg-black text-white hover:bg-gray-800 shadow-md"
                            : "bg-gray-100 text-gray-400"
                    }`}
                >
                    ↑
                </button>
            </div>
        </div>
    )
}
export default ChatInput;