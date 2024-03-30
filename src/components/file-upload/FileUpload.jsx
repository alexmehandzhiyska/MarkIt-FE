import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fileService } from "../../services/fileService";

import uploadIcon from "../../assets/upload-icon.svg";
import styles from './FileUpload.module.css';

const FileUpload = ({ setAddPopupShown, setAdditionalBtnsShown }) => {
    const navigate = useNavigate();
    const fileRef = useRef(null);

    const submitFile = async (e) => {
        e.preventDefault();
        const file = fileRef.current.files[0];

        const formData = new FormData();
        formData.append('file', file);

        fileService.uploadFile(formData)
            .then(res => {
                console.log(res.analysis);
                setAddPopupShown(false);
                setAdditionalBtnsShown(false);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <section className={styles.fileUploadContainer}>
            <form onSubmit={submitFile}>
                <img src={uploadIcon} alt="Upload folder icon" onClick={() => fileRef.current.click()} />
                <input type="file" name="file" className={styles.fileInput} ref={fileRef} />
                <h3>Drop your files here to upload them</h3>

                <div className={styles.btnsContainer}>
                    <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => { setAddPopupShown(false); setAdditionalBtnsShown(false) }}>Cancel</button>
                    <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>Upload</button>
                </div>
            </form>
        </section>
    );
};

export default FileUpload;