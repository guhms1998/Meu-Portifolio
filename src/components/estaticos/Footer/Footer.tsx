import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='footer1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Minhas Redes Sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='icons' align='center'>
                            <a href="https://www.facebook.com/gustmarques98/" target="_blank">
                                <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/https://www.instagram.com/l.h.x.r//" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/gustavohms1998/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box className='footer2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="hms.com.br">
                                <Typography gutterBottom style={{ color: "white" }} align="center">gustavohms.netfly.app</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;