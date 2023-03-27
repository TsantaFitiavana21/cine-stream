import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const ItemMenu = ({ icon, text, selected = false }: MenutItemProps) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Box display="flex" className={selected ? classes.selectColor : ""}>
                <Box>{icon}</Box>
                <Box sx={{ marginLeft: 3 }}>{text}</Box>
            </Box>
        </Grid>
    );
};

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        height: "1.5rem",
        fontWeight: 600,
        fontSize: "0.95rem",
        color: "#605F65"
    },
    selectColor: {
        color: "#EE5725",
    },
});

type MenutItemProps = {
    icon: React.ReactNode;
    text: string;
    selected?: boolean;
};
