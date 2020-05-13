import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

import '../App.css'

class Main extends Component { 

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    console.log(dishId)
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <FooterComponent />
      </div>
    );
  }
}

export default Main;