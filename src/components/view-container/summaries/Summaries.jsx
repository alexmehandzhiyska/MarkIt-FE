import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Typewriter from 'typewriter-effect';
import ReactMarkdown from 'react-markdown';
import styles from "./Summaries.module.css";

const Summaries = () => {
    const location = useLocation();
    const [analysis, setAnalysis] = useState("");

    useEffect(() => {
        if (location.state && location.state.analysis) {
            setAnalysis(location.state.analysis);
        } else {
            setAnalysis("");
        }
    }, [location.state]);

    return (
        <div className={styles.summaryWrapper}>
                <ReactMarkdown>{analysis}</ReactMarkdown>

        </div>
    );
};

export default Summaries;
