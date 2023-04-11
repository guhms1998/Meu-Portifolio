
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
                    </Grid></Grid>
                <Grid container xs={12} className='svg'>    
                    <svg   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,154.7C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
               </Grid> 
               

                <Grid container className='pt2' xs={12}>
                    <Box id='sobremim'><SobreMim /></Box>
                   
                </Grid>


                <Grid className='pt3' xs={12}>
                <Grid>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,122.7C672,107,768,85,864,112C960,139,1056,213,1152,218.7C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg></Grid>
                    <Box id='projetos' className='pro'><Projetos /></Box>

                </Grid>
                <Grid className='pt4' xs={12}>
                <Box id='contato'></Box>

                </Grid>
            </Grid>
        </>
    )

}











export default Home;