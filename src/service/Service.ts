import { Login } from '@mui/icons-material';
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com'
})

export const login = async(url: any, dados: any, setDado: any) =>{
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}