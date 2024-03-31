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
            setShowFormatted(false);
        } else {
            setAnalysis("");
        }
    }, [location.state]);

    return (
        <div className={styles.summaryWrapper}>
            {!analysis && 
                <div className={styles.noData}>
                    <h2>There is no uploaded data</h2>
                </div>
            }
            {!showFormatted ? (
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(analysis)
                            .callFunction(() => {
                                setShowFormatted(true);
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
