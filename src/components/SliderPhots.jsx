import * as React from 'react';
import { useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import '../styles.scss'

const secondaryImages = ["https://picsum.photos/id/1041/800/450",
                         "https://picsum.photos/id/1052/800/450",
                         "https://picsum.photos/id/1043/800/450",
                         "https://picsum.photos/id/1044/800/450",
                         "https://picsum.photos/id/1045/800/450",
                         "https://picsum.photos/id/1049/800/450",
                         "https://picsum.photos/id/1047/800/450", 
                        ]

function SwipeableTextMobileStepper() {
  const [selectedImage, setSelectedImage] = useState("https://picsum.photos/id/1041/800/450");
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
