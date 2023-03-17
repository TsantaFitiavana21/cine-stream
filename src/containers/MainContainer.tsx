import { Grid } from "@mui/material";
import { MovieContainer } from "./MovieContainer";
import { RightNavContainer } from "./RightNavContainer";
import { SidebarContainer } from "./SidebarContainer";

export const MainContainer = () => {
    return (
        <Grid container>
            <SidebarContainer />
            <MovieContainer />
            <RightNavContainer />
        </Grid>
    );
};
