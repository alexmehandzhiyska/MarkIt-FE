import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons"

import folderIcon from "../../../assets/folder-black.svg";
import projectIcon from "../../../assets/project-icon-black.svg";
import fileIcon from "../../../assets/file-icon.svg";

import styles from "./Footer.module.css";
import FileUpload from "../../file-management/file-upload/FileUpload";
import AddProject from "../../file-management/add-project/AddProject";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = ({isUploaded, setIsUploaded}) => {
    const [additionalBtnsShown, setAdditionalBtnsShown] = useState(false);
    const [filePopupShown, setFilePopupShown] = useState(false);
    const [projectPopupShown, setProjectPopupShown] = useState(false);

    return (
        <>
           <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
                {/* Same as */}
            {filePopupShown && <FileUpload filePopupShown={filePopupShown} setFilePopupShown={setFilePopupShown} setAdditionalBtnsShown={setAdditionalBtnsShown} showToast={toast} setIsUploaded={setIsUploaded}></FileUpload>}
            {projectPopupShown && <AddProject projectPopupShown={projectPopupShown} setProjectPopupShown={setProjectPopupShown} setAdditionalBtnsShown={setAdditionalBtnsShown}></AddProject>}
            
            <footer>
                <section className={styles.additionalBtnsContainer}>
                    {additionalBtnsShown &&  !filePopupShown &&
                        <div className={styles.additionalBtnsContainer}>
                            <button className={styles.additionalBtn} onClick={() => setProjectPopupShown(true)}>
                                <img src={projectIcon} alt="Project icon" />
                                <span>Create project</span>
                            </button>
                            
                            <button className={styles.additionalBtn}>
                                <img src={folderIcon} alt="Folder icon" />
                                <span>Create new folder</span>
                            </button>

                            <button className={styles.additionalBtn} onClick={() => setFilePopupShown(true)}>
                                <img src={fileIcon} alt="File icon" />
                                <span>Upload</span>
                            </button>
                        </div>
                    }
                </section>
                
                {!additionalBtnsShown && !filePopupShown && <FontAwesomeIcon icon={faPlus} className={styles.addHideBtn} onClick={() => setAdditionalBtnsShown(!additionalBtnsShown)}></FontAwesomeIcon>}
                {additionalBtnsShown && <FontAwesomeIcon icon={faX} className={styles.addHideBtn} onClick={() => setAdditionalBtnsShown(!additionalBtnsShown)}></FontAwesomeIcon>}
            </footer>
        </>
        
    );
};

export default Footer;