import React, { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import menuIcon from "../../assets/side-bar-menu.svg";

import "./Layout.css";
import SideBar from "./sidebar/Sidebar";

const Layout = (props) => {
    const [widthScreenSize, setWidthScreenSize] = useState(window.innerWidth); 
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setWidthScreenSize(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <Grid container width={"100%"} height={"100%"}>
            <Grid container>
                <Grid container flexDirection={"row"} xs={2}>
                    {widthScreenSize <= 600 && (
                        <Grid position={"absolute"} right={"2%"} top={"3%"} onClick={() => setOpen(true)}>
                            <img src={menuIcon} alt="menu-icon" />
                        </Grid>
                    )}
                    <SideBar widthScreenSize={widthScreenSize} open={open} toggleDrawer={toggleDrawer} />
                </Grid>
            <Grid item xs={10}>
                <Header />
                {props.children}
            </Grid>
            <Grid>
                <Footer></Footer>
            </Grid>
            </Grid>
        </Grid>
    );
};

export default Layout;
