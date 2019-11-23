import React from 'react'
import MenuItems from './menuItem/menuitem'

const menu = (props) => {
  return (
    <div className="col-8">
      <MenuItems menuItemsArr={props.MenuItemsArr} />
    </div>
  )
}

export default menu;
