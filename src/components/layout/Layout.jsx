import { Grid } from "@mui/material";
import Header from "./header/Header";

import "./Layout.css";

const Layout = (props) => {
    return (
        <Grid height={"100%"}>
            <Header></Header>
            <main>
                {props.children}
            </main>
        </Grid>
    );
};

export default Layout;