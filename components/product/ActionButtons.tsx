import React from "react";

interface ActionButtonsProps {
    productURL: string;
}

const ActionButtons = ({ productURL }: ActionButtonsProps) => {
    console.log(productURL);

    return (
        <div className="flex gap-3">
            <a
                href={productURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl shadow-sm transition flex items-center justify-center text-center no-underline"
            >
                Buy now
            </a>
            <button className="flex-1 bg-teal-400 hover:bg-teal-500 text-black font-semibold py-3 rounded-xl shadow-sm transition">
                Add to list
            </button>
        </div>
    )
}

export default ActionButtons;