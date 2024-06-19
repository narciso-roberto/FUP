import React from 'react';
import Produto from './Produto';
import { ArmazenGlobais} from './GlobalContext';


const App = () => {


  return(
    <div>
      <ArmazenGlobais>
        <Produto/>
      </ArmazenGlobais>
      
    </div>
  )
};

export default App;

