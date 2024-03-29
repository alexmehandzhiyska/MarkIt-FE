import { Accordion, AccordionSummary, Grid,  Stack,  Typography,  } from "@mui/material";
import projectIcon from "../../../assets/folder-black.svg";
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const SidebarProjectContainer = ({project}) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Stack>
            <Accordion expanded={expanded === project.pdfFiles.folderName} onChange={handleChange(project.pdfFiles.folderName)}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Grid container>
                    <img src={projectIcon} alt="project-icon" />
                    <Typography>{project.projectName}</Typography>
                </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <SidebarProjectContainer project={project}/>
                </AccordionDetails>
            </Accordion>

        </Stack>
    )
}

export default SidebarProjectContainer;