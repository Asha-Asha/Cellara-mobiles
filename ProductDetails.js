// ProductDetails.js
import React from 'react';
import { Card } from 'react-bootstrap';

function ProductDetails({ product, onBuyNow, exchangeRate }) {
  return (
    <Card>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ₹{(product.price * exchangeRate).toFixed(2)}
        </Card.Text>
        <Card.Text>
          <strong>Specifications:</strong> RAM: {product.specification.ram}, ROM: {product.specification.rom}, Storage: {product.specification.storage}, Camera: {product.specification.camera}
        </Card.Text>
        <Card.Text>
          <strong>Colors:</strong> {product.colors.map((color, index) => <img key={index} src={color} alt={`Color ${index + 1}`} style={{ width: '30px', height: '30px', margin: '0 5px' }} />)}
        </Card.Text>
        <button onClick={() => onBuyNow(product)}>Buy Now</button>
      </Card.Body>
    </Card>
  );
}

export default ProductDetails;
