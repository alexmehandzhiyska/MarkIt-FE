
import userPicture from "../../../assets/profile-picture.svg";
import styles from "./Header.module.css";
import { Grid } from "@mui/material";

import copyIcon from "../../../assets/copy-icon.svg";

const Header = () => {
    return (
        <Grid display={"flex"}>
            <header>
                <section className={styles.userProjectInfo}>
                    <div className={styles.userProfileImageWrapper}>
                        <img src={userPicture} alt="User profile" />
                    </div>

                    <div className={styles.projectInfo}>
                        <h2>Project name</h2>
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