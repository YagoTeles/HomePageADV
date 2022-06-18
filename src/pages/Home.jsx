import SliderPhotos from '../components/SliderPhots'
import { Typography } from '@mui/material';
import { memo } from 'react';
function Home() {
    return ( 
    <div>
        <SliderPhotos/>
        <Typography style={{width:'100%',display:'flex',justifyContent:"center",marginTop:10}} variant='h5'> Espaço para o sobre ou mais informações</Typography>
    </div> );
}

export default memo(Home);