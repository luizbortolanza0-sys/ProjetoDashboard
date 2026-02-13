import { Box, Card, Stack, Typography } from "@mui/material";
import SocialMediaCard from "./Components/SocialMediaCard"
import CustomizedSwitch from "./Components/Switch";
import OverViewBox from "./Components/OverViewBox";

import iconInstagram from "../images/icon-instagram.svg";
import iconTwitter from "../images/icon-twitter.svg"
import iconFacebook from "../images/icon-facebook.svg"
import iconYouTube from "../images/icon-youtube.svg"
import OverviewCard from "./Components/OverViewCard";

type CustomizedSwitchProps = {
    toggleTheme: (event: React.ChangeEvent<HTMLInputElement, Element>, checkd: boolean) => void
}


const Home = ({ toggleTheme }: CustomizedSwitchProps) => {
    return (
        <Stack
            width={"100%"}
            height={'100vh'}
        >
            <Box
                component={Card}
                overflow={"visible"}
                elevation={0}
                borderRadius={"0px 0px 20px 20px"}
                width={"100%"}
                bgcolor={"secondary.main"}
                display={"flex"}
                justifyContent={"center"}
                height={"35vh"}
            >
                <Box
                    pt="20px"
                    width={{ xs: '90%', sm: "85%", md: "78%" }}
                    display={"flex"}
                    gap="50px"
                    alignItems={"center"}
                    flexDirection={"column"}
                >
                    <Box
                        width={"100%"}
                        display={"flex"}
                        gap="20px"
                        flexDirection={{ xs: "column", sm: 'row' }}
                        justifyContent={'space-between'}
                        alignItems={"center"}
                    >
                        <Box
                            py={"20px"}
                            sx={(theme) => ({
                                borderBottom: {
                                    xs: `1px solid ${theme.palette.text.secondary}`,
                                    sm: 'none'
                                }
                            })}
                        >
                            <Typography variant="h4">
                                Social Media Dashboard
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                Total Followers:23,004
                            </Typography>
                        </Box>
                        <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={"10px"}
                        width={{xs:"100%" , sm:"auto"}}
                        justifyContent={"space-between"}
                        >
                            <Typography
                            fontWeight={"700"}
                            >
                                Dark Mode
                            </Typography>
                            <CustomizedSwitch
                              toggleTheme={toggleTheme}
                            />
                        </Box>
                            
                    </Box>
                    <Box
                        width={"100%"}
                        display={"flex"}
                        flexDirection={{ xs: "column", sm: 'row' }}
                        alignItems={"center"}
                        gap={{ xs: '10px', sm: "20px" }}
                    >
                        <SocialMediaCard color="hsl(208, 92%, 53%)"
                            number="1987"
                            entry="12"
                            Icon={iconFacebook}
                            at="@nathanf"
                            typedEntry="Followers"
                        />
                        <SocialMediaCard color="hsl(203, 89%, 53%)"
                            number="1044"
                            entry="99"
                            Icon={iconTwitter}
                            at="@nathanf"
                            typedEntry="Followers"
                        />
                        <SocialMediaCard color="linear-gradient(to right , hsl(37, 97%, 70%) , hsl(5, 77%, 71%) , hsl(329, 70%, 58%))"
                            number="11K"
                            entry="1099"
                            Icon={iconInstagram}
                            at="@realnathanf"
                            typedEntry="Followers"
                        />
                        <SocialMediaCard color="hsl(348, 97%, 39%)"
                            number="8239"
                            entry="-144"
                            Icon={iconYouTube}
                            at="Nathan F"
                            typedEntry="Subscribes"
                        />

                    </Box>
                    <Box
                        width={"100%"}
                        display={"flex"}
                        flexDirection="column"
                        gap={"20px"}
                        py={"45px"}
                    >
                        <Typography
                            variant="h4"
                        >Overview - Today</Typography>
                        <OverViewBox/>

                    </Box>
                </Box>
            </Box>
        </Stack>);
}

export default Home