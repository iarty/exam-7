import React from 'react';
import Card from './card/card'

export default function menuitem({ menuItemsArr, addToOrderList }) {
  return (
    <div>
      <div>
        <h4>Menu list:</h4>
      </div>
      <div className="border border-dark rounded d-flex flex-wrap p-3">
        {menuItemsArr.map((el, i) => <Card key={i} dataItems={el} addToOrderList={addToOrderList} index={i}/>)}
      </div>
    </div>
  )
}
