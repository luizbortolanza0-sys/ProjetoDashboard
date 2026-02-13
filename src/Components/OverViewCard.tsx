import { Box, Card, Typography } from "@mui/material"
import IconUp from "../../images/icon-up.svg"
import IconDown from "../../images/icon-down.svg"

type OverviewCardProps = {
    entry: string, percent: string, socialMedia: string, content: string
}

const OverviewCard = ({entry, percent, socialMedia, content} : OverviewCardProps) => {

    const CustomizedPercent = () => {


        const value = Number.parseInt(percent);

        const percentColor = value <= 0 ? "error.main" : "success.main"
        const percentIcon = value <= 0 ? IconDown : IconUp

        return <Typography variant="body2"
            sx={{
                color: `${percentColor}`,
                gap: "5px",
                display: 'flex',
                alignItems: "center"
            }}>
            <img src={percentIcon} alt="" /> {percent}%
        </Typography>
    }



    return (
        <Card
        height={"20vh"}
        width={{xs:'100%', sm:'23.5%'}}
        component={Box}
        alignItems={"center"}
        justifyContent={"flex-start"}
        display={"flex"}
        flexDirection={"column"}
        sx={{
                "&.MuiCard-root": {
                    ":hover": {
                        bgcolor: 'primary.light',
                        cursor: "pointer"
                    }
                }
            }}
        >

            <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            flex={1}
            width= "80%" 
            justifyContent={"space-between"}
            >
                <Typography
                color="textSecondary"
                >
                    {content}
                </Typography>
                <img  src={socialMedia} alt="social media Icon" />
            </Box>

            <Box
            width={"80%"}
            justifyContent={"space-between"}
            py={"15px"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-end"}
            >
                <Typography
                variant="h3"
                >
                    {entry}
                </Typography>
                <CustomizedPercent/>
            </Box>


        </Card>
    )
}

export default OverviewCard