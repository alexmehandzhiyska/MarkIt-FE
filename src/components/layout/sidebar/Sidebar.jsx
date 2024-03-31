import { useState, useEffect } from "react";

import { fileService } from "../../../services/fileService";
import SidebarProjectContainer from "./SidebarProjectContainer";

import logoIcon from "../../../assets/Logo.png";
import projectIcon from "../../../assets/project-icon.svg";
import projectBlackIcon from "../../../assets/project-icon-black.svg";

import styles from "./sidebar.module.css";
import { Accordion, AccordionSummary, Divider, Drawer, Grid, Stack, Typography } from "@mui/material";
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SideBar = ({ widthScreenSize, open, toggleDrawer, setSelectedProject, isUploaded }) => {
    const [expandedProject, setExpandedProject] = useState('');
    const [projects, setProjects] = useState([]);
    const [initState, setInitState] = useState(false);

    useEffect(() => {
        fileService.getAll()
            .then(res => {
                setProjects(Object.entries(res));
                setInitState(true);
            })
            .catch(err => {
                console.log(err);
            });
    }, [isUploaded]);

    const handleChange = (panel) => (event, isExpanded) => {
        setSelectedProject(panel)
        setExpandedProject(isExpanded ? panel : false);
    };

    return (
        widthScreenSize > 600 ? (
            <Stack className={styles.sidebar}>
                <img src={logoIcon} className={styles.logoIcon} alt="logo-icon" />
                <Divider className={styles.divider}/>
                <Stack width={"100%"}>
                    {initState ? (
                        projects.map((project, index) => (
                            <Accordion
                                expanded={expandedProject === project[0]}
                                onChange={handleChange(project[0])}
                                className={styles.accordion}
                                key={index}
                            >
                                <Grid className={expandedProject === project[0] ? styles.selectedProject : ""}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                    <Grid container>
                                        <img src={expandedProject === project[0] ? projectIcon: projectBlackIcon} className={styles.userIcon} alt="project-icon" />
                                        <Typography sx={{fontWeight: 700}}>{project[0]}</Typography>
                                    </Grid>
                                    </AccordionSummary>
                                </Grid>
                                <AccordionDetails>
                                    <SidebarProjectContainer project={project}/>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    ) : (
                        <Typography>No projects</Typography>                        
                    )}
                </Stack>
            </Stack>
        ) : (
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Stack className={styles.sidebarResponsive}>
                    <img src={logoIcon} className={styles.logoIcon} alt="logo-icon" />
                    <Divider className={styles.divider}/>
                    <Stack width={"100%"}>
                        {projects.map((project, index) => (
                            <Accordion
                                expanded={expandedProject === project[0]}
                                onChange={handleChange(project[0])}
                                className={styles.accordion}
                                key={index}
                            >
                                <Grid className={expandedProject === project[0] ? styles.selectedProjectResponsive : styles.projectContainerFolderResponsive}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                    <Grid container>
                                        <img src={expandedProject === project[0] ? projectIcon: projectBlackIcon} className={styles.userIcon} alt="project-icon" />
                                        <Typography sx={{fontWeight: 700}}>{project[0]}</Typography>
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