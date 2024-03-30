import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons"

import folderIcon from "../../../assets/folder-black.svg";
import projectIcon from "../../../assets/project-icon-black.svg";
import fileIcon from "../../../assets/file-icon.svg";

import styles from "./Footer.module.css";
import FileUpload from "../../file-upload/FileUpload";

const Footer = () => {
    const [additionalBtnsShown, setAdditionalBtnsShown] = useState(false);
    const [addPopupShown, setAddPopupShown] = useState(false);

    return (
        <>
            {addPopupShown && <FileUpload addPopupShown={addPopupShown} setAddPopupShown={setAddPopupShown} setAdditionalBtnsShown={setAdditionalBtnsShown}></FileUpload>}
            
            <footer>
                <section className={styles.additionalBtnsContainer}>
                    {additionalBtnsShown &&  !addPopupShown &&
                        <div className={styles.additionalBtnsContainer}>
                            <button className={styles.additionalBtn}>
                                <img src={projectIcon} alt="Project icon" />
                                <span>Create project</span>
                            </button>
                            
                            <button className={styles.additionalBtn}>
                                <img src={folderIcon} alt="Folder icon" />
                                <span>Create new folder</span>
                            </button>

                            <button className={styles.additionalBtn} onClick={() => setAddPopupShown(!addPopupShown)}>
                                <img src={fileIcon} alt="File icon" />
                                <span>Upload</span>
                            </button>
                        </div>
                    }
                </section>
                
                {!additionalBtnsShown && !addPopupShown && <FontAwesomeIcon icon={faPlus} className={styles.addHideBtn} onClick={() => setAdditionalBtnsShown(!additionalBtnsShown)}></FontAwesomeIcon>}
                {additionalBtnsShown && <FontAwesomeIcon icon={faX} className={styles.addHideBtn} onClick={() => setAdditionalBtnsShown(!additionalBtnsShown)}></FontAwesomeIcon>}
            </footer>
        </>
        
    );
};

export default Footer;