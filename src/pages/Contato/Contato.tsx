import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { TextField, Grid, Typography, Box } from '@material-ui/core';
import './Contato.css';
import { MotiView } from 'moti';



function Contato() {

    const [remetente, setRemetente] = useState('');
    const [destinatario, setDestinatario] = useState('');
    const [destinatarioemail, setDestinatarioemail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleRemetenteChange = (e: any) => {
        setRemetente(e.target.value);
    }

    //será executada pelo form
    const SendEmail = (e: any) => {
        e.preventDefault();

        var templateParams = {
            remetente: remetente,
            destinatario: destinatario,
            destinatarioemail: destinatarioemail,
            mensagem: mensagem
        };

        emailjs.send('service_gmail', 'template_sjdj4u7', templateParams, 'service_lqtj3a9')
            .then(function (response) {
                console.log('Success!!!!', response.status, response.text);
            }, function (error) {
                console.log('Failed...', error);
            });
        console.log(templateParams);
    }

    return (
        
        <Grid container direction='row' className='email' xs={12}>
                
            <Grid xs={6} container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}>


                <form onSubmit={SendEmail}>

                    <Grid alignItems='center' className='email2'>
                        <input type="text" name="remetente" placeholder="Nome do remetente"
                            onChange={(e) => { setRemetente(e.target.value); }} value={remetente}
                        />
                    </Grid>
                    <Grid className='email2'>
                        <input type="text" name="destinatario" placeholder="Nome do destinatário"
                            onChange={(e) => { setDestinatario(e.target.value); }} value={destinatario}
                        />
                    </Grid>
                    <Grid className='email2'>
                        <input type="email" name="destinatarioemail" placeholder="E-mail do destinátario"
                            onChange={(e) => { setDestinatarioemail(e.target.value); }} value={destinatarioemail}
                        />
                    </Grid>
                    
                    <label>
                        <TextField type={mensagem} placeholder="Digite sua mensagem" className='email' inputMode='text' >

                        </TextField>
                    </label>

                    <Grid>
                        <input type="submit" value="Enviar Mensagem" />
                    </Grid>
                </form>
            </Grid>



            <Grid xs={6} direction='column'>
                <Box>
                    <img src="https://media1.giphy.com/media/USfXP6QarUCTqU4GXu/200w.gif?cid=82a1493b1czn9nkcm1n87zr3c789e8pfw9y3wza3lg4drmmi&rid=200w.gif&ct=g" className='gif2' alt="" />
                </Box>
                <Typography>
                    Meu Celular: 11964246388
                    Meu Telefone: 1141784186
                </Typography>

                <Grid>
                    <Box>
                        <img src="https://telltaletv.com/wp-content/uploads/2014/11/himym-gif.gif" alt="" className='gif2' />
                    </Box>
                    <Box>
                        Meu Email: gustavohms1998@gamil.com
                        Meu Linkedin: /dskçfjhdsapkhfdsa
                    </Box>
                </Grid>
            </Grid>
        </Grid>



    );
}

export default Contato;



/*import { Box, Grid } from '@material-ui/core';
import { Typography } from '@mui/material';


function Contato(){
    return(
    
    <Grid container xs={12} direction='row'>
        <Grid xs={6} direction='row'>
            <img src="https://media1.giphy.com/media/USfXP6QarUCTqU4GXu/200w.gif?cid=82a1493b1czn9nkcm1n87zr3c789e8pfw9y3wza3lg4drmmi&rid=200w.gif&ct=g" className='gif2' alt="" />
            <Typography>
                Meu Celular: 11964246388
                Meu Telefone: 1141784186
            </Typography>
        </Grid>
        <Grid>
           <Box>
            <img src="https://telltaletv.com/wp-content/uploads/2014/11/himym-gif.gif" alt=""  className='gif2'/>
            </Box>
            <Box>
                Meu Email: gustavohms1998@gamil.com
                Meu Linkedin: /dskçfjhdsapkhfdsa
            </Box>
        </Grid>
    </Grid>
    
)
}
export default Contato */