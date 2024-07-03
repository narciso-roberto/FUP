import React from 'react';
import Slide from './Slide';



const App = () => {
  const slides = [
    {
      id:'slide1',
      text: 'Slide'
    },
    {
      id:'slide2',
      text: 'Slide'
    }
    ,
    {
      id:'slide3',
      text: 'Slide'
    }
]
  
  return (<>
    <Slide slides={slides}/>
  </>);
}

export default App;