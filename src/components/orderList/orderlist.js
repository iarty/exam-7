import React from 'react';
import OrderListItem from './orderListItem/orderlistitem';
import { MDBListGroup } from "mdbreact";


export default function orderlist({ DataItem }) {
  let totalPrice = 0;
  DataItem.forEach(element => {
    totalPrice += element.price * element.value
  });
  return (
    <div>
      <div>
        <h3>Order Details:</h3>
      </div>
      <div className="border border-dark rounded p-3">
        <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
          {DataItem.map((el, i) => <OrderListItem key={i} DataItem={el} />)}
        </MDBListGroup>
        <hr />
        <span>total price: {totalPrice} KGS</span>
      </div>
    </div>
  )
}
