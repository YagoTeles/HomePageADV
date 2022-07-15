import Box from '@mui/material/Box';
import '../footer-style.scss'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import WhatsappIcon from './WhatsappIcon';
import InstaIcon from '../components/InstaIcon';
import MapsIcon from '../components/MapsIcon';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
                        
                        <Box className='footerTypography'>
                           
                                <div className='Typography'>
                                     <div style={{width:'100%',textAlign:'center',fontWeight:600}}>Endereço</div>
                                        Avenida Washington Soares, <br/>1400, sala 603, Juridical Center
                                </div>
                                <div className='Typography'>
                                       <div style={{width:'100%',textAlign:'center',fontWeight:600}}>E-mail</div> 
                                        hermeniateles.adv@gmail.com
                                </div>
                                <div className='ButtonAgendarAgora'>
                                    <Button 
                                    startIcon={<CalendarMonthIcon />} 
                                    variant={'contained'}
                                    
                                    href={'https://wa.me/5585988112138'}
                                    target="_blank"
                                    sx={{height:'fit-content', marginBottom:2,marginTop:1}}>agendar agora</Button>
                                </div>
                                <div className='RedesSociaisDiv'>
                                    <div style={{width:'100%',textAlign:'center',fontWeight:600}}>Redes sociais</div>
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
                                </div>
                            
                        </Box>
                    </div>
                </Paper>
            
        </Box>
     );
}

export default Footer;