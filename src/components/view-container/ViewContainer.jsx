import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Summary from "../summary/Summary";

const ViewContainer = () => {
    const location = useLocation();
    const [summary, setSummary] = useState(location.state.analysis);

    return (
        <Grid>
            <Summary summary={summary}/>
        </Grid>
    );
};

export default ViewContainer;