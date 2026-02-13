import OverviewCard from "./OverViewCard"
import iconInstagram from "../../images/icon-instagram.svg";
import iconTwitter from "../../images/icon-twitter.svg"
import iconFacebook from "../../images/icon-facebook.svg"
import iconYouTube from "../../images/icon-youtube.svg"
import { Box } from "@mui/material";


const OverViewBox = () =>{

    return (
        <Box
        width={"100%"}
        display={"flex"}
        gap={"20px"}
        flexWrap={"wrap"}
        >
            <OverviewCard entry = "87" content = "Page Views" percent="3" socialMedia={iconFacebook} />
            <OverviewCard entry = "52" content = "Likes" percent="-2" socialMedia={iconFacebook} />
            <OverviewCard entry = "5462" content = "Likes" percent="2257" socialMedia={iconInstagram} />
            <OverviewCard entry = "52K" content = "Profile Views" percent="1375" socialMedia={iconInstagram} />
            <OverviewCard entry = "117" content = "Retweets" percent="303" socialMedia={iconTwitter} />
            <OverviewCard entry = "507" content = "Likes" percent="553" socialMedia={iconTwitter} />
            <OverviewCard entry = "107" content = "Likes" percent="-19" socialMedia={iconYouTube} />
            <OverviewCard entry = "1407" content = "Total Views" percent="-12" socialMedia={iconYouTube} />
        </Box>
    )

}

export default OverViewBox