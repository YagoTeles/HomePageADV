import * as React from 'react';
import { useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import '../styles.scss'

const secondaryImages = [require('../img/1.jpg'),
                         require('../img/2.jpg'),
                         require('../img/3.jpg'),
                         require('../img/4.jpg'),
                         require('../img/5.jpg'),
                         require('../img/6.jpg'),
                         require('../img/7.jpg'), 
                        ]

function SwipeableTextMobileStepper() {
  const [selectedImage, setSelectedImage] = useState(require('../img/1.jpg'));
  return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Stack direction="column" spacing={1}>
            <img src={selectedImage} alt="" className='SliderPhotos-Primary'/>
            <Stack direction="row" spacing={{ xs: 0.2, sm: 0.5, md: 0.5 }} >
            {secondaryImages.map((item,index)=>
            (
             <div className='SliderPhotos-Div' key={index}>
                <img 
                  onClick={()=> setSelectedImage(secondaryImages[index])}
                  src={item}
                  key={index}
                  style={item === selectedImage ? {borderColor:'#bf8e3a',borderStyle:'solid'} : {border:'0px'}}
                  alt="" 
                  className='SliderPhotos-Secondary'/>
              </div>
              ))}
          </Stack>
          </Stack>  
          
        </Box>
      </Grid>
  );
}

export default SwipeableTextMobileStepper;
