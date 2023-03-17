import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const SidebarContainer = () => {
    const classes = useStyles()

    return <Grid container item xs={3} className={classes.root}>
        Side Bar Container
    </Grid>;
};

const useStyles = makeStyles({
    root: {
        background: "#0F0F0F",
        color: "white",
        height: "100vh",
        borderRight: "1px solid #151515",
        padding: 20
    }
})