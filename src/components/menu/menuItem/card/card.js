import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Card = ({ dataItems }) => {
  console.log(dataItems)
  return (
    <MDBCol>
      <MDBCard style={{ width: "18rem" }}>
        <MDBCardImage className="img-fluid" src={dataItems.image} waves />
        <MDBCardBody>
          <MDBCardTitle>{dataItems.name}</MDBCardTitle>
          <MDBCardText>
            <span className="font-weight-bold">Price: {dataItems.price} KGS</span>
          </MDBCardText>
          <MDBBtn href="#">Buy</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;