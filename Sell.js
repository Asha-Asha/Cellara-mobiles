// Sell.js
import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

function Sell() {
  const [products, setProducts] = useState([]);
  const [mobileModel, setMobileModel] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [warrantyYear, setWarrantyYear] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleSell = () => {
    // Add the new product to the products array
    const newProduct = {
      mobileModel,
      sellingPrice,
      warrantyYear,
      productImage,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);

    // Clear the form fields after selling
    setMobileModel('');
    setSellingPrice('');
    setWarrantyYear('');
    setProductImage(null);
  };

  return (
    <Container>
      <h1 className="mt-4">Sell Your Mobile Phone</h1>

      <Form className="mt-4">
        <Form.Group controlId="mobileModel">
          <Form.Label>Mobile Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter mobile model"
            value={mobileModel}
            onChange={(e) => setMobileModel(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="sellingPrice">
          <Form.Label>Selling Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter selling price"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="warrantyYear">
          <Form.Label>Year of Warranty</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter warranty year"
            value={warrantyYear}
            onChange={(e) => setWarrantyYear(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="productImage">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" onChange={(e) => setProductImage(e.target.files[0])} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleSell} className="mt-3">
          Sell
        </Button>
      </Form>
      
      {products.map((product, index) => (
        <Card key={index} className="mt-2">
          <Card.Body>
            <Card.Title>{product.mobileModel}</Card.Title>
            <Card.Text>Selling Price: {product.sellingPrice}</Card.Text>
            <Card.Text>Warranty Year: {product.warrantyYear}</Card.Text>
            {product.productImage && (
              <img src={URL.createObjectURL(product.productImage)} alt="Product" style={{ maxWidth: '100%' }} />
            )}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Sell;
