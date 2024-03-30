import { Accordion, AccordionSummary, Divider, Drawer, Grid, Stack, Typography } from "@mui/material";
import userIcon from "../../../assets/user-icon.svg";
import SidebarProjectContainer from "./SidebarProjectContainer";
import projectIcon from "../../../assets/project-icon.svg";
import projectBlackIcon from "../../../assets/project-icon-black.svg";
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import styles from "./sidebar.module.css";

const dataProjects = {
    "hi": [
        {
            "file_path": "hi/myFolder/helloworld-3.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/helloworld-4.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/helloworld-5.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/helloworld-6.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/helloworld-7.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/helloworld-8.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/helloworld-9.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/helloworld-10.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/helloworld-11.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/helloworld-12.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/helloworld-13.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/helloworld-14.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/1.pdf",
            "extension": "pdf"
        },
        {
            "file_path": "hi/myFolder/helloworld-15.pdf",
            "extension": "pdf"
        }
    ],
    "hello test": [],
    "asdfd": []
};

const username = localStorage.getItem('user').username;

const SideBar = ({widthScreenSize, open, toggleDrawer}) => {
    const [expandedProject, setExpandedProject] = useState('');
    const [projects, setProjects] = useState(Object.entries(dataProjects)); // CHANGE TO [] !!!!!!!!

    const handleChange = (panel) => (event, isExpanded) => {
        setExpandedProject(isExpanded ? panel : false);
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
                    {projects.map((project, index) => (
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