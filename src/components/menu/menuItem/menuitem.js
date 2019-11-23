import React from 'react';
import Card from './card/card'

export default function menuitem({ menuItemsArr, addToOrderList }) {
  return (
    <div>
      <div>
        <h3>Menu list:</h3>
      </div>
      <div className="border border-dark rounded d-flex flex-wrap p-3">
        {menuItemsArr.map((el, i) => <Card key={i} dataItems={el} addToOrderList={addToOrderList} index={i}/>)}
      </div>
    </div>
  )
}
