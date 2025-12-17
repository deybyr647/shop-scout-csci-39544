import React from "react";

interface ActionButtonsProps {
    productURL: string;
}

const ActionButtons = ({ productURL }: ActionButtonsProps) => {
    return (
        <div className="flex gap-3">
            <a
                href={productURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] flex items-center justify-center text-center no-underline border border-yellow-500/20"
            >
                Buy now
            </a>
            <button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] border border-gray-200">
                Add to list
            </button>
        </div>
    )
}

export default ActionButtons;