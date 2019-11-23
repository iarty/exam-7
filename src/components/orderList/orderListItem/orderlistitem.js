import React from 'react';
import { MDBListGroupItem } from "mdbreact";
import { MDBCloseIcon } from "mdbreact"



export default function orderlistitem({ DataItem }) {
  // console.log(DataItem)
  return (
    <MDBListGroupItem color="warning d-flex justify-content-between">
      <div>
        <span>{DataItem.name}</span> <span>x{DataItem.value}</span>
      </div>
      <div>
        <span>{DataItem.price * DataItem.value}</span>&nbsp;&nbsp;
        <MDBCloseIcon />
      </div>
    </MDBListGroupItem>
  )
}
