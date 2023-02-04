import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import './SobreMim.css';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(15),
      height: theme.spacing(16),

    },
    
    textAlign: 'center',
  },
  largeAvatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  box: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: theme.spacing(5),
    borderRadius: theme.spacing(1),
    margin: theme.spacing(2),
    marginTop: theme.spacing(15),

  }

}));

const SobreMim = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} sm={6}>
        <Box className={classes.box} align='center'>
          <Avatar
            src="https://imgcloud.com.br/share/It6tFY4Bsa124NE3/direct"
            alt="Foto de Perfil"
            className={classes.largeAvatar}
          />
          <Typography variant="h6" className='texto' >Eu</Typography>
          <Typography variant="body2" className='texto'>
            Oi meu nome é Gustavo, Sou Desenvolverdor Java Web Full Stack, com conhecimentos nas tecnologias Springboot para JavaScript, MySql,Html, Css e React, ja cursei 2 Semestre de Analise e desenvolvimento de sistemas, tenho foco sempre em metodologias ageis, me considero uma pessoa com bastantes softskilks com destaque para criatividade e proatividade. Meus interesses variam muito desde Filmes, digasse de passagem que meus favoritos são Interstellar e Tudo em todo Lugar Ao Mesmo Tempo, a sair para socializar. Todos os dias estou dando meu maximo para estudar e cada dia mais me aprofundar mais na tecnologias que mais me dou bem.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box className={classes.box}>
          <Typography variant="h6" className='texto'>Meus Gostos</Typography>
          <div className={classes.root}>
            <Avatar src="https://stories.adorocinema.com/astro-de-harry-potter-recusou-papel-no-filme-tudo-em-todo-lugar-ao-mesmo-tempo/assets/4.gif" />
            <Avatar src="https://i.pinimg.com/originals/44/80/7a/44807aabb840f4d58383298d2d61aa41.gif" />
            <Avatar src="https://media.tenor.com/hSIgRbGANmEAAAAC/the-office-standoff.gif" />
            <Avatar src="https://j.gifs.com/312Qzr.gif" />
            <Avatar src="https://www.hypeness.com.br/1/2017/02/campari4.gif" />
            <Avatar src="https://media.tenor.com/Vlr5ep-dRXMAAAAd/ryan-gosling-blade-runner2049.gif" />
            <Avatar src="https://64.media.tumblr.com/tumblr_m9tds9v3p31qia44jo1_500.gifv" />
            <Avatar src="https://i.pinimg.com/originals/94/88/48/94884817a9abbfee2a63986734187b4f.gif" />
            <Avatar src="http://24.media.tumblr.com/88cd1277c7874034e4160c7efb66c4da/tumblr_ms3srrua871rf3wd1o1_400.gif" />
            <Avatar src="https://i.gifer.com/9dPi.gif" />
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box className={classes.box}>
          <Typography variant="h6" className='texto'>Minhas Tecnologias</Typography>
          <Grid className={classes.root}>

            <Avatar src="https://icons-for-free.com/download-icon-super+tiny+icons+javascript-1324450741921820748_256.png" />
            <Avatar src="https://reactjs.org/logo-og.png" />
            <Avatar src="https://cdn-icons-png.flaticon.com/512/919/919836.png" />
            <Avatar src="https://videosdeti.com.br/wp-content/uploads/2018/12/git-githu-cover.png" />
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBp5lNdJlNXzmYh2TufzzTXgtm0CqzCqYiA&usqp=CAU" />
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box className={classes.box} >
          <Typography variant="h6" className='texto'>Minhas Experienecias e Estudos</Typography>
          <Grid >

            <Box className={classes.root} >
              <Avatar src="https://res.cloudinary.com/generation/image/upload/w_350,q_auto,f_auto/brazil/2022/04/Cover-1.png" />
              </Box>
              <Typography variant="body1">
                Generation Brasil
              </Typography>            
            <Box>             
            </Box>
            <Box className={classes.root}>
              <Avatar src="https://res.cloudinary.com/generation/image/upload/w_350,q_auto,f_auto/brazil/2022/04/Cover-1.png" />
              </Box>
              <Typography variant="body1">
                Generation Brasil
              </Typography>            
            <Box>             
            </Box>
            <Box className={classes.root}>
              <Avatar src="https://res.cloudinary.com/generation/image/upload/w_350,q_auto,f_auto/brazil/2022/04/Cover-1.png" />
              </Box>
              <Typography variant="body1">
                Generation Brasil
              </Typography>            
            <Box>             
            </Box>
            
          </Grid>
        </Box>
      </Grid>






    </Grid>

  );
}
export default SobreMim;
