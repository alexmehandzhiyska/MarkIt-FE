import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fileService } from "../../../services/fileService";

import uploadIcon from "../../../assets/upload-icon.svg";
import styles from '../Modal.module.css';

import { Modal } from "@mui/material";

const FileUpload = ({ filePopupShown, setFilePopupShown, setAdditionalBtnsShown, showToast }) => {
    const [fileSelected, setFileSelected] = useState('');

    const navigate = useNavigate();
    const fileRef = useRef(null);

    const selectFile = () => {
        const file = fileRef.current.files[0];
        setFileSelected(file.name)
    };

    const submitFile = async (e) => {
        e.preventDefault();

        const file = fileRef.current.files[0];

        const formData = new FormData();
        formData.append('file', file);
        setFilePopupShown(false);
        setAdditionalBtnsShown(false);

        const id = showToast.loading('Your file is being uploaded.');

        fileService.uploadFile(formData)
            .then((res) => {
                showToast.update(id, { render: 'File uploaded.', type: 'success', isLoading: false, closeButton: true, autoClose: false })
                navigate('/', { state: { analysis: res.analysis }})
            })
            .catch(() => {
                showToast.update(id, { render: 'Cannot upload file.', type: 'error', isLoading: false, closeButton: true, autoClose: false });
            });
    }

    return (
        <Modal open={filePopupShown}>
            <section className={`${styles.fileUploadContainer} ${styles.modalView}`}>
                <form onSubmit={submitFile} className={styles.alignElements}>
                    <img src={uploadIcon} alt="Upload folder icon" onClick={() => fileRef.current.click()} />
                    <input type="file" name="file" className={styles.fileInput} ref={fileRef} onChange={() => selectFile()} />
                    <h3>Drop your files here to upload them</h3>
                    {fileSelected && <p>{fileSelected}</p>}

                    <div className={`${fileSelected ? styles.btnsModified : styles.btnsContainerFileUpload}`}>
                        <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => { setFilePopupShown(false); setAdditionalBtnsShown(false) }}>Cancel</button>
                        <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>Upload</button>
                    </div>
                </form>
            </section>
        </Modal>
    );
};

export default FileUpload;