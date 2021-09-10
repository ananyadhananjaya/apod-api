import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [image, setImage] = useState(false);
  const [url, setUrl] = useState()
  const handleClick = () =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((data)=>{
      console.log(data.data)
      setImage(true);
      setUrl(data.data.url)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>

      { !image && <button onClick={handleClick}>click</button>}
      { image && <img src = {url} />}
    </div>
  );
}

export default App;
