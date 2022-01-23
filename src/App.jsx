import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant='h6'>
                        Bhanu's Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            This is a photo album from my favourite spots around the world. Hope you like and enjoy it as well! 
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent='center'>
                                <Grid item>
                                    <Button variant='contained' color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>

                        </div>
                    </Container>

                </div>
            </main>
        </>
    )
}

export default App;