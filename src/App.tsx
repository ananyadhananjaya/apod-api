import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import '@fontsource/roboto';

import './App.css';

function App() {
  const [url, setUrl] = useState();
  const [explanation, setExplanation] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((data) => {
        setUrl(data.data.url)
        setExplanation(data.data.explanation)
      })
      .catch((error) => {
        console.log(error)
      })
  })
  return (
    <div>
          <img id = "image" src={url} alt = "image of stars" />
          <Typography  variant="body1">{explanation}</Typography>
    </div>
  );
}

export default App;
