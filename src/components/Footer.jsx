import Box from '@mui/material/Box';
import '../footer-style.scss'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import WhatsappIcon from './WhatsappIcon';
import InstaIcon from '../components/InstaIcon';
import MapsIcon from '../components/MapsIcon';
import IconButton from '@mui/material/IconButton';
function Footer() {
    return (

        <Box className="footer">
            <div style={{float:'right',marginBottom:16,marginRight:20}}>
                  <Button
                    className='AtendimentoViaWpp'
                    variant="contained"
                    href={'https://wa.me/5585988112138'}
                    target="_blank"
                    sx={{borderRadius:999999,backgroundColor:'#25D366',color:'#fff'}}>
                        <div style={{display:'flex',justifyContent:'center',marginRight:7}}>
                               <WhatsappIcon tamanho = "24"/> 
                        </div>
                        Atendimento WhatsApp
                  </Button>
            </div>
            
                <Paper elevation={5} className= 'paperFooter' square >
                    <div className='footerpart1'>
                        <img src={require('../img/Logo2.png')} alt="Logo Montenegro e Teles" className='logoFooter' />
                        <Box className='footerTypography'>
                           
                                <div className='Typography'>
                                        Avenida Washington Soares, <br/>1400, sala 603, Juridical Center
                                </div>
                                <div className='Typography'>
                                        E-mail: <br/>
                                        hermeniateles.adv@gmail.com
                                </div>
                                <div className='icons-footer'>
                                    <IconButton className='NoHover'>
                                        <InstaIcon/>
                                    </IconButton>

                                    <IconButton className='NoHover'>
                                        <MapsIcon/>
                                    </IconButton>

                                    <IconButton className='NoHover' href={'https://wa.me/5585988112138'} target="_blank">
                                        <WhatsappIcon tamanho = "30"/>
                                    </IconButton>
                                </div>
                            
                        </Box>
                    </div>
                </Paper>
            
        </Box>
     );
}

export default Footer;