import { Box, Card, Stack, Typography } from "@mui/material";
import SocialMediaCard from "./Components/SocialMediaCard"
import iconInstagram from "../images/icon-instagram.svg";
import CustomizedSwitch from "./Components/Switch";

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
                            <Typography variant="caption" color="textSecondary">
                                Total Followers:23,004
                            </Typography>
                        </Box>
                        <CustomizedSwitch
                            toggleTheme={toggleTheme}
                        />
                    </Box>
                    <Box
                        width={"100%"}
                        display={"flex"}
                        flexDirection={{ xs: "column", sm: 'row' }}
                        alignItems={"center"}
                        gap={{ xs: '10px', sm: "20px" }}
                    >
                        <SocialMediaCard color="primary.main"
                            number="1000"
                            entry="100"
                            Icon={iconInstagram}
                            at="gmail.com"
                            typedEntry="Follower"
                        />
                        <SocialMediaCard color="primary.main"
                            number="1000"
                            entry="100"
                            Icon={iconInstagram}
                            at="gmail.com"
                            typedEntry="Follower"
                        />
                        <SocialMediaCard color="primary.main"
                            number="1000"
                            entry="100"
                            Icon={iconInstagram}
                            at="gmail.com"
                            typedEntry="Follower"
                        />
                        <SocialMediaCard color="primary.main"
                            number="1000"
                            entry="100"
                            Icon={iconInstagram}
                            at="gmail.com"
                            typedEntry="Follower"
                        />

                    </Box>
                    <Box
                        width={"100%"}
                        display={"flex"}
                        flexDirection={{ xs: "column", sm: 'row' }}
                        justifyContent={'space-between'}
                        alignItems={"center"}
                    >
                        <Typography
                            variant="h4"
                        >Overview - Today</Typography>
                        {/*Cards*/}

                    </Box>
                </Box>
            </Box>
        </Stack>);
}

export default Home