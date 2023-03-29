import React from 'react';
import ProjectCard from './ProjectCard.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import './Projetos.css';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(20),
    paddingLeft: 50,
  },
  card: {
    margin: theme.spacing(100),
    
  },
}));

const projects = [
  {
    title: 'Meu Portifolio',
    description: 'Tentado ser bem descontraido, fiz esse portifolio como um lugar de testes e feito para acessarem tanto profissionalmente quanto para me conheceram ',
    image: 'https://imgcloud.com.br/share/IYnvE0EXISaWJtB2',
    githubLink: 'https://github.com/guhms1998/Meu-Portifolio',
  },
  {
    title: 'Project 2',
    description: 'https://terra-da-gente.netlify.app/',
    image: 'https://imgcloud.com.br/share/hEdCMIwF0q9sr34s',
    githubLink: 'https://github.com/Terra-da-Gente',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'https://static.vecteezy.com/ti/vetor-gratis/p1/425642-farmacia-com-enfermeira-no-balcao-personagem-de-desenho-animado-de-farmacia-vetor.jpg',
    githubLink: 'https://github.com/guhms1998/FarmaciaJava',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'path/to/image2.jpg',
    githubLink: 'https://github.com/guhms1998/Joogo-Genius-em-JavaScript',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'path/to/image2.jpg',
    githubLink: 'https://github.com/guhms1998/Blog-Pessoal',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'path/to/image2.jpg',
    githubLink: 'https://github.com/guhms1998/Loja-de-Games',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'path/to/image2.jpg',
    githubLink: 'https://github.com/user/project2',
  },
  // Add more projects here
];

function App() {
  const classes = useStyles();
  

  return (

    <div className={classes.root}  >
      <Typography className='txt'>Projetos</Typography>
      <Grid container spacing={2} >
      
        {projects.map(project => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.title} >
            <ProjectCard project={project} className={classes.card} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
