//ProductList.js

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddToCart from './AddToCart';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BuyNow from './BuyNow'; 
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
const products = [
  
  {
    id: 1,
    name: 'iPhone 12',
    image: 'https://assets.sangeethamobiles.com/product_img/8510/1667548150_Xij.jpg',
    price: 699.00,
    specification: {
      ram: '6GB',
      rom: '128GB',
      storage: '256GB',
      camera: 'Dual 12MP',
    },
    colors: [
      'https://s3no.cashify.in/pd-admin/1e1d470f185f4f49bf2e614826d0f55a.jpg?p=default&s=lg',
      'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-max-graphite-back.png?v=42',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XOVMLghSK9oSkqGOpngHOHU0ZCe2LoItBg&usqp=CAU',
    ],
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    image: 'https://images.samsung.com/in/smartphones/galaxy-s23/buy/product_color_green.png?imwidth=480',
    price: 379.99,
    specification: {
      ram: '8GB',
      rom: '256GB',
      storage: '512GB',
      camera: 'Triple 108MP',
    },
    colors: [
      'https://images.samsung.com/in/smartphones/galaxy-s23/buy/product_color_lavender.png?imwidth=480',
      'https://images.samsung.com/in/smartphones/galaxy-s23/buy/product_color_phantom_black.png?imwidth=480',
      'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s911blgcins/gallery/in-galaxy-s23-s911-446648-sm-s911blgcins-536290047?imwidth=480',
    ],
  },
  {
    id: 3,
    name: 'Google Pixel 5',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSecN9QPf-Girbes3us0myr58MPFfdHd2NxzfAOStLW53P7pS1FUjR7PfgMqJ47u8ZNVW2aIH6u8HPpqG0NRFVbXkmW3bEX9YmIs5E4xrNLJ_IDFSgVJJQvww&usqp=CAE',
    price: 239.00,
    specification: {
      ram: '8GB',
      rom: '128GB',
      storage: '256GB',
      camera: 'Dual 12.2MP',
    },
    colors: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTfjZwqiKrmdV-CGuiipuN4Wd3xfpbrXjK5br36qb0tyFQhi0CAB9VpJjhJhxSpeU_zkYaxTKA7uafseOSm4CMpJ-_6mcZRstJsPNQ5V6yJjJcvI7bEzdjMVA&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8DzBc36nmzJzmdBEx-ZxgEVe93CZbVWq3mFwGw1p73zPcwcf91_smtak2Y1Gg2wvTHn_oB9LAyrpzxExqqkFvgpuUVeWyEwqdWtoVESso&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcReiwAjQDCOo2Iw0UQSwQhMPkQD9XMMtVBNqF0CHHO_vd3IEIFMNYh3PdkqzyfhuDoPKoYcNwxvMQr2OVRl9jnFZtVEfzN2IEk7uUSC6XV3m41j5KbIoW2v&usqp=CAE',
    ],
  },
  {
    id: 4,
    name: 'OnePlus 9 Pro',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQRo-LJbzOwivNdu7CN5j8a8t7DA_GNyOFMM_13bOodp2b6BG5mxLby3WE-jIWyAOO1PnRHkGIzSIMP1eI3J23qz4ydnpNRv41iUT7PI44Y5vSHBELfEIbJLA&usqp=CAE',
    price: 207.99,
    specification: {
      ram: '12GB',
      rom: '256GB',
      storage: '512GB',
      camera: 'Quad 48MP',
    },
    colors: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRM2k8uHyzh7MOcC39jEHFUe7V9lfeohP6UjVIU14XMVBwtR09LRTsWHKLyElkLjTu69VtsAJhfYRt_Bbliprvma9XbK2ENmYToIMh3nEYs&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9pieeZRe8JsBaW4eRpTQcNFk-Wtc9pqiWOSMxgnqip8wKUYwPdcIbsnWm2u3-tx3WAyVoSR-apAus2AEI0MY2xndHxSmcJ6MjO0-VIOY_bdLtXckPO8vzz9rG&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQkBTlCIAsy9-LajghoyOtUT78gWvN6jF__ee-AlwVI1kdAv0mXRYI4gtI7_QnsAko9W5eb4aeRPJ-pXV3Rn8HrSjbV1awrePZNFocCrm_YuNwum1sxriGUjg&usqp=CAE',
    ],
  },
  {
    id: 5,
    name: 'iPhone SE (2020)',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTFiuMzlXnMGLwbMcJn9Q4Re4bkkLLgDM0vsjRbLkaS29c8tKpGqxfxju1C3TxZdf3fuRZ1G485zIC6PuQU1xBWXe8W5ZhCN2UZ17Y6MxTlR-GLe9mdzZfm1g&usqp=CAE',
    price: 143.99,
    specification: {
      ram: '3GB',
      rom: '64GB',
      storage: '128GB',
      camera: 'Single 12MP',
    },
    colors: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0izm3NyruWwLbMUBtTjI5vEOSPbhL6LZCmtnOf16nHx5XnUXmWJqJNfTte2i1Y1MZ5ABJ-uKIgDrPhyJaiKxq-gfWHLIzpE5lT0F9VmJpwrUlG1ToPaLA&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSZsjyc9pDVKCYCbrE3TX4pRQe_iyY5K7q1zsdIi2yaERJKa1H6J9hrlDZ5HSfFBX3W3T3SAiYGyevfoCN3laot5Cq8ZRhx378Ve4hz9hLGbq6tQ6MrG8V4&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTX1AFjJSmoGDkVoqUGh4JndFgGcTqh9SSleX3B_srv3DwctSYo24cplj7hFqwR_LprgwoFW0i8cwnBORZWu7sjvYL3wxmPrfULB8FvBOJtnCGR5iMxzYZG&usqp=CAE',
    ],
  },
  {
    id: 6,
    name: 'Xiaomi Mi 11',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSR1VffKspz4Oi41yQ1OdPJg8OPIgO27xhs5C1C_ELPJDUmBedadvcy-RolTDNW_yf8i9dnk_RpqZmqlA5kf2et1SMZqkmnn-v8ku1rHxkTYSoWLYASOrfggA&usqp=CAE',
    price: 319.99,
    specification: {
      ram: '8GB',
      rom: '256GB',
      storage: '256GB',
      camera: 'Triple 108MP',
    },
    colors: [
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSta8mIojRNyerYtsaGJ9qKjittqSe39ee6eYW5M7dL5XViyVWmHB1bjFiVuDgsKMDuP4niHLp89uskHYkT5rPys1tWycF-1ZA8bpkLUMk8FmsJHrLbvC14&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQPwCbptW0o7Tn3_fjVj4RxcjkoRja02NpKqSUm1nDsJF87E2dHEpGsxChDfrNDgyxr16ZJy-FvkklMiBzPMUb9PFX3i1mb2qNR8or0vpyT7pkFRFyViA-P&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTWjd_7SD-dR6ljzRVlsGw05Xgzz7pDZMU3zap3TmQrHknvu2fylZZykmwjK_Yj9iWvY-9h26aVmyotLs7crG7arQlE4gzpav8eCMQVWvZGuQV7be1-BIBV-g&usqp=CAE',
    ],
  },
  {
    id: 7,
    name: 'Huawei P40 Pro',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6QTJs3Z-Bx3utYq6YcxPCns0rAn4vVDnDV5KkrlLseFqv-AD0ayQxlsh-CQZT9Lvg2ihVv-2MQHHoN2Y4gRPJyNFwNj48&usqp=CAE',
    price: 294.00,
    specification: {
      ram: '8GB',
      rom: '256GB',
      storage: '512GB',
      camera: 'Quad 50MP',
    },
    colors: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTlgCq_i_LyMUl6ZIeUFHyJ2__OVQZXr7j-In8S6EdQzeZZcwpZgEEN2OV019aOtWs59imtl_5KHFVnjafKhgz0yWJF65EbMicBUyA8uAU&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTKsUXevfGuYrqOy9WkOQIHuWykGOHU3U2T-Upfu9AlsmJd1wnRawhplUdXGWJZWWfrTQr6z7TCy2ZznE8C9ANL9siEYoeJG4LqSNCqLCQ59CBJmdlp7KFs&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGkmFDy8nNCQGl41WqkGPky8tfdyoe-_CtYimDJQas1bnslDDNUi5H4FraRH44h2GQj_l3JKWN2D8k0vImugnPgp0eVstrPZeVmQZe2ggWCUaDWgW3S6uM&usqp=CAE',
    ],
  },
  {
    id: 8,
    name: 'Sony Xperia 1 III',
    image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6175SlKKECL._SX679_.jpg',
    price: 750.99,
    specification: {
      ram: '12GB',
      rom: '256GB',
      storage: '512GB',
      camera: 'Triple 12MP',
    },
    colors: [
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSv3CN7_ORTyY9LlNSfjpihL8koyr-yFjB5SU88OcpdfzBwbn9p4wrDuhvW-azS36zIHllbKTGhEga8H4w6vp_1JeIU6qRoDhu5eWQ0Q_s&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwzxMMDE1eLShPxXzaz0_NkQ1J_Go-LkpG_8YgxkKc1gTkYKbGT8S8rRO2BPMZUFq76zuXIRwK1md2WWc70f5hhzLwX873jZ1zfwx-hEecmUw03kI1NhVbkQ&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSrLZK-BSKBm88BI3qIAVjl7gvX3nUffkyJbTvhGkxFKY2KHIucRSjw8kJKER43XncSnnKx-65i8snVKWuvrlkq3VOqHEx7&usqp=CAE',
    ],
  },
  {
    id: 9,
    name: 'LG V60 ThinQ',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3cdlXFxP-WlsQhPlfJIjK_rioT8Ro5LTbZv5BHT-N1PiJQ3FZpZHS3Oq0IlVJv9n9UKgbPO4ByK2B_jkh3i9ojJtUFT6TvAdAueNwOrYm-l3ctW74fQMmkA&usqp=CAE',
    price: 169.00 ,
    specification: {
      ram: '8GB',
      rom: '128GB',
      storage: '256GB',
      camera: 'Triple 64MP',
    },
    colors: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSWssNT5QM0lkY3yuIJMDTtjFLr22x5xwyQqz-_ynwM4C50UROvqAfP4eZs2shlTPPeReBgcZotjhBG8lEt6j03mH9PvybpcIWbsRp2P6cxckXCfC0kYOcXSQ&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXP1TqBLtNIWbp0hBOUn_tHXr_V4KyecQqs8-QNgSCtGCjMF4gZHDCG0zXIXpgJ_4G8oOWzESjX3ohI4HlFaNYs-PYWlq9kv1FcMP39oHP&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYha53cKGBRtOIZ6t5SwxBS5FvoeHnMaBnFEbNTFNu9I6bQtl-lpR5QfWPuwPPFhCJU2ztdyLZeCoTHeNNaxuTd5GyCW2g6zNe72iS-Q1y1vrAlzHNT2vZ&usqp=CAE',
    ],
  },
  {
    id: 10,
    name: 'Oppo Find X3 Pro',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjxoVpMf3qLcQjvg72pvHF1uD0J1_PvxYZFneQzMWQW0LMOfyWivtVMw7YJ9W8_rnDpJ391Q9ySf2_pxwsMxpdElKJLZC2qklUjlTKGhEtdW6USGzY2o-R&usqp=CAE',
    price: 860.99,
    specification: {
      ram: '12GB',
      rom: '256GB',
      storage: '256GB',
      camera: 'Quad 50MP',
    },
    colors: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTOtgxt6zvUg_UBBWtOXAWHqu_dOOrmHKYr070kZkoTePCySUWFkLzN3kVQbEihokP0WB5x1QkcqkLpkaFfkuud1KIvmKmLYRQudnIoTqrS62SdzOCVbFIW&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQsPqTYSbagOwQsZ2xPog2szxRAD9MQg1xlIG-1UUm7foqeyNfP2-rGtOhABG7U9rral9UyXo-4ffXFyW7pvQApZJa1gL4C3lZ_khKqrdHQ&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShZXMtV3d91YEhdbHQIgNZIyKHTfdlBhzkwxu0hlW0HzpfpMjiklTjX8MvQa3TNSD_oLnmYRc6umYsvQvcSFbLe9oeAsp_MpV7LAZgc-ONMJrgfKXgQuWTnA&usqp=CAE',
    ],
  },
];



function Products() {
  const exchangeRate = 75;

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState(6);
  const [cartItems, setCartItems] = useState([]);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleSeeMore = () => {
    setDisplayedProducts(displayedProducts + 6);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
  };

  const handleCardDoubleClick = (product) => {
    const { id, name, image, specification, price, colors } = product;
    setSelectedProduct({
      id,
      name,
      image,
      specification,
      price,
      colors,
    });
    setShowModal(true);
  };

  return (
    <Container >
      <div className="text-center mb-4">
        <h1 style={{ fontSize: '2em' }}>Cellara's Daily Products</h1>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      </div>

      <div style={{ position: 'absolute', top: '10px', right: '20px' }}>
        <Button variant="outline-primary" onClick={() => console.log('Liked Items:', cartItems)}>
          Liked Items
        </Button>
      </div>

      <div className="d-flex flex-wrap justify-content-between background">
        {products.slice(0, displayedProducts).map((product) => (
          <div
            key={product.id}
            style={{
              width: '48%',
              marginBottom: '20px',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                onDoubleClick={() => handleCardDoubleClick(product)}
              />
              <Card.Body>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <Card.Title>{product.name}</Card.Title>
  <div style={{ display: 'flex', gap: '10px' }}>
    <Button variant="primary" onClick={() => handleAddToCart(product)}>
      <Link to="/addtocart" style={{ color: 'white', textDecoration: 'none' }}>
        Add To Cart
      </Link>
    </Button>

    <Button variant="primary">
      <Link to="/buynow" style={{ color: 'white', textDecoration: 'none' }}>
        Buy Now
      </Link>
    </Button>
  </div>
</div>

                <Card.Text>
                  <strong>Price:</strong> ₹{(product.price * exchangeRate).toFixed(2)}
                </Card.Text>
                <Card.Text>
                  <strong>RAM:</strong> {product.specification.ram}
                </Card.Text>
                <Card.Text>
                  <strong>ROM:</strong> {product.specification.rom}
                </Card.Text>
                <Card.Text>
                  <strong>Camera:</strong> {product.specification.camera}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ display: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <Card.Body>
                <Card.Text>
                  <strong>Price:</strong> ₹{(product.price * exchangeRate).toFixed(2)}
                </Card.Text>
                <Card.Text>
                  <strong>RAM:</strong> {product.specification.ram}
                </Card.Text>
                <Card.Text>
                  <strong>ROM:</strong> {product.specification.rom}
                </Card.Text>
                <Card.Text>
                  <strong>Camera:</strong> {product.specification.camera}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {displayedProducts < products.length && (
        <div className="text-center mt-3">
          <Button variant="primary" onClick={handleSeeMore}>
            View All
          </Button>
        </div>
      )}

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{ width: '100%', marginBottom: '10px' }}
              />
              <Card.Text>
                <strong>Price:</strong> ₹{(selectedProduct.price * exchangeRate).toFixed(2)}
              </Card.Text>
              <Card.Text>
                <strong>RAM:</strong> {selectedProduct.specification.ram}
              </Card.Text>
              <Card.Text>
                <strong>ROM:</strong> {selectedProduct.specification.rom}
              </Card.Text>
              <Card.Text>
                <strong>Camera:</strong> {selectedProduct.specification.camera}
              </Card.Text>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Products;