import React, { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import "./Layout.css";

const Layout = (props) => {
    const [widthScreenSize, setWidthScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWidthScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <>
            {widthScreenSize >= 600 ? (
                <Grid height={"100%"}>
                    <Header />
                    <main>{props.children}</main>
                    <Footer />
                </Grid>
            ) : (
                <Stack>
                    <Grid></Grid>
                    <main>{props.children}</main>
                    <Footer />
                </Stack>
            )}
        </>
    );
};

export default Layout;
