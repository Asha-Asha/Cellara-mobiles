import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
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
function BuyNow() {
  const exchangeRate = 75;
  const Navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [upiId, setUpiId] = useState('');
  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [debitCardDetails, setDebitCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10) || 1);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleBuyNow = () => {
    if (!deliveryAddress || quantity <= 0 || !customerName || !mobileNumber || (paymentMethod === 'gpay' && !upiId)) {
      console.error('Please fill in all required details.');
      return;
    }
  
    if (paymentMethod === 'gpay') {
      // Provide a link to open Google Pay manually
      window.location.href = 'https://pay.google.com/';
    } else {
      // Show confirmation modal for other payment methods
      setShowConfirmation(true);
    }
  };
  

  const handleConfirmPayment = () => {
    // Simulate a payment confirmation (replace with actual logic)
    setPaymentConfirmed(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setPaymentConfirmed(false);
  };

  useEffect(() => {
    const initialProductId = 1;
    const initialProduct = products.find((product) => product.id === initialProductId);

    if (initialProduct) {
      setSelectedProduct(initialProduct);
    }
  }, []);

  const product = selectedProduct;

  const backgroundImageStyle = {
    backgroundImage: 'url("https://example.com/your-background-image.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', 
  };

  return (
    <Container style={backgroundImageStyle}>
      <div className="text-center mb-4">
        <h1 style={{ fontSize: '3em' }}>Order Here!</h1>
      </div>

      {product && (
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
          />
          <h2>{product.name}</h2>
          <p>Price: ₹{product.price * exchangeRate}</p>
          <p>RAM: {product.specification.ram}</p>
          <p>ROM: {product.specification.rom}</p>
          <p>Storage: {product.specification.storage}</p>
          <p>Camera: {product.specification.camera}</p>

          <Form.Group controlId="deliveryAddress">
            <Form.Label><h2>Delivery Address:</h2></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your delivery address"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="customerName">
            <Form.Label><h2>Customer Name:</h2></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="mobileNumber">
            <Form.Label><h2>Mobile Number:</h2></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="quantity">
            <Form.Label><h2>Quantity:</h2></Form.Label>
            <Form.Control type="number" min="1" value={quantity} onChange={handleQuantityChange} />
          </Form.Group>

          <Form.Group controlId="paymentMethod">
            <Form.Label><h2>Payment Method:</h2></Form.Label>
            <Form.Control as="select" value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="cash">Cash on Delivery</option>
              <option value="gpay">Google Pay</option>
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
            </Form.Control>
          </Form.Group>

            {paymentMethod === 'gpay' && (
              <Form.Group controlId="upiId">
                <Form.Label>UPI ID:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your UPI ID"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </Form.Group>
            )}
  
            {paymentMethod === 'creditCard' && (
              <>
                <Form.Group controlId="cardNumber">
                  <Form.Label>Card Number:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your card number"
                    value={creditCardDetails.cardNumber}
                    onChange={(e) =>
                      setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="expiryDate">
                  <Form.Label>Expiry Date:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YYYY"
                    value={creditCardDetails.expiryDate}
                    onChange={(e) =>
                      setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="cvv">
                  <Form.Label>CVV:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter CVV"
                    value={creditCardDetails.cvv}
                    onChange={(e) =>
                      setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })
                    }
                  />
                </Form.Group>
              </>
            )}
  
            {paymentMethod === 'debitCard' && (
              <>
                <Form.Group controlId="debitCardNumber">
                  <Form.Label>Debit Card Number:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your debit card number"
                    value={debitCardDetails.cardNumber}
                    onChange={(e) =>
                      setDebitCardDetails({ ...debitCardDetails, cardNumber: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="debitExpiryDate">
                  <Form.Label>Expiry Date:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YYYY"
                    value={debitCardDetails.expiryDate}
                    onChange={(e) =>
                      setDebitCardDetails({ ...debitCardDetails, expiryDate: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="debitCvv">
                  <Form.Label>CVV:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter CVV"
                    value={debitCardDetails.cvv}
                    onChange={(e) =>
                      setDebitCardDetails({ ...debitCardDetails, cvv: e.target.value })
                    }
                  />
                </Form.Group>
              </>
            )}
  
  <Button variant="primary" onClick={handleBuyNow}>
            Buy Now
          </Button>
        </div>
      
        )}
  
        {/* Confirmation Modal */}
        <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!paymentConfirmed ? (
              <p>Are you sure you want to proceed?</p>
            ) : (
              <>
                <h2>Order Confirmed</h2>
                <p>Successfully Completed</p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPqOqYfZJPNUUWJesXCM_YLr74RrZt50Pq7pKTSdF6waOYIGTt7uE416vAlKkIhVJd4k&usqp=CAU"
                  alt="Successfully Completed"
                  style={{ width: '100%' }}
                />
              </>
            )}
          </Modal.Body>
  
          <Modal.Footer>
            {!paymentConfirmed ? (
              <>
                <Button variant="secondary" onClick={handleCloseConfirmation}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleConfirmPayment}>
                  Confirm Order
                </Button>
              </>
            ) : (
              <Button variant="primary" onClick={handleCloseConfirmation}>
                Close
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
  
  export default BuyNow;