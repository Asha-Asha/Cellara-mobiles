// MyOrders.js

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const MyOrders = () => {
  // Assume orderedProducts is an array containing the ordered products
  const [orderedProducts, setOrderedProducts] = useState([]);

  return (
    <Container>
      <h1 className="mt-4">My Orders</h1>
      {orderedProducts.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div>
          {orderedProducts.map((product) => (
            <Card key={product.id} className="my-3">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Order ID: {product.orderId}</Card.Subtitle>
                <Card.Text>Price: ${product.price}</Card.Text>
                {/* Add more details as needed */}
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default MyOrders;
