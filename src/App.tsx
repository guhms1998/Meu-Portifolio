import Footer from './components/estaticos/Footer/Footer';
import Navbar from './components/estaticos/Navbar/Navbar';
import Home from './pages/Home/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/login/Login';
import './App.css';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import SobreMim from './pages/SobreMim/SobreMim';
import Contato from './pages/Contato/Contato';
import { useEffect, useState } from 'react';
import { motion, useScroll } from "framer-motion";
import Projetos from './pages/Projetos/Projetos';


function App() {
  
  const [ativaCor, setAtivaCor] = useState(false)

  useEffect(function(){
    function posicaoScroll(){
      if(window.scrollY > 900){
        setAtivaCor(true)
      } else{
        setAtivaCor(false)
      }
    }
    window.addEventListener('scroll', posicaoScroll);

  })
  const { scrollYProgress } = useScroll();


  return (

    
    <Router>
       
      
         
      <Navbar acao={ativaCor} />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Routes>             
      
          <Route path='/' element={<Home />} /> 
          <Route path='/login' element={<Login />} /> 
          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
          <Route path='/' element={<SobreMim />} />  
          <Route path='/' element={<Contato />}  /> 
          <Route path='/' element={<Projetos />}  />   
      
     </Routes>

      <Footer />
    </Router>
  );
}

export default App;