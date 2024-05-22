import React from 'react';
import hotPot from '../images/hot_pot.jpg';
import tofu from '../images/tofu.jpg';
import miso from '../images/miso.jpg';
import sushi from '../images/sushi.jpg';
import fries from '../images/fries.jpg';
import sandwich from '../images/sandwich.jpg';
import drinks from '../images/drinks.jpg';

const menuItems = [
  { name: 'Hot Pot', image: hotPot },
  { name: 'Tofu', image: tofu },
  { name: 'Miso Soup', image: miso },
  { name: 'Sushi', image: sushi },
  { name: 'Fries', image: fries },
  { name: 'Sandwich', image: sandwich },
  { name: 'Drinks', image: drinks },
];

const getRandomPrice = () => (Math.random() * 20 + 5).toFixed(2);

const Menu = () => (
  <div className="container mt-5">
    <h1 className="text-center">Menu</h1>
    <table className="table table-striped mt-4">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Image</th>
          <th scope="col">Price ($)</th>
        </tr>
      </thead>
      <tbody>
        {menuItems.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td><img src={item.image} alt={item.name} className="img-thumbnail" style={{ width: '100px' }} /></td>
            <td>{getRandomPrice()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Menu;

