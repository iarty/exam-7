import React, { Component } from 'react';
import Menu from './components/menu/menu';
import OrderList from './components//orderList/orderlist'
import burgerImg from './assets/burgerImg.jpg';
import teaImg from './assets/teaImg.jpg';
import coffeeImg from './assets/coffeeImg.jpg';
import pizzaImg from './assets/pizzaImg.jpeg';
import rollsImg from './assets/rollsImg.jpeg';
import colaImg from './assets/colaImg.jpeg';

const menuItemsArr = [
  { name: 'Burger', price: 80, image: burgerImg, value: 1 },
  { name: 'Tea', price: 15, image: teaImg, value: 1 },
  { name: 'Coffee', price: 20, image: coffeeImg, value: 1 },
  { name: 'Pizza', price: 320, image: pizzaImg, value: 1 },
  { name: 'Rolls', price: 180, image: rollsImg, value: 1 },
  { name: 'Cola', price: 40, image: colaImg, value: 1 },
]
export default class App extends Component {
  state = {
    toOrderList: [],
    totalPrice: null
  }

  addToOrderList = (index) => {
    const toOrderList = this.state.toOrderList;
    const newIndex = toOrderList.findIndex(el => el.name === menuItemsArr[index].name)
    if (newIndex === -1) {
      toOrderList.push(menuItemsArr[index])
      this.setState({ toOrderList })
    } else {
      toOrderList[newIndex].value++
      this.setState({ toOrderList })
    }
  }
  totalPrice = () => {

  }
  render() {
    return (
      <div className="container" >
        <div className="row">
          <OrderList DataItem={this.state.toOrderList} />
          <Menu MenuItemsArr={menuItemsArr} addToOrderList={this.addToOrderList} />
        </div>
      </div>
    )
  }
}
