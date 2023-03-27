import { ItemMenu } from "../components/ItemMenu";
import Divider from "@mui/material/Divider";

import HomeIcon from "@mui/icons-material/Home";
import NearMeIcon from '@mui/icons-material/NearMe';
import PeopleIcon from '@mui/icons-material/People';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HistoryIcon from '@mui/icons-material/History';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { Box } from "@mui/material";

export const SideMenuContent = () => {
    return (
        <>
            <Box sx={{ fontSize: "1.1rem", fontWeight: 600 }}>Menu</Box>

            <ItemMenu icon={<HomeIcon />} text={"Home"} selected />
            <ItemMenu icon={<NearMeIcon />} text={"Discovery"} />
            <ItemMenu icon={<PeopleIcon />} text={"Community"} />
            <ItemMenu icon={<AccessAlarmIcon />} text={"Comming Soon"} />
            <Divider variant="fullWidth" />

            <Box
                sx={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginTop: 2,
                    color: "#605F65",
                }}
            >
                Library
            </Box>
            <ItemMenu icon={<HistoryIcon />} text={"Recent"} />
            <ItemMenu icon={<BookmarkBorderIcon />} text={"Bookmarked"} />
            <ItemMenu icon={<DownloadIcon />} text={"Top rated"} />
            <ItemMenu icon={<AccessAlarmIcon />} text={"Downloaded"} />

            <Box sx={{ marginTop: 7 }}></Box>
            <ItemMenu icon={<SettingsIcon />} text={"Settings"} />
            <ItemMenu icon={<HelpIcon />} text={"Help"} />
        </>
    );
};
