import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons"

import folderIcon from "../../../assets/folder-black.svg";
import projectIcon from "../../../assets/project-icon-black.svg";
import fileIcon from "../../../assets/file-icon.svg";

import styles from "./Footer.module.css";

const Footer = () => {
    const [additionalBtnsShown, setAdditionalBtnsShown] = useState(false);

    return (
        <footer>
            <section className={styles.additionalBtnsContainer}>
                {additionalBtnsShown && 
                <div className={styles.additionalBtnsContainer}>
                    <button className={styles.additionalBtn}>
                        <img src={projectIcon} alt="Project icon" />
                        <span>Create project</span>
                    </button>
                    
                    <button className={styles.additionalBtn}>
                        <img src={folderIcon} alt="Folder icon" />
                        <span>Create new folder</span>
                    </button>

                    <button className={styles.additionalBtn}>
                        <img src={fileIcon} alt="File icon" />
                        <span>Upload</span>
                    </button>
                </div>
                }
            </section>
            
            {!additionalBtnsShown && <FontAwesomeIcon icon={faPlus} className={styles.addHideBtn} onClick={() => setAdditionalBtnsShown(!additionalBtnsShown)}></FontAwesomeIcon>}
            {additionalBtnsShown && <FontAwesomeIcon icon={faX} className={styles.addHideBtn} onClick={() => setAdditionalBtnsShown(!additionalBtnsShown)}></FontAwesomeIcon>}
        </footer>
    );
};

export default Footer;