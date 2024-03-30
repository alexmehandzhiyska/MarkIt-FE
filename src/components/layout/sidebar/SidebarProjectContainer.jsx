import { Accordion, AccordionSummary, Grid,  Stack,  Typography,  } from "@mui/material";
import projectIcon from "../../../assets/folder-black.svg";
import projectWhiteIcon from "../../../assets/folder-white.svg";
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import styles from "./sidebar.module.css"

const SidebarContent = (fileObjs) => {
    const files = Object.values(fileObjs)[0];
    let fileNames = [];

    if (files.length > 0) {
        fileNames = files.map(file => file.file_path.split('/').pop());
    }
    
    return (
        <Stack>
            {fileNames.map((fileName, index) => (
                <Typography className={styles.fileName} key={index}>{fileName}</Typography>
            ))}
        </Stack>
    );
}

const SidebarProjectContainer = ({project}) => {
    const [projectName, projectFiles] = project;
    const [expandedFolder, setExpandedFolder] = useState(false);

    const handleChange = (panel) => (event, isExpandedFolder) => {
        setExpandedFolder(isExpandedFolder ? panel : false);
    };

    return (
        <Stack>
            <Accordion
                expanded={expandedFolder === 'docs'}
                onChange={handleChange('docs')}
                className={styles.accordion}
                >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Grid container>
                    <img src={expandedFolder === 'docs' ? projectWhiteIcon : projectIcon} className={styles.folderIcon} alt="project-icon" />
                    <Typography sx={{fontWeight: 700}}>{'docs'}</Typography>
                </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <SidebarContent files={projectFiles}/>
                </AccordionDetails>
            </Accordion>
        </Stack>
    )
}

export default SidebarProjectContainer;