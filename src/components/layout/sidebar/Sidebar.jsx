import { Accordion, AccordionSummary, Divider, Grid, Stack, Typography } from "@mui/material";
import userIcon from "../../../assets/user-icon.svg";
import SidebarProjectContainer from "./SidebarProjectContainer";
import projectIcon from "../../../assets/project-icon.svg";
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const dataProjects = [
    {
        projectName: "Project-1",
        pdfFiles: {
            folderName: "pdfFiles",
            files: ["File1.pdf", "File2.pdf", "File3.pdf"]
        },
        doxsFiles: {
            folderName: "doxsFiles",
            files: ["File1.pdf", "File2.pdf", "File3.pdf"]
        },
        videoReport: {
            folderName: "videoReport",
            files: ["File1.pdf", "File2.pdf", "File3.pdf"]
        },
        size: 5,
    },
    {
        projectName: "Project-2",
        pdfFiles: {
            folderName: "pdfFiles",
            files: ["File1.pdf", "File2.pdf", "File3.pdf"]
        },
        doxsFiles: {
            folderName: "doxsFiles",
            files: ["File1.pdf", "File2.pdf", "File3.pdf"]
        },
        videoReport: {
            folderName: "videoReport",
            files: ["File1.pdf", "File2.pdf", "File3.pdf"]
        },
        size: 5,
    },
    {
        projectName: "Project-3",
        pdfFiles: {
            folderName: "pdfFiles",
            files: ["File1.pdf", "File2.pdf", "File3.pdf"]
        },
        doxsFiles: {
            folderName: "doxsFiles",
            files: ["File1.pdf", "File2.pdf", "File3.pdf"]
        },
        videoReport: {
            folderName: "videoReport",
            files: ["File1.pdf", "File2.pdf", "File3.pdf"]
        },
        size: 5,
    },
]   

const username = "Konstantin"

const SideBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Stack width={"12%"}>
            <Grid container>
                <img src={userIcon} alt="user-icon" />
                <Typography>{username}</Typography>
            </Grid>
            <Divider />
            <Stack>
                {dataProjects.map((project) => (
                    <Accordion expanded={expanded === project.projectName} onChange={handleChange(project.projectName)}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Grid container>
                            <img src={projectIcon} alt="project-icon" />
                            <Typography>{project.projectName}</Typography>
                            <Typography>{project.size} +</Typography>
                        </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SidebarProjectContainer project={project}/>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Stack>
        </Stack>
    )
}

export default SideBar;