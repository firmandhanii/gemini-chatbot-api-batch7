"use client";

import { useState, useEffect, useRef } from 'react';
import styles from '../styles/ChatWidget.module.css';

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
    </svg>
);

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ sender: string, text: string }[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatBodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{ sender: 'model', text: 'Halo! Ada yang bisa saya bantu seputar properti di Yan Property?' }]);
        }
    }, [isOpen]);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = { sender: 'user', text: inputValue };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInputValue('');
        setIsLoading(true);

        const conversationHistory = newMessages.map(msg => ({
             role: msg.sender, // Now correctly sends 'user' or 'model'
             text: msg.text
        }));

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ conversation: conversationHistory }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Server error. Coba lagi nanti.');
            }

            const data = await response.json();
            
            if (data.result) {
                setMessages(prev => [...prev, { sender: 'model', text: data.result }]);
            } else if (data.error) {
                throw new Error(data.error);
            }

        } catch (error: any) {
            setMessages(prev => [...prev, { sender: 'model', text: `Maaf, terjadi kesalahan: ${error.message}` }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className={styles.chatBubble} onClick={toggleChat}>
                <ChatIcon />
            </div>

            {isOpen && (
                <div className={styles.chatBox}>
                    <div className={styles.chatHeader}>
                        <h3>Yan AI</h3>
                        <button onClick={toggleChat} className={styles.closeChat}>X</button>
                    </div>
                    <div className={styles.chatBody} ref={chatBodyRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`${styles.chatMessage} ${msg.sender === 'user' ? styles.userMessage : styles.aiMessage}`}>
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && (
                            <div className={`${styles.chatMessage} ${styles.typingIndicator}`}>
                                AI sedang mengetik...
                            </div>
                        )}
                    </div>
                    <div className={styles.chatFooter}>
                        <form onSubmit={handleSendMessage} className={styles.chatForm}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ketik pesan Anda..."
                                autoComplete="off"
                            />
                            <button type="submit">Kirim</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
