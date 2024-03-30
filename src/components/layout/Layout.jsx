import React from "react";
import { Grid, Stack } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import "./Layout.css";

const Layout = (props) => {
    return (
        <Stack container height={"100%"} width={"100%"}>
            <Header />
            <Grid >
                {props.children}
            </Grid>
            <Footer />
        </Stack>
    );
};

export default Layout;
