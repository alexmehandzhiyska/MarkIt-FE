import { Accordion, AccordionSummary, Grid,  Stack,  Typography,  } from "@mui/material";
import projectIcon from "../../../assets/folder-black.svg";
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const SidebarContent = ({pdfFiles}) => {
    return (
        <Stack>
            {pdfFiles.map((fileName, index) => (
                <Typography key={index}>{fileName}</Typography>
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
            <Accordion expanded={expandedFolder === project.pdfFiles.folderName} onChange={handleChange(project.pdfFiles.folderName)}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Grid container>
                    <img src={projectIcon} alt="project-icon" />
                    <Typography>{project.pdfFiles.folderName}</Typography>
                </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <SidebarContent pdfFiles={project.pdfFiles.files}/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedFolder === project.doxsFiles.folderName} onChange={handleChange(project.doxsFiles.folderName)}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Grid container>
                    <img src={projectIcon} alt="project-icon" />
                    <Typography>{project.doxsFiles.folderName}</Typography>
                </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <SidebarContent pdfFiles={project.doxsFiles.files}/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedFolder === project.videoReport.folderName} onChange={handleChange(project.videoReport.folderName)}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Grid container>
                    <img src={projectIcon} alt="project-icon" />
                    <Typography>{project.videoReport.folderName}</Typography>
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