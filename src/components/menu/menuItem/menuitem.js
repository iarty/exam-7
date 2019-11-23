import React from 'react';
import Card from './card/card'

export default function menuitem({ menuItemsArr }) {
  console.log()
  return (
    <div className="">
      <div>
        <h3>Menu list</h3>
      </div>
      <div className="border border-dark rounded d-flex flex-wrap p-3">
        {menuItemsArr.map((el, i) => <Card key={i} dataItems = {el}/>)}
      </div>
    </div>
  )
}
