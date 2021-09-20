import { Typography } from "@mui/material";
import { width } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";

import './Image.css';

function Image() {
    const [imageURL, setURL] = useState();
    const [title, setTitle] = useState();
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then((data) => {
                console.log(data.data);
                setURL(data.data.url);
                setTitle(data.data.title)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <Typography id="Heading" position="static" variant="h4">
                Astronomy Picture of The Day!
            </Typography>
            <img src={imageURL} alt='Image of the Day' id="Image" />
            <Typography id="title" variant='subtitle2'>
                {title}
            </Typography>
            <br />
        </div>
    )
}

export default Image;