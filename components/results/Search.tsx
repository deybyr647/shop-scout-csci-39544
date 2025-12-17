import React, { useState } from "react";
import { useRouter } from 'next/router';

const Search = () => {
    const router = useRouter();
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/results?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative mb-10">
            <span className="absolute left-3 top-3 text-gray-400">🔍</span>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Start your product search"
                className="w-full bg-gray-100 rounded-full py-3 pl-10 pr-10 outline-none text-gray-700"
            />
            <span className="absolute right-3 top-3 text-gray-400">🎤</span>
        </form>
    )
}

export default Search;