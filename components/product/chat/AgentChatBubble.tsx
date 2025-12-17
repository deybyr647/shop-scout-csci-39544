import React from "react";

const AgentChatBubble = ({ text }: { text: string }) => {
    return (
        <div className="flex gap-2 mb-4 animate-fade-in">
            <div className="w-8 h-8 bg-black rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
            <div className="text-sm text-gray-800 leading-relaxed bg-gray-50 p-3 rounded-2xl rounded-tl-none">
                {text}
            </div>
        </div>
    )
}
export default AgentChatBubble;