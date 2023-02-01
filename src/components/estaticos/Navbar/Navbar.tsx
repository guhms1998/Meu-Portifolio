import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";
import { Grid, Box  } from "@mui/material";
import './Navbar.css'
import SobreMim from "../../../pages/SobreMim/SobreMim";
import { Route } from "react-router-dom";

function Navbar ({acao=true}) {
  return(
<>
<AppBar position='sticky' className={acao ? 'ativaCor' : 'Bar'} >
  <Toolbar className={acao ? 'ativaCor' : ''} >
  <Grid container direction='row' xs={12} spacing={1} rowSpacing={2}  gridAutoFlow='row' padding={1}>
      <Grid  paddingTop={1} xs={6}  >
        <Link href="/">
        
          <img src="src\components\estaticos\Navbar\fhms.png" width={'70vh'} height={'65vh'}  className="img1"/>          
      </Link>
      </Grid>
      <Grid  xs={5}  display="flex" alignItems="center" justifyContent="center" rowSpacing={2} className='nav2'>
        <Box mx={1}>
        <Link href="#sobremim" >
        
        <Typography className="font">Sobre Mim 🤯   </Typography>
        </Link>
        </Box >
        <Box mx={2}>
        <Link href="#projetos" >
        <Typography className="font">Projetos 😎    </Typography>
        </Link>
        </Box>
        <Box mx={2}>
          <Link href="#contato">
        <Typography className="font">Contato 😊   </Typography>
        </Link>
        </Box >
        <Box mx={1}>
        <Typography className="font">Rede Sociais 😳   </Typography>
        </Box>
        <Box mx={1}  className="entar" sx={{p:1}}>
          <Typography className="textoentrar">
               Entrar  
          </Typography>
        </Box>
      </Grid>
      
        
</Grid>
  </Toolbar>
  </AppBar>
</>

)}
export default Navbar































// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import './Navbar.css'
// import { Link, useHref } from 'react-router-dom';
// import { LoginOutlined } from '@mui/icons-material';
// import Home from '../../../pages/Home/Home';
// import Login from '../../../pages/login/Login';
// import { SignalCellularNullSharp } from '@material-ui/icons';

// const pages = [{'pageHome': (Home)}, {pageLogin: (Login)}]


// const settings = [{'Profile', 'Account', 'Dashboard', 'Logout'];


// const  Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
    
//     <AppBar position="static">
//       <Container maxWidth="xl" className='Bar' >
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             GUGA
//           </Typography>
            
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Link to='/login'>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
              
//               {pages.map((page) => (
//                 <MenuItem key={null} onClick={handleCloseNavMenu} >
//                   <Typography textAlign="center" >{'/' + page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//             </Link>
//           </Box>
          
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/home"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
          
//           <Box className='Bar' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((pages) => (
            
//              <Button
//                 key={null}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
                
//               </Button>
             
//             ))}
//           </Box>
              
//           <Box sx={{ flexGrow: 0 }} className='Bar'>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default Navbar;
