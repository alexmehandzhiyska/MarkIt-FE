import { Divider, Grid } from "@mui/material";
import React from "react";

import Summaries from "./summaries/Summaries";
import Chat from "./chat/Chat";

import styles from "./ViewContainer.module.css";

const ViewContainer = () => {
    return (
        <div className={styles.viewContainer}>
            <Grid container spacing={3} style={{ width: 'auto', margin: 0, height: "100%" }}>
                <Grid item xs={8}>
                    <Summaries />
                </Grid>
                <Grid height={"100%"} item xs={4}>
                    <Chat />
                </Grid>
            </Grid>
        </div>
    );
};

export default ViewContainer;
