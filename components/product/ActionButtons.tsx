import React from "react";

const ActionButtons = () => {
    return (
        <div className="flex gap-3">
            <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl shadow-sm transition">
                Buy now
            </button>
            <button className="flex-1 bg-teal-400 hover:bg-teal-500 text-black font-semibold py-3 rounded-xl shadow-sm transition">
                Add to list
            </button>
        </div>
    )
}

export default ActionButtons;