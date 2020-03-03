import React from 'react';
import {getData} from '../modules/productData';


//let menuTableIndex;

class App extends Component {
  state = {
    renderIndex: true
  };

  render() {

  return (
    <>
      <h1>Slowfood</h1>
      <div>{getData()}</div>
      
    </>
  );
}
}

export default App;
