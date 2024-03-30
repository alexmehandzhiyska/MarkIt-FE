import { Grid } from "@mui/material";
import React from "react";

import Summaries from "./summaries/Summaries";
import Chat from "./chat/Chat";

import styles from "./ViewContainer.module.css";

const ViewContainer = () => {
    return (
        // Removed Box to apply padding directly in CSS, offering more control
        <div className={styles.viewContainer}>
            <Grid container spacing={3} style={{ width: 'auto', margin: 0 }}>
                <Grid item xs={8}>
                    <Summaries />
                </Grid>
                <Grid item xs={4}>
                    <Chat />
                </Grid>
            </Grid>
        </div>
    );
};

export default ViewContainer;
