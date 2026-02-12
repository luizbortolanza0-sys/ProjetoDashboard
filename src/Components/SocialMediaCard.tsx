import { Box, Card, Typography } from "@mui/material";
import { useState } from "react";
import IconUp from "../../images/icon-up.svg"
import IconDown from "../../images/icon-down.svg"


interface OverviewCardProps {
    color: string,
    typedEntry: string,
    number: string,
    entry: string,
    at: string,
    Icon: any
}

const SocialMediaCard = ({ color, number, entry, Icon, at, typedEntry }: OverviewCardProps) => {

    const CustomizedEntry = () =>{


        const value = Number.parseInt(entry);

        const entryColor =  value<=0?"error.main":"success.main"
        const entryIcon =  value<=0?IconDown:IconUp

        return <Typography variant="body2"
                    sx={{
                        color:`${entryColor}`,
                        gap:"5px",
                        display:'flex',
                        alignItems:"center"
                    }}>
                   <img src={entryIcon} alt="" /> {entry} Today
                </Typography>
    }

    const ColoredBox = () => {

        if (color.includes("linear-gradient")) {
            return (
                <Box
                    width={"100%"}
                    height={"5px"}
                    sx={{
                        backgroundImage: `${color}`
                    }}
                />

            )
        }
        return (
            <Box
                bgcolor={color}
                width={"100%"}
                height={"5px"}
            />
        )
    }


    return (
        <Card
            component={Box}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            flex={1}
            width={{ xs: "100%", sm: 'auto' }}
            gap={"10px"}
            sx={{
                "&.MuiCard-root": {
                    ":hover": {
                        bgcolor: 'primary.light',
                        cursor: "pointer"
                    }
                }
            }}
        >
            <ColoredBox />
            <Box
                width={"90%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                p={"30px"}
                gap={"30px"}
            >
                <Typography
                    display={"flex"}
                    alignItems={"center"}
                    variant="body2"
                    gap={"8px"}
                    >
                    <img src={Icon} alt="" />{at}
                </Typography>
                <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                width={"100%"}
                >
                    <Typography 
                    variant="h1"
                    >
                        {number}
                    </Typography>
                    <Typography
                        display={"flex"}
                        variant="h6"
                        sx={{
                            color:"text.secondary",
                            letterSpacing:"9px",
                            textAlign:"center",              
                            opacity:'0.5'
                        }}
                        >
                        {typedEntry.toLocaleUpperCase()}
                    </Typography>
                </Box>

                <CustomizedEntry/>
            </Box>


        </Card>
    )
}

export default SocialMediaCard;
