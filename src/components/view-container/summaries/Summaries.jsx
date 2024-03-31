import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ReactMarkdown from 'react-markdown';
import styles from "./Summaries.module.css";
import { Typography } from "@mui/material";

const Summaries = () => {
    const location = useLocation();
    const [analysis, setAnalysis] = useState("");
    const [initState, setInitState] = useState(false);
    console.log(initState);

    useEffect(() => {
        if (location.state && location.state.analysis) {
            console.log(location.state);
            setAnalysis(location.state.analysis);
            setInitState(true)
        } else {
            setAnalysis("");
        }
    }, [location.state]);

    return (
        <div className={`${initState ? styles.summaryWrapper : styles.summaryWrapperInit}`}>
                {initState ? (
                    <ReactMarkdown>{analysis}</ReactMarkdown>
                    ) : (
                    <Typography fontSize={"36px"} className={styles.textStyle}>There is no uploaded data</Typography>
                )}
        </div>
    );
};

export default Summaries;
