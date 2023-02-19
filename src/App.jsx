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
    CardActions
} from "@mui/material"
import { PhotoCamera, LightMode, ModeNight } from "@mui/icons-material";
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
                    <PhotoCamera sx={GlobalStyles.icon} />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                    <Box sx={{flexGrow: 1}}></Box>
                    <Box>
                        <Checkbox
                            aria-label="Toggle dark mode"
                            checked={darkMode}
                            icon={<ModeNight />}
                            checkedIcon={<LightMode />}
                            onChange={toggleSetter((value) => {
                                console.log(value);
                                setDarkMode(value);
                            })}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
            <main>
                <div sx={GlobalStyles.container}>
                    <Container maxWidth="sm" sx={{ marginTop: "100px" }}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>

                        <div sx={GlobalStyles.buttons}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container maxWidth="md" sx={GlobalStyles.cardGrid}>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item xs={4} key={card}>
                                <Card variant="outlined">
                                    <CardMedia component="img" sx={GlobalStyles.cardMedia} image="https://source.unsplash.com/random" title="Image title"/>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="secondary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
        </ThemeProvider>
    )
}

export default App;
