import React, {Component} from 'react';
import DisplayProductData from './components/DisplayProductData';
import {getData} from './modules/productData';


//let menuTableIndex;

class App extends Component {


  render() {

  return (
    <>
      <h1>Slowfood</h1>
      <DisplayProductData/>
      
    </>
  );
}
}

export default App;
