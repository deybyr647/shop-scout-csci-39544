import React from "react";

const UserChatBubble = ({ text }: { text: string }) => {
    return (
        <div className="flex justify-end mb-4 animate-fade-in">
            <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-2 text-sm max-w-[80%]">
                {text}
            </div>
        </div>
    )
}
export default UserChatBubble;