import Box from '@mui/material/Box';
import '../footer-style.scss'
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
function Footer() {
    return ( 
        <Box class="footer">
            <Paper elevation={5} className= 'paperFooter' square >
                <img src={require('../img/Logo2.png')} alt="Logo Montenegro e Teles" className='logoFooter' />

                <Typography style={{padding:15}}>
                            Whatsapp: (99) 99999-9999 <br/>
                            Email: email.usuario.com.br
                </Typography>
            </Paper>
        </Box>
     );
}

export default Footer;