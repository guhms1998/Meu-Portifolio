import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css'

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='img2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color="textPrimary" component='h3' align="center" style={{ fontWeight: 'bold' }} >Cadastro</Typography>
                        <TextField id="nome" label='nome' variant="outlined" name='nome' margin="normal" fullWidth />
                        <TextField id="senha" label='usuario' variant="outlined" name='usuario' margin="normal" fullWidth />
                        <TextField id="email" label='email' variant="outlined" name='email' margin="normal" fullWidth />
                        <TextField id="senha" label='senha' variant="outlined" name='senha' margin="normal" type='password' fullWidth />
                        <Box marginTop={2} textAlign='center' align='center'>
                            <Link to='/login'>
                                <Button type='submit' variant='contained' style={{ backgroundColor: 'red', marginRight: '20px' }}>
                                    Cancelar
                                </Button>
                            
                            </Link>
                            <Link to='/home' className='text-decoration-none'>
                                <Button type='submit' variant='contained' style={{ backgroundColor: 'burlywood'}}>
                                    Criar Cadastro
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}
export default CadastroUsuario