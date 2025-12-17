import { useState, useEffect } from 'react';

export interface Message {
    id: number;
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export const useChatHistory = (productId: string | undefined) => {
    // Default initial state
    const initialMessage: Message = {
        id: 1,
        role: 'assistant',
        content: "Hi! I'm Scout. Ask me anything about this product."
    };

    const [messages, setMessages] = useState<Message[]>([initialMessage]);
    const [isLoaded, setIsLoaded] = useState(false);

    // 1. LOAD Memory
    useEffect(() => {
        if (!productId) return;

        // Reset to default when switching products
        setMessages([initialMessage]);

        const key = `shop_scout_chat_${productId}`;
        const savedChat = localStorage.getItem(key);

        if (savedChat) {
            try {
                const parsedMessages = JSON.parse(savedChat);
                if (parsedMessages.length > 0) {
                    setMessages(parsedMessages);
                }
            } catch (e) {
                console.error("Failed to parse chat history", e);
            }
        }
        setIsLoaded(true);
    }, [productId]);

    // 2. SAVE Memory
    useEffect(() => {
        // Only save if we have loaded the previous chat and have a valid product
        if (!productId || !isLoaded) return;

        const key = `shop_scout_chat_${productId}`;

        // Save if we have more than just the default message, OR if we deliberately cleared it
        if (messages.length > 1) {
            localStorage.setItem(key, JSON.stringify(messages));
        }
    }, [messages, productId, isLoaded]);

    // Utility: Clear history for this product
    const clearHistory = () => {
        if (!productId) return;
        localStorage.removeItem(`shop_scout_chat_${productId}`);
        setMessages([initialMessage]);
    };

    return {
        messages,
        setMessages,
        clearHistory
    };
};