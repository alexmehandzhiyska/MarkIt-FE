import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { fileService } from "../../../services/fileService";
import { Modal } from "@mui/material";

import projectIcon from "../../../assets/project-icon-purple.svg"
import addProjectIcon from "../../../assets/add-folder-icon.svg";
import deleteNameIcon from "../../../assets/close-icon.svg";

import styles from '../Modal.module.css';

const AddFolder = ({ folderPopupShown, setFolderPopupShown, setAdditionalBtnsShown }) => {
    const folderNameRef = useRef();
    const navigate = useNavigate();

    const submitFolder = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', "");
        setFolderPopupShown(false);
        setAdditionalBtnsShown(false);

        fileService.createFolder(formData)
            .then(res => {
                console.log(res.analysis);
                setFolderPopupShown(false);
                setAdditionalBtnsShown(false);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    }

    const deleteFolderName = () => {
        folderNameRef.current.value = '';
    };

    return (
        <Modal open={folderPopupShown}>
            <section className={`${styles.fileUploadContainer} ${styles.modalView}`} id={styles.createProjectWrapper}>
                <div className={styles.modalHeader}>
                    <img src={projectIcon} alt="Project folder icon" />
                    <p>Create new Folder</p>
                </div>

                <form onSubmit={submitFolder} className={styles.alignElements}>
                    <div className={styles.nameWrapper}>
                        <img src={addProjectIcon} alt="Add project icon" />
                        <input type="text" placeholder="Add Folder name" className={styles.nameInput} ref={folderNameRef} />
                        <img src={deleteNameIcon} alt="Delete written name" onClick={() => deleteFolderName()}  />
                    </div>

                    <div className={styles.btnsContainerAddProject}>
                        <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => { setFolderPopupShown(false); setAdditionalBtnsShown(false) }}>Cancel</button>
                        <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>Add project</button>
                    </div>
                </form>
            </section>
        </Modal>
    );
};

export default AddFolder;