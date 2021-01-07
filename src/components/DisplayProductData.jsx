import React, { useState, useEffect } from 'react'
import { getData } from '../modules/productData'

const DisplayProductData = (props) => {
  const [productData, setProductData] = useState([])
  
  const getProductData = async () => {
    let result = await getData();
    setProductData(result.data.products)
  }

  useEffect(() => {
    getProductData()
  }, [])

  let dataIndex = productData.map(item => {
    return (
      <div key={item.id} data-cy={`product-${item.id}`}>
        {item.name}{item.description}{item.price}
        { localStorage.getItem('authenticated') === 'true' &&
          <button
            data-product={item.id}
            onClick={(event) => props.addToOrder(event)}
          >
            Add to Order
        </button>
        }
      </div>
    )
  })
  return (
    <>
      { productData.length > 0 &&
        <div id="index">
          {dataIndex}
        </div>
      }
    </>
  )
}

export default DisplayProductData


// import React, { Component } from 'react';
// import { getData } from '../modules/productData';

// class DisplayProductData extends Component {
//   state = {
//     productData: []
//   }

//   componentDidMount() {
//     this.getProductData()
//   }

//   async getProductData() {
//     let result = await getData();
//     this.setState({ productData: result.data.products })
//   }

//   render() {
//     let dataIndex
//     if (Array.isArray(this.state.productData) && this.state.productData.length) {
//       dataIndex = (
//         <div id="index">
//           {this.state.productData.map(item => {
//             return (
              // <div key={item.id} data-cy={`product-${item.id}`}>
              //   {item.name}{item.description}{item.price}
              //   { localStorage.getItem('authenticated') === 'true' &&
              //     <button
              //       data-product={item.id}
              //       onClick={(event) => this.props.addToOrder(event)}
              //     >
              //       Add to Order
              //     </button>
              //   }
              // </div>
//             )
//           })}
//         </div>
//       )
//     }

//     return (
//       <>
//         {dataIndex}
//       </>
//     )
//   }
// }

// export default DisplayProductData;