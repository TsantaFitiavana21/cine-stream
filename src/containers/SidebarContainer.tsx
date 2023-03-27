import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import TheatersIcon from "@mui/icons-material/Theaters";
import { SideMenuContent } from "../components/SideMenuContent";

export const SidebarContainer = () => {
    const classes = useStyles();

    return (
        <Grid container item xs={2} className={classes.root}>
            <Grid item className={classes.brand} xs={12}>
                <TheatersIcon />
                <Box sx={{ marginLeft: 3 }}>CINE STREAM</Box>
            </Grid>

            <Grid container item rowGap={2} xs={12} sx={{ paddingTop: 6 }}>
                <SideMenuContent />
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignContent: "start",
        gap: 4,
        background: "#0F0F0F",
        color: "white",
        height: "100vh",
        borderRight: "1px solid #151515",
        padding: 20,
    },
    brand: {
        display: "flex",
        alignItems: "center",
        height: "1.5rem",
        fontWeight: 600,
        fontSize: "1.25rem",
    },
});
