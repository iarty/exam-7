import React, { Component } from 'react';
import Menu from './components/menu/menu'
import burgerImg from './assets/burgerImg.jpg';
import teaImg from './assets/teaImg.jpg';
import coffeeImg from './assets/coffeeImg.jpg';
import pizzaImg from './assets/pizzaImg.jpeg';
import rollsImg from './assets/rollsImg.jpeg';
import colaImg from './assets/colaImg.jpeg';

const menuItemsArr = [
  { name: 'Burger', price: 80, image: burgerImg },
  { name: 'Tea', price: 15, image: teaImg },
  { name: 'Coffee', price: 20, image: coffeeImg },
  { name: 'Pizza', price: 320, image: pizzaImg },
  { name: 'Rolls', price: 180, image: rollsImg },
  { name: 'Cola', price: 40, image: colaImg },
]
export default class App extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <div className="row">
          <Menu MenuItemsArr={menuItemsArr} />
        </div>
      </div>
    )
  }
}
