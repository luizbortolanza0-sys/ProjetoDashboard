import { Box, Card, Typography } from "@mui/material";

interface OverviewCardProps {
    color: string,
    typedEntry: string,
    number: string,
    entry: string,
    at: string,
    Icon: any
}

const SocialMediaCard = ({ color, number, entry, Icon, at, typedEntry }: OverviewCardProps) => {

    return (
        <Card
            component={Box}
            display={"flex"}
            flexDirection={"column"}
            variant="elevation"
            alignItems={"center"}
            flex={1}
            width={{ xs: "100%", sm: 'auto' }}
            gap={"10px"}
        >
            <Box
                bgcolor={color}
                width={"100%"}
                height={"5px"}
            >
            </Box>
            <Box
                width={"90%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                p={"30px"}
                gap={"10px"}
            >
                <Typography 
                display={"flex"}
                alignItems={"center"}
                variant="body2">
                    <img src={Icon} alt="" />{at}
                </Typography>
                <Typography variant="h2">
                    {number}
                </Typography>
                <Typography
                    variant="h6">
                    {typedEntry}
                </Typography>
                <Typography variant="body2">
                    {entry}
                </Typography>
            </Box>


        </Card>
    )
}

export default SocialMediaCard;
