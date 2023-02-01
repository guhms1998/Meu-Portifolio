import React from 'react';
import ProjectCard from './ProjectCard.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(20)
  },
  card: {
    margin: theme.spacing(100),
    
  },
}));

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    image: 'path/to/image1.jpg',
    githubLink: 'https://github.com/user/project1',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'path/to/image2.jpg',
    githubLink: 'https://github.com/user/project2',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'path/to/image2.jpg',
    githubLink: 'https://github.com/user/project2',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'path/to/image2.jpg',
    githubLink: 'https://github.com/user/project2',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'path/to/image2.jpg',
    githubLink: 'https://github.com/user/project2',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'path/to/image2.jpg',
    githubLink: 'https://github.com/user/project2',
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
    <div className={classes.root} >
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
