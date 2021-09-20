import { Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Content(){
    const [text, setText] = useState();
    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then((data)=>{
                setText(data.data.explanation)
            })
    },[])
    return(
        <Typography>
            {text}
        </Typography>
    )
}

export default Content;