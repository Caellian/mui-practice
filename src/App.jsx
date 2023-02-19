import React, { useState } from "react";

import {
    AppBar,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    Grid,
    ThemeProvider,
    Toolbar,
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Stack,
} from "@mui/material";
import {
    PhotoCamera,
    LightMode,
    ModeNight,
    Copyright,
} from "@mui/icons-material";
import { GlobalStyles, materialTheme } from "./styles";
import { toggleSetter } from "./util";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <ThemeProvider theme={materialTheme(darkMode ? "dark" : "light")}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit">
                        Photo Album
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Box>
                        <Checkbox
                            aria-label="Toggle dark mode"
                            checked={darkMode}
                            sx={{ color: "inherit" }}
                            icon={<ModeNight />}
                            checkedIcon={
                                <LightMode sx={GlobalStyles.colorText} />
                            }
                            onChange={toggleSetter((value) => {
                                setDarkMode(value);
                            })}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
            <main>
                <Box
                    sx={{
                        bgcolor: "",
                    }}
                >
                    <Container maxWidth="sm" sx={{ marginTop: "100px" }}>
                        <Typography
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Photo Album
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="text.secondary"
                            paragraph
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Typography>

                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained" color="primary">
                                See my photos
                            </Button>
                            <Button variant="outlined" color="primary">
                                Secondary action
                            </Button>
                        </Stack>
                    </Container>
                </Box>

                <Container maxWidth="md" sx={{ py: 8 }}>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item xs={12} sm={6} md={4} key={card}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            aspectRatio: "16 / 9",
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random image"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography
                                            variant="h5"
                                            component="h2"
                                            gutterBottom
                                        >
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use
                                            this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="secondary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <Stack
                sx={{ bgcolor: "background.paper", p: 6 }}
                component="footer"
            >
                <Typography variant="h6" align="center">
                    Footer
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        Something here to give the footer a purpose!
                    </Typography>
                    <Copyright />
                </Box>
            </Stack>
        </ThemeProvider>
    );
}

export default App;
