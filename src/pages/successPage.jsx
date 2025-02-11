import React from 'react';
import { useSelector } from 'react-redux';
import { AiFillCheckCircle } from 'react-icons/ai';

const SuccessPage = () => {
  const cart = useSelector((state) => state.cart.cart); 
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0); 
  
  const deliveryAddress = useSelector((state) => state.checkout.address) || {}; 

  console.log('Delivery Address:', JSON.stringify(deliveryAddress, null, 2));

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f7fb',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        className="success-container"
        style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '30px',
          width: '100%',
          maxWidth: '800px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="success-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <AiFillCheckCircle
            style={{ fontSize: '50px', color: 'black', marginBottom: '10px' }}
          />
          <h2 style={{ color: 'black', fontWeight: 'medium' }}>Order Successfully Placed!</h2>
          <p style={{ color: 'black', fontSize: '14px' }}>Thank you for your purchase!</p>
        </div>
        
        <div
          className="order-details"
          style={{
            borderBottom: '2px solid #f1f1f1',
            paddingBottom: '20px',
            marginBottom: '20px',
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>Order Summary</h3>
          <div className="order-items">
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: '50px', height: 'auto', marginRight: '15px', borderRadius: '5px' }}
                  />
                  <span style={{ fontWeight: '500', color: '#555' }}>{item.name}</span>
                </div>
                <span style={{ color: '#777' }}>
                  {item.quantity} x ${item.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600' }}>
            <span style={{ color: '#333' }}>Total</span>
            <span style={{ color: '#333' }}>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="delivery-address">
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>Delivery Address</h3>
          <div
            style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '10px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
            }}
          >
            <p style={{ color: '#555', fontSize: '16px', marginBottom: '10px' }}>
              <strong>Name:</strong> {deliveryAddress.shippingName || 'N/A'}
            </p>
            <p style={{ color: '#555', fontSize: '16px', marginBottom: '10px' }}>
              <strong>Street Address:</strong> {deliveryAddress.streetAddress || 'N/A'}
            </p>
            <p style={{ color: '#555', fontSize: '16px', marginBottom: '10px' }}>
              <strong>City:</strong> {deliveryAddress.city || 'N/A'}
            </p>
            <p style={{ color: '#555', fontSize: '16px', marginBottom: '10px' }}>
              <strong>Country:</strong> {deliveryAddress.country || 'N/A'}
            </p>
          </div>
        </div>

        <div className="confirmation" style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            style={{
              textDecorationLine: 'underline',
              color: 'grey',
              padding: '12px 30px',
              borderRadius: '8px',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => window.location.href = '/'}
          >
            Back to Home
          </button> 
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
