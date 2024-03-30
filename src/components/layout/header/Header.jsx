import { useState, useEffect } from "react";
import userPicture from "../../../assets/profile-picture.svg";
import styles from "./Header.module.css";
import { Grid } from "@mui/material";
import copyIcon from "../../../assets/copy-icon.svg";
import { fileService } from "../../../services/fileService";

const Header = ({ selectedProject }) => {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        fileService.getAll()
            .then(res => {
                setProjects(Object.keys(res));
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    
    return (
        <Grid className={styles.menusWrapper}> {/* Adjusted to use className for flex container */}
            <div className={styles.sidebar}> {/* Placeholder for sidebar content */}
                {/* Sidebar content goes here */}
            </div>
            <header className={styles.header}> {/* Added className for header */}
                <section className={styles.userProjectInfo}>
                    <div className={styles.userProfileImageWrapper}>
                        <img src={userPicture} alt="User profile" />
                    </div>
                    <div className={styles.projectInfo}>
                        <h2>{selectedProject ? selectedProject : projects[0]}</h2>
                        <p>25.03.2024 created</p>
                    </div>
                </section>
                
                <section className={styles.moreOptions}>
                    <img src={copyIcon} alt="Copy icon" />
                    <h3>Ask</h3>
                </section>
            </header>
        </Grid>
    );
};

export default Header;
