import React, { useState, useRef } from "react";
import { Stack, Grid, TextField, Typography } from "@mui/material";
import ReactMarkdown from 'react-markdown';
import { chatService } from "../../../services/chatService";
import styles from "./Chat.module.css";
import sendIcon from "../../../assets/send-icon.svg"
import logoInit from "../../../assets/logo-chat 1.svg";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [oldMessages, setOldMessages] = useState([]);
    const [question, setQuestion] = useState("");
    const [initState, setInitState] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const questionInput = useRef();

    const sendQuestion = () => {
        setInitState(true);
        setIsLoading(true);
        questionInput.current.querySelector('input').value = "";
        setMessages([...messages, question]);
        setOldMessages([...oldMessages, { role: 'user', message: question }]);
        chatService.sendPrompt(question, 'diyan', oldMessages)

        .then(res => {
                setMessages([...messages, question, res.analysis]);
                setOldMessages([...oldMessages, { role: 'assistant', message: res.analysis }]);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }

    return (
        <div className={styles.chatContainer}>
            {initState ? (
                <div className={styles.chatPanel}>
                    <Grid className={styles.messageContainer} elevation={3}>
                        {messages.map((message, index) => (
                            <div key={index} className={styles.messageDisplay}>
                                {index % 2 === 0 &&
                                    <p className={styles.userQuestion}>{message}</p>
                                }
                                {index % 2 !== 0 &&
                                    <ReactMarkdown className={styles.chatAnswer}>{message}</ReactMarkdown>
                                }
                            </div>
                        ))}
                    </Grid>
                    {isLoading && <p className={`${styles.chatAnswer} ${styles.answerWait}`}><span className={styles.loadingDots} /></p>}
                </div>
            ) : (
                <div className={styles.chatPanelInit}>
                    <img src={logoInit} alt="logo" />
                    <Typography className={styles.initText}>Need assistance? Just ask, and I'll be happy to respond!</Typography>
                </div>
            )}
            <div className={styles.questionPanel}>
                <Stack className={styles.questionInputDislikeContainer}>
                    <div className={styles.textFieldContainer}>
                        <TextField
                            className={styles.questionInputTextAreaDisLike}
                            sx={{
                                "& fieldset": { border: 'none' },
                            }}
                            placeholder="Write something..."
                            onChange={(e) => setQuestion(e.target.value)}
                            ref={questionInput}
                        />
                        <div
                            className={styles.questionInputSendButton}
                            aria-label="Ask question button"
                        >
                            <img src={sendIcon} className={styles.sendIcon} alt="" onClick={sendQuestion} />
                        </div>
                    </div>
                </Stack>
            </div>
        </div>
    );
};

export default Chat;
