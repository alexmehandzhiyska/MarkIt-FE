import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { fileService } from "../../../services/fileService";
import { Modal } from "@mui/material";

import projectIcon from "../../../assets/project-icon-purple.svg"
import addProjectIcon from "../../../assets/add-folder-icon.svg";
import deleteNameIcon from "../../../assets/close-icon.svg";

import styles from '../Modal.module.css';

const AddProject = ({ projectPopupShown, setProjectPopupShown, setAdditionalBtnsShown }) => {
    const projectNameRef = useRef();
    const navigate = useNavigate();
    
    const submitProject = async (e) => {
        e.preventDefault();

        const projectName = projectNameRef.current.value;
        console.log(projectName);
        fileService.createProject(projectName)
            .then(res => {
                setProjectPopupShown(false);
                setAdditionalBtnsShown(false);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })

    };

    const deleteProjectName = () => {
        projectNameRef.current.value = '';
    };

    return (
        <Modal open={projectPopupShown}>
            <section className={`${styles.fileUploadContainer} ${styles.modalView}`} id={styles.createProjectWrapper}>
                <div className={styles.modalHeader}>
                    <img src={projectIcon} alt="Project folder icon" />
                    <p>Create new Project</p>
                </div>

                <form onSubmit={submitProject} className={styles.alignElements}>
                    <div className={styles.nameWrapper}>
                        <img src={addProjectIcon} alt="Add project icon" />
                        <input type="text" placeholder="Add Project name" className={styles.nameInput} ref={projectNameRef} />
                        <img src={deleteNameIcon} alt="Delete written name" onClick={() => deleteProjectName()}  />
                    </div>

                    <div className={styles.btnsContainerAddProject}>
                        <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => { setProjectPopupShown(false); setAdditionalBtnsShown(false) }}>Cancel</button>
                        <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>Add project</button>
                    </div>
                </form>
            </section>
        </Modal>
    );
};

export default AddProject;