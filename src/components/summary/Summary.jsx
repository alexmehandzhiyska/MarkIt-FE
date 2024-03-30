import { Grid, Typography } from "@mui/material";

const Summary = ({summary}) => {
    return (
        <Grid container width={"100%"}>
            <Typography>
                {summary}
            </Typography>
        </Grid>
    )
}

export default Summary;