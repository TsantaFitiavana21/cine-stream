import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const RightNavContainer = () => {
    const classes = useStyles()

    return <Grid container item xs={2} className={classes.root}>
        Right nav container
    </Grid>
};

const useStyles = makeStyles({
    root: {
        background: "#020000",
        color: "white",
        padding: 20
    }
})