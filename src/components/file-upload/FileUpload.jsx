import { useNavigate } from "react-router-dom";
import { fileService } from "../../services/fileService";

const FileUpload = () => {
    const navigate = useNavigate();
    
    const submitFile = async (e) => {
        e.preventDefault();
        const file = e.target.querySelector('#file').files[0];

        const formData = new FormData();
        formData.append('file', file);

        fileService.uploadFile(formData)
            .then(res => {
                if (res === 'success') {
                    navigate('/');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <form onSubmit={submitFile}>
            <input type="file" name="file" id="file" />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default FileUpload;