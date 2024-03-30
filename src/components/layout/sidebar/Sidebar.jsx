import { Accordion, AccordionSummary, Divider, Drawer, Grid, Stack, Typography } from "@mui/material";
import userIcon from "../../../assets/user-icon.svg";
import SidebarProjectContainer from "./SidebarProjectContainer";
import projectIcon from "../../../assets/project-icon.svg";
import projectBlackIcon from "../../../assets/project-icon-black.svg";
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import styles from "./sidebar.module.css";

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

const SideBar = ({widthScreenSize, open, toggleDrawer}) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        widthScreenSize > 600 ? (
            <Stack className={styles.sidebar}>
                <img src={userIcon} className={styles.logoIcon} alt="user-icon" />
                <Grid container alignItems={"center"}>
                    <img className={styles.userIcon} src={userIcon} alt="user-icon" />
                    <Typography>{username}</Typography>
                </Grid>
                <Divider className={styles.divider}/>
                <Stack width={"100%"}>
                    {dataProjects.map((project, index) => (
                        <Accordion
                            expanded={expanded === project.projectName}
                            onChange={handleChange(project.projectName)}
                            className={styles.accordion}
                            key={index}
                        >
                            <Grid className={expanded === project.projectName ? styles.selectedProject : ""}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                <Grid container>
                                    <img src={expanded === project.projectName ? projectIcon: projectBlackIcon} className={styles.userIcon} alt="project-icon" />
                                    <Typography sx={{fontWeight: 700}}>{project.projectName}</Typography>
                                </Grid>
                                </AccordionSummary>
                            </Grid>
                            <AccordionDetails>
                                <SidebarProjectContainer project={project}/>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Stack>
            </Stack>
        ) : (
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Stack className={styles.sidebarResponsive}>
                    <img src={userIcon} className={styles.logoIcon} alt="user-icon" />
                    <Grid container alignItems={"center"}>
                        <img className={styles.userIcon} src={userIcon} alt="user-icon" />
                        <Typography>{username}</Typography>
                    </Grid>
                    <Divider className={styles.divider}/>
                    <Stack width={"100%"}>
                        {dataProjects.map((project, index) => (
                            <Accordion
                                expanded={expanded === project.projectName}
                                onChange={handleChange(project.projectName)}
                                className={styles.accordion}
                                key={index}
                            >
                                <Grid className={expanded === project.projectName ? styles.selectedProjectResponsive : styles.projectContainerFolderResponsive}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                    <Grid container>
                                        <img src={expanded === project.projectName ? projectIcon: projectBlackIcon} className={styles.userIcon} alt="project-icon" />
                                        <Typography sx={{fontWeight: 700}}>{project.projectName}</Typography>
                                    </Grid>
                                    </AccordionSummary>
                                </Grid>
                                <AccordionDetails>
                                    <SidebarProjectContainer project={project}/>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Stack>
                </Stack>
            </Drawer>
        )
    );
}

export default SideBar;