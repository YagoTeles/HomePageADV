import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

const FormEmail = () => {
    return(<Paper elevation={5} className='paperForm'>
    <Grid
        container
        alignItems='flex-start'
        direction="column"                       
        gap={'16px'}
        height={488}
    >
        <Typography style={{width:'100%',display:'flex',justifyContent:"center"}}> Contato via E-mail</Typography>
        <TextField fullWidth label="Nome completo" variant="outlined" />
        <TextField fullWidth label="Email de contato" variant="outlined" />
        <TextField fullWidth label="Telefone" variant="outlined" />
        <TextField fullWidth label="Escreva sua mensagem" variant="outlined" multiline rows={6}/>
        <Button variant="contained" fullWidth>Enviar</Button>
    </Grid>    
</Paper>);
}

const FormWpp = () => {
    return(<Paper elevation={5} className='paperForm'>
    <Grid
        container
        alignItems='flex-start'
        direction="column"
        justifyContent='space-evenly'               
        gap={'16px'}
        height={300}
    >
        <Typography style={{width:'100%',display:'flex',justifyContent:"center"}}> Contato via Whatsapp:</Typography>
        <Typography style={{width:'100%',display:'flex',justifyContent:"center"}} variant='h5'> Nosso Whatsapp:<br/> (85) 9 0000-0000</Typography>
        <Root><Divider><Chip label="OU" /></Divider></Root>
        <Button style={{width:'100%',display:'flex',justifyContent:"center"}} size='large' variant='text'><Typography variant='h5'>Clique aqui</Typography> </Button>
    </Grid>    
</Paper>);
}

function Formulario() {
    const [valor,setValor] = useState("whatsapp")
    const radioForm = 
        (<FormControl>
            <FormLabel id="contato-via">Contato via:</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={valor}
              onChange={(novoValor) => setValor(novoValor.currentTarget.value)}
            >
              <FormControlLabel value="whatsapp" control={<Radio />} label="Whatsapp" />
              <FormControlLabel value="email" control={<Radio />} label="E-mail" />
            </RadioGroup>
          </FormControl>);
    
    return (
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                {radioForm}
                {valor === "whatsapp" ? <FormWpp/> : <FormEmail/>}
                
            </Grid>
     );
}

export default Formulario;