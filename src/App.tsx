import { useEffect, useState } from 'react';
import axios from 'axios';


import './App.css';
import Header from './Header/Header';
import Content from './Content/Content';
import Image from './ImageNasa/Image';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Image />
    </div>
  )
}
export default App;


// function App() {
//   const [url, setUrl] = useState();
//   const [explanation, setExplanation] = useState();

//   useEffect(() => {
//     axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//       .then((data) => {
//         setUrl(data.data.url)
//         setExplanation(data.data.explanation)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   })
//   return (
//     <div>
//           <img id = "image" src={url} alt = "image of stars" />
//           <Typography  variant="body1">{explanation}</Typography>
//     </div>
//   );
// }