import { Accordion, AccordionSummary, Grid,  Stack,  Typography,  } from "@mui/material";
import projectIcon from "../../../assets/folder-black.svg";
import projectWhiteIcon from "../../../assets/folder-white.svg";
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import styles from "./sidebar.module.css"

const SidebarContent = ({pdfFiles}) => {
    return (
        <Stack>
            {pdfFiles.map((fileName, index) => (
                <Typography className={styles.fileName} key={index}>{fileName}</Typography>
            ))}
        </Stack>
    );
}

const SidebarProjectContainer = ({project}) => {
    const [expandedFolder, setExpandedFolder] = useState(false);

    const handleChange = (panel) => (event, isExpandedFolder) => {
        setExpandedFolder(isExpandedFolder ? panel : false);
    };

    return (
        <Stack>
            <Accordion
                expanded={expandedFolder === project.pdfFiles.folderName}
                onChange={handleChange(project.pdfFiles.folderName)}
                className={styles.accordion}
                >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Grid container>
                    <img src={expandedFolder === project.pdfFiles.folderName ? projectWhiteIcon : projectIcon} className={styles.folderIcon} alt="project-icon" />
                    <Typography sx={{fontWeight: 700}}>{project.pdfFiles.folderName}</Typography>
                </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <SidebarContent pdfFiles={project.pdfFiles.files}/>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expandedFolder === project.doxsFiles.folderName}
                onChange={handleChange(project.doxsFiles.folderName)}
                className={styles.accordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className={styles.accordion}
                >
                <Grid container>
                    <img src={expandedFolder === project.doxsFiles.folderName ? projectWhiteIcon : projectIcon} className={styles.folderIcon} alt="project-icon" />
                    <Typography sx={{fontWeight: 700}}>{project.doxsFiles.folderName}</Typography>
                </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <SidebarContent pdfFiles={project.doxsFiles.files}/>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expandedFolder === project.videoReport.folderName}
                onChange={handleChange(project.videoReport.folderName)}
                className={styles.accordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Grid container>
                    <img src={expandedFolder === project.videoReport.folderName ? projectWhiteIcon : projectIcon} className={styles.folderIcon} alt="project-icon" />
                    <Typography sx={{fontWeight: 700}}>{project.videoReport.folderName}</Typography>
                </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <SidebarContent pdfFiles={project.pdfFiles.files}/>
                </AccordionDetails>
            </Accordion>
        </Stack>
    )
}

export default SidebarProjectContainer;