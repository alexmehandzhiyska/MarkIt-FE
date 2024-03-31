import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Typewriter from 'typewriter-effect';
import ReactMarkdown from 'react-markdown';
import styles from "./Summaries.module.css";

const Summaries = () => {
    const location = useLocation();
    const [analysis, setAnalysis] = useState("");
    const [showFormatted, setShowFormatted] = useState(false);

    useEffect(() => {
        if (location.state && location.state.analysis) {
            setAnalysis(location.state.analysis);
            setShowFormatted(false); // Reset on new analysis
        } else {
            setAnalysis("");
        }
    }, [location.state]);

    return (
        <div className={styles.summaryWrapper}>
            {!showFormatted ? (
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(analysis)
                            .callFunction(() => {
                                setShowFormatted(true); // Show formatted Markdown after typing
                            })
                            .start();
                    }}
                    options={{
                        delay: 310,
                        skipAddStyles: true,
                    }}
                />
            ) : (
                <ReactMarkdown>{analysis}</ReactMarkdown>
            )}
        </div>
    );
};

export default Summaries;
