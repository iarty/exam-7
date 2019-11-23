import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Card = ({ dataItems, addToOrderList, index }) => {
  return (
    <MDBCol className="mb-5">
      <MDBCard style={{ width: "16rem", height: 260 }}>
        <MDBCardImage className="img-fluid" src={dataItems.image} waves />
        <MDBCardBody>
          <MDBCardTitle>{dataItems.name}</MDBCardTitle>
          <MDBCardText>
            <span className="font-weight-bold">Price: {dataItems.price} KGS</span>
          </MDBCardText>
          <MDBBtn href="#" onClick={() => addToOrderList(index)}>Add</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;