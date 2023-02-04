
import React from 'react';
import { Typography, Box, Grid, Button, IconButton, Link } from '@material-ui/core';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader;
import LinkedIn from '@material-ui/icons/LinkedIn';
import Main from './Home'
import { Fingerprint } from '@mui/icons-material';
import SobreMim from '../SobreMim/SobreMim';
import { useState } from "react";
import Projetos from '../Projetos/Projetos'
import Contato from '../Contato/Contato';

import { motion, AnimatePresence } from "framer-motion";






function Home() {

    return (
        <>
            <Grid container xs={12}
                className='tam'
                justifyContent="flex-start"
            >
                <Grid container className='pt1' xs={12} justifyContent="flex-start">
                    <Grid xs={5} >
                        <Box>

                            <Typography className='texto1'> Oi, Bem vindo ao meu site de</Typography>
                            <Typography className='texto1'>  Portifolio, Meu nome é</Typography>
                            <Typography className='text2'>Gustavo Henrique</Typography>
                            <Box className="icon">
                                <IconButton aria-label="fingerprint" color="secondary" className='linkpdf'>
                                    <Link href="https://drive.google.com/file/d/1y8dP9sXd_HFDBjxGVKcYH62ZcHOSOa__/view?usp=sharing" color="secondary">
                                        <Fingerprint />
                                        <Typography>Meu Curriculo</Typography>
                                    </Link>
                                </IconButton>
                                <IconButton aria-label="fingerprint" color="primary" className='linkpdf'>
                                    <Link href="https://www.linkedin.com/in/gustavohms1998/">
                                        <LinkedIn />
                                        <Typography>Meu Linkedin</Typography>
                                    </Link>
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={1} />
                    <Grid xs={5}>
                        <img src='https://imgcloud.com.br/share/lSh1t9PM4RtoA8sw' width={'100%'} height={'600vh'} />
                    </Grid>
                </Grid>

                <Grid container className='pt2' xs={12}>
                    <Box id='sobremim'><SobreMim /></Box>
                </Grid>


                <Grid className='pt3' xs={12}>
                    <Box id='projetos'><Projetos /></Box>

                </Grid>
                <Grid className='pt4' xs={12}>
                <Box id='contato'><Contato /></Box>

                </Grid>
            </Grid>
        </>
    )

}











export default Home;