import { Stack, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./Chat.module.css";
import sendIcon from "../../../assets/send-icon.svg"

const Chat = () => {
    const [messages, setMessages] = useState([
        { text: "Hello!" },
        { text: "Hi there!" },
        { text: "How are you?" },
        { text: "I'm doing well, thank you!" },
        { text: "That's great to hear!" },
        { text: "Can you help me with something?" },
    ]);
    const [question, setQuestion] = useState("");

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatPanel}>
                <Grid className={styles.messageContainer} elevation={3}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`${styles.message} ${
                                index % 2 === 0 ? styles.userMessage : ""
                            }`}
                        >
                            <span 
                                className={`${styles.message} ${
                                    index % 2 === 0 ? styles.messageText : ""
                                }`}>{message.text}</span>
                        </div>
                    ))}
                </Grid>
            </div>
            <div className={styles.questionPanel}>
                <Stack className={styles.questionInputDislikeContainer}>
                    <div className={styles.textFieldContainer}>
                                <TextField
                                    className={styles.questionInputTextAreaDisLike}
                                    sx={{
                                    "& fieldset": { border: 'none' },
                                    }}
                                    placeholder="write something"
                                />
                                <div
                                    className={styles.questionInputSendButton}
                                    aria-label="Ask question button"
                                >
                                    <img src={sendIcon} className={styles.sendIcon} alt="" />
                                </div>
                            </div>
                </Stack>
            </div>
        </div>
    );
};

export default Chat;
