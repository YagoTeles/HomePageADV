import * as React from 'react';
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
import { useState,useEffect } from 'react';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { useForm,Controller } from "react-hook-form";
import InputMask from "react-input-mask";

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));
let erro = false 
const erroInInputs = () => erro = !erro
const FormEmail = () => {
    const { register, handleSubmit, watch, formState: { errors },control } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    const [errorName,setErrorName] = useState(false);
    const [errorTelefone,setErrorTelefone] = useState(false);
    const [errorEmail,setErrorEmail] = useState(false);
    const [errorMensagem,setErrorMensagem] = useState(false);


    useEffect(() => {
        if (errors.NomeCompleto) setErrorName(true);
        if (errors.Email) setErrorEmail(true);
        if (errors.Telefonedecontato) setErrorTelefone(true);
        if (errors.Escrevasuamensagem) setErrorMensagem(true);
        
      }, [erro]);

    return(
        <Paper elevation={5} className='paperForm'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                    container
                    alignItems='flex-start'
                    direction="column"                       
                    gap={'2px'}
                    height={520}
                >
                    <Typography style={{width:'100%',display:'flex',justifyContent:"center"}}> Contato via E-mail</Typography>

                    <TextField 
                        fullWidth
                        sx={{height:80}}
                        label="Nome completo" 
                        variant="outlined"
                        error={errorName}
                        helperText={errorName && errors.NomeCompleto?.message} 
                        {...register("NomeCompleto", {required: 'Esse campo é obrigatório', pattern:{
                            value:/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                            message:'O nome não deve conter caracteres especiais ou números'},maxLength: 80})}
                         />
                        
                    <TextField 
                        fullWidth
                        sx={{height:80}}
                        label="Email de contato" 
                        variant="outlined"
                        helperText={errorEmail && errors.Email?.message}
                        error = {errorEmail}
                        {...register("Email", {required: 'Esse campo é obrigatório', 
                            pattern: {value: /^\S+@\S+$/i,message:'Insira um Email válido'} })}
                        />

                    <Controller
                    name="Telefonedecontato"
                    control={control}
                    rules={{required: 'Esse campo é obrigatório', maxLength: 16}}
                    render={({ field: { onChange, value } }) => (
                      <InputMask mask="99 9 9999-9999" value={value} onChange={onChange} maskChar="">    
                        {(inputProps) => (
                          <TextField
                            fullWidth
                            sx={{height:80}}
                            {...inputProps}
                            error={errorTelefone}
                            helperText={errorTelefone && errors.Telefonedecontato?.message}
                            label='Telefone de contato' 
                                        
                          />
                        )}
                      </InputMask>
                    )}
                   />

                    <TextField 
                        fullWidth
                        sx={{height:198}}
                        label="Escreva sua mensagem" 
                        variant="outlined" 
                        error={errorMensagem}
                        helperText={errorMensagem && errors.Escrevasuamensagem?.message}
                        multiline rows={6}
                        {...register("Escrevasuamensagem", {required: 'Esse campo é obrigatório', min: 10})}
                        />
                    <Button variant="contained"  onClick={() => erroInInputs()} type='submit' fullWidth>Enviar</Button>        
                </Grid>
            </form>
        </Paper>
);
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
        <Typography style={{width:'100%',display:'flex',justifyContent:"center"}} variant='h5'> Nosso Whatsapp:<br/> (85) 9 8811-2138</Typography>
        <Root><Divider><Chip label="OU" /></Divider></Root>
        <Button style={{width:'100%',display:'flex',justifyContent:"center"}} size='large' variant='text' href={'https://wa.me/5585988112138'} target="_blank"><Typography variant='h5'>Clique aqui</Typography> </Button>
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