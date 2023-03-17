import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const MovieContainer = () => {
    const classes = useStyles()

    return <Grid container item xs={7} className={classes.root}>
        Movie Main container
    </Grid>;
};

const useStyles = makeStyles({
    root: {
        background: "#0D0D0D",
        color: "white",
        borderRight: "1px solid #151515",
        padding: 20
    }
})