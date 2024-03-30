import { useLocation } from "react-router";
import styles from "./Summaries.module.css";
import { useEffect, useState, useRef } from "react";
import { Typography } from "@mui/material";
import Typewriter from 'typewriter-effect/dist/core';

const Summaries = () => {
    const location = useLocation();
    const [analysis, setAnalysis] = useState("");
    const [typingComplete, setTypingComplete] = useState(false);
    const typographyRef = useRef(null);

    useEffect(() => {
        if (location.state) {
            setAnalysis(location.state.analysis);
            setTypingComplete(false);
        } else {
            setAnalysis("");
        }
    }, [location.state]);

    useEffect(() => {
        if (!analysis) return;

        const typewriter = new Typewriter(typographyRef.current, {
            delay: 0,
            onComplete: () => setTypingComplete(true)
        });

        typewriter
            .typeString(analysis)
            .pauseFor(0)
            .start();

        return () => {
            typewriter.stop();
        };
    }, [analysis]);

    return (
        <div className={styles.summaryWrapper}>
            <Typography ref={typographyRef} className={styles.hideCursor}></Typography>
            {typingComplete && <span>Typing Complete</span>}
        </div>
    );
};

export default Summaries;
