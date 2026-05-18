import { useState } from "react";
import Footer from "../html/footer";
import Header from "../html/header";

export default function Messages() {

    const [messages, setMessages] = useState([
        { id: 1, user: "AzizDjan", text: "You're very welcome!", time: "12/2/19", unread: true },
        { id: 2, user: "Andrew Parker", text: "You accepted the request", time: "12/1/19", unread: false },
    ]);

    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        setMessages([
            ...messages,
            {
                id: Date.now(),
                user: "You",
                text: input,
                time: "Now",
                unread: false
            }
        ]);

        setInput("");
    };

    return (
        <>
            <Header />

            <div className="messages-container">

                {/* Title */}
                <div className="messages-header">
                    <h2>Messages</h2>
                </div>

                {/* Message List */}
                <div className="messages-list">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`message-item ${msg.unread ? "unread" : ""}`}
                        >
                            <div className="message-left">
                                <div className="message-user">{msg.user}</div>
                                <div className="message-text">{msg.text}</div>
                            </div>

                            <div className="message-right">
                                <span className="message-time">{msg.time}</span>
                                {msg.unread && <span className="dot" />}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Composer */}
                <div className="message-composer">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleSend}>Send</button>
                </div>

            </div>

            <Footer />
        </>
    );
}