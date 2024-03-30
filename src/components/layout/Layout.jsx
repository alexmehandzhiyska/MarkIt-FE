import React from "react";
import { Grid } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import "./Layout.css";

const Layout = (props) => {
    return (
        <Grid height={"100%"}>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </Grid>
    );
};

export default Layout;
