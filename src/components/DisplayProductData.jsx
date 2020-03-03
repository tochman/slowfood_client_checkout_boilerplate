import React, { Component } from 'react';
import {getData} from '../modules/productData';

class DisplayProductData extends Component {

  async getProductData() {
    let result = await getData();
    this.setState({getProductData: result.data.entries}, () => {
      this.props.indexUpdated();
    })
  }

  render () {
    let dataIndex;

    if (this.state.productData != null) {
      dataIndex = (
        <div id="index">
          {this.state.productData.map(item => {
            return <div key={item.id}>{item.data.name}{item.data.description}{item.data.price}</div>
          })}
        </div>
      )
    }

    return (
      <div>
        {dataIndex}
      </div>
    )
  }
}

export default DisplayProductData;