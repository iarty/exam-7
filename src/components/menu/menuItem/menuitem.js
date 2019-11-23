import React from 'react';
import Card from './card/card'

export default function menuitem({ menuItemsArr }) {
  console.log()
  return (
    <div>
      <div>
        <h3>Menu list</h3>
      </div>
      <div className="border border-dark rounded">
        {menuItemsArr.map((el, i) => <Card key={i} dataItems = {el}/>)}
      </div>
    </div>
  )
}
