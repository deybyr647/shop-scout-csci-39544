import React from "react";

const AgentChatBubble = () => {
    return (
        <div className="flex gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
            <div className="text-sm text-gray-800 leading-relaxed">
                The Sony WH-1000XM4 headphones feature Bluetooth 5.0 connectivity...
                <br /><br />
                They support multiple Bluetooth audio codecs, including SBC, AAC, and LDAC.
                <br /><br />
                The headphones also include multipoint pairing, meaning you can connect two devices simultaneously.
            </div>
        </div>
    )
}

export default AgentChatBubble;