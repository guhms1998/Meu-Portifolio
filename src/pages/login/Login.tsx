import React, {ChangeEvent, useState, useEffect} from "react";
import UserLogin from "../../models/UserLogin";
import './Login.css'
import { Grid, Box, Typography, TextField, Button} from '@material-ui/core'
import { Link, useNavigate } from "react-router-dom";
import { fontStyle } from "@mui/system";
import useLocalStorage from 'react-use-localstorage';
import { api } from "../../service/Service";
import { alertTitleClasses } from "@mui/material";
function Login() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id:0,
            usuario:'',
            senha:'',
            token:''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>){

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                navigate ('/')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();

            try{
                const resposta = await api.post('/usuarios/logar', userLogin)
                setToken(resposta.data.token)

                alert('Usuario logado com sucesso!');
            }catch(error){
                alert('Usuario ou senha Inconsistente, Tente Novamente');
            }
        }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color="textPrimary" component='h3' align="center" style={{fontWeight: 'bold'}} >Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id="usuario" label='usuario' variant="outlined" name='usuario' margin="normal" fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id="senha" label='senha' variant="outlined" name='senha' margin="normal" type='password' fullWidth />
                        <Box marginTop={2} textAlign='center' align='center'>
                            
                            <Button type='submit' variant='contained' style={{ backgroundColor:'burlywood' }}>
                                Logar
                            </Button>
                            
                        </Box>  
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Nao tem uma Conta</Typography>
                        </Box>
                        <Box>
                            <Link to='/cadastrousuario'>
                            <Typography variant="subtitle1" gutterBottom align="center" style={{fontWeight:'bold'}}>Cadastra-se</Typography>
                            </Link>
                            
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="img">
            </Grid>
        </Grid>
    )

}
export default Login;