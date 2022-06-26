import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../styles.scss'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

//----------------------------------------------------
import Home from '../pages/Home';
import Formulario from '../pages/Formulario';
import Footer from './Footer'
//----------------------------------------------------

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Header() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return ( 
        <Box>
          
            <Box>
                <Paper elevation={5} className= 'paperHeader' square>
                        <div className='headerOrganizer'>
                            <img src={require('../img/Logo1.png')} alt="Logo Montenegro e Teles" className='logo1' /> 
                        </div>
                        <div className='headerOrganizer' >    
                    <Box>
                        <Tabs value={value} onChange={handleChange} centered>
                          <Tab label="Inicio" {...a11yProps(0)} />
                          <Tab label="Equipe" {...a11yProps(1)} />
                          <Tab label="Contato" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    </div> 
                    <div className='headerOrganizer2'>
                        
                    </div>
                   
                </Paper>
                
            </Box>
                <TabPanel value={value} index={0}>
                  <Box className='adjustFooterH'>
                    <Home/>
                  </Box>    
                    <Footer/>
                         
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Box className='adjustFooterH'>
                    Aqui vai ficar as fotos e informações sobre a equipe
                  </Box>   
                    <Footer/>
                     
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Box className='adjustFooterH'>
                      <Formulario/>
                  </Box>    
                </TabPanel>
                
        </Box>
     );
}

export default Header;