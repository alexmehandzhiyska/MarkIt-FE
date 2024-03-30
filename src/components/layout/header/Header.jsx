
import userPicture from "../../../assets/profile-picture.svg";
import menuIcon from "../../../assets/side-bar-menu.svg";
import styles from "./Header.module.css";
import SideBar from "../sidebar/Sidebar";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

const Header = () => {
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
        <section className={styles.menusWrapper}>
            {widthScreenSize <= 600 && (
                <Grid position={"absolute"} right={"2%"} top={"3%"} onClick={() => setOpen(true)}>
                    <img src={menuIcon} alt="menu-icon" />
                </Grid>
            )}
            <SideBar widthScreenSize={widthScreenSize} open={open} toggleDrawer={toggleDrawer}>
                
            </SideBar>
            <header>
                <section className={styles.userProjectInfo}>
                    <div className={styles.userProfileImageWrapper}>
                        <img src={userPicture} alt="User profile picture" />
                    </div>

                    <div className={styles.projectInfo}>
                        <h2>Project name</h2>
                        <p>25.03.2024 created</p>
                    </div>
                </section>
            </header>
        </section>
    );
};

export default Header;