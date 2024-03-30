import { Grid } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import "./Layout.css";

const Layout = (props) => {
    return (
        <Grid height={"100%"}>
            <Header></Header>
            <main>
                {props.children}
            </main>
            <Footer></Footer>
        </Grid>
    );
};

export default Layout;