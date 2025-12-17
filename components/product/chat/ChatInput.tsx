import React, {useState} from "react";

const ChatInput = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatInput, setChatInput] = useState("");

    return (
        <div className="mb-4">
            <p className="text-gray-600 text-sm font-semibold mb-2 ml-1">Questions? Ask Scout!</p>
            <div className="bg-white rounded-2xl p-2 flex items-center shadow-sm border border-gray-200">
                <input
                    type="text"
                    placeholder="Ask anything"
                    className="flex-1 outline-none text-sm px-2 py-1"
                    onFocus={() => setIsChatOpen(true)}
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                />
                <div className="flex gap-2 text-gray-400 px-2">
                    <span>📷</span>
                    <span>🎤</span>
                </div>
                <button className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-gray-500">
                    ↑
                </button>
            </div>
        </div>
    )
}

export default ChatInput;