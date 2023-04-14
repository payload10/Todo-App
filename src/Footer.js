import React from 'react';
import './Footer.css';

const Footer = ({groceryItems}) => {
  return (
    <footer>
        <h2>{groceryItems} {(groceryItems) ? "items" : "item"} in the list</h2>
    </footer>
  )
}

export default Footer