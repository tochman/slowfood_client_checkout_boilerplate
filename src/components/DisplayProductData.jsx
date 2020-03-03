import React, { Component } from 'react';
import {getData} from '../modules/productData';

class DisplayProductData extends Component {
  state = {
    productData: []
  }

  componentDidMount(){
    this.getProductData()
  }

  async getProductData() {
    let result = await getData();
    debugger
    this.setState({productData: result.data.products})
  }

  render () {
    let dataIndex;
    
    if (this.state.productData != null) {
      dataIndex = (
        <div >
          {this.state.productData.map(item => {
            return <div key={item.id}>{item.data.name}{item.data.description}{item.data.price}</div>
          })}
        </div>
      )
    }

    return (
      <div id="index">
        {dataIndex}
      </div>
    )
  }
}

export default DisplayProductData;