import React from 'react'

const OrderDetails = (props) => {
  return (
    <div data-cy="order-details">
      <h3>Your order</h3>
      <ul data-cy="order-items">
        {props.order.items.map(item => {
          return (
            <li key={item.id}>
              {item.name}
            </li>
          )
        })}

      </ul>
    </div>
  )
}

export default OrderDetails
