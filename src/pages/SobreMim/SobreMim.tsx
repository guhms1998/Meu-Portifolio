import React from 'react';
import { Grid, Box } from "@material-ui/core";
import { height } from '@mui/system';
import './SobreMim.css';

const Card = ({ title, text, imageSrc }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', margin: '10px', borderRadius: '5px' }}>
      <img src={imageSrc} alt={title} style={{ width: '100%' }} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const SectionCard = ({ title, children }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', margin: '10px', borderRadius: '5px', }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

const Portfolio = () => {
  const cardsData = [
    { title: 'Ntx - Intolabs', text: 'Meu texto grande aquiaaaaaaaaaaaaaaaa', imageSrc: 'https://media.licdn.com/dms/image/C4D0BAQH4LEQODAncNw/company-logo_200_200/0/1604520937204?e=2147483647&v=beta&t=9VIax49j_LjIY4655_O6v0IL57EXTCOsNqhw-6BAz5w' },
    { title: 'Leonor Corretora', text: 'Descrição da situação 2', imageSrc: '/images/situacao2.jpg' },
    { title: 'China Lins', text: 'Descrição da situação 3', imageSrc: '/images/situacao3.jpg' },
    { title: 'BumbleBee', text: 'Descrição da situação 3', imageSrc: '/images/situacao3.jpg' },
  ];
  const cardsD = [
    { title: 'Situação 1', text: 'Meu texto grande aaaaaa', imageSrc: '' },
    { title: 'Situação 2', text: 'Descrição da situação 2', imageSrc: '/images/situacao2.jpg' },
    { title: 'Situação 3', text: 'Descrição da situação 3', imageSrc: '/images/situacao3.jpg' },
    { title: 'Situação 3', text: 'Descrição da situação 3', imageSrc: '/images/situacao3.jpg' },
  ];

  const technologiesData = [
    { name: 'React', imageSrc: "https://icons-for-free.com/download-icon-super+tiny+icons+javascript-1324450741921820748_256.png" },
    { name: 'Node.js', imageSrc: "https://reactjs.org/logo-og.png" },
    { name: 'React', imageSrc: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
    { name: 'Node.js', imageSrc: "https://videosdeti.com.br/wp-content/uploads/2018/12/git-githu-cover.png" },
    { name: 'Node.js', imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBp5lNdJlNXzmYh2TufzzTXgtm0CqzCqYiA&usqp=CAU" },
  
    
    // ...
  ];

  const popCultureData = [
    "https://stories.adorocinema.com/astro-de-harry-potter-recusou-papel-no-filme-tudo-em-todo-lugar-ao-mesmo-tempo/assets/4.gif",
    "https://i.pinimg.com/originals/44/80/7a/44807aabb840f4d58383298d2d61aa41.gif",
    "https://media.tenor.com/hSIgRbGANmEAAAAC/the-office-standoff.gif",
    "https://j.gifs.com/312Qzr.gif",
    "https://www.hypeness.com.br/1/2017/02/campari4.gif",
    "https://media.tenor.com/Vlr5ep-dRXMAAAAd/ryan-gosling-blade-runner2049.gif",
    "https://64.media.tumblr.com/tumblr_m9tds9v3p31qia44jo1_500.gifv",
    "https://i.pinimg.com/originals/94/88/48/94884817a9abbfee2a63986734187b4f.gif",
    "http://24.media.tumblr.com/88cd1277c7874034e4160c7efb66c4da/tumblr_ms3srrua871rf3wd1o1_400.gif" ,
    "https://i.gifer.com/9dPi.gif" ,
    // ...
  ];

  return (
    <>
      <Grid container direction='row' justifyContent='center' >
        <Grid direction='row' xs={4} >
          <Grid justifyContent='center' style={{ display: 'center', width: '100%', height: '68%', }} >
            <SectionCard title="Sobre Mim" >
              <Grid alignContent='center' justifyContent='center' >
                <img src="https://imgcloud.com.br/share/It6tFY4Bsa124NE3/direct" alt="Minha foto" style={{ width: '37%', paddingLeft: '125px' }} />
              </Grid>
              <p>Oi meu nome é Gustavo, Sou Desenvolverdor Java Web Full Stack, com conhecimentos nas tecnologias Springboot para JavaScript, MySql,Html, Css e React, ja cursei 2 Semestre de Analise e desenvolvimento de sistemas, tenho foco sempre em metodologias ageis, me considero uma pessoa com bastantes softskilks com destaque para criatividade e proatividade. Meus interesses variam muito desde Filmes, digasse de passagem que meus favoritos são Interstellar e Tudo em todo Lugar Ao Mesmo Tempo, a sair para socializar. Todos os dias estou dando meu maximo para estudar e cada dia mais me aprofundar mais na tecnologias que mais me dou bem.</p>
            </SectionCard>
          </Grid>
          <Grid >
            <SectionCard title="Tecnologias">
              {technologiesData.map((tech) => (
                <>
                  <img  src={tech.imageSrc}  style={{ width: '70px', height:'70px', borderRadius:'50%', padding:'7px' }} />
                 
                </>
              ))}
            </SectionCard>
          </Grid>
        </Grid>

        <Grid direction='row' xs={6} className='oi'>
          <SectionCard title="Experiencias" >

            {cardsData.map((card) => (
              <Card  key={card.title} title={card.title} text={card.text}   />

            ))}
          </SectionCard>






        </Grid>
        <Grid direction='row' xs={2}>
          <SectionCard title="Cusos" >

            {cardsD.map((card) => (
              <Card key={card.title} title={card.title} text={card.text} imageSrc={card.imageSrc} />

            ))}
          </SectionCard>

        </Grid>
        <Grid xs={12}>
          <SectionCard title="Cultura Pop">
            {popCultureData.map((image) => (
              <>
                <img key={image} src={image} alt="Cultura Pop" style={{ width: '100px', height:'100px', borderRadius:'50%', padding:'20px' }} />
              </>
            ))}
          </SectionCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;