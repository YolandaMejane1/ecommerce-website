import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';//this payment form is for payment details input and the details are then  stored in redux
import { IoLockClosed } from 'react-icons/io5';
import addPaymentImage from '../assets/CTA.png';
import cardImage from '../assets/Name=card.png';
import { FaCalendarAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setPayment } from '../redux/checkout/checkoutSlice';

const AddPayment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
//this function serves as an input field for the payment details
  const [cardDetails, setCardDetails] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveAsDefault: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
//this submits the form and sends the information to the checkout page 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPayment(cardDetails));
    navigate("/checkout");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 p-4">
      <div className="p-4 bg-light shadow-sm rounded-3 w-full sm:w-[90%] md:w-[75%] lg:w-[500px]" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="text-start mb-4 text-dark fw-light">SELECT A CARD</h2>
        <div className="d-flex flex-column align-items-start w-100 mb-4">
          <div className="d-flex align-items-center mb-2">
            <img
              src={cardImage}
              alt="MasterCard"
              className="w-8 h-8 mr-2"
              style={{
                filter: 'grayscale(100%)',
                opacity: '0.5',
                marginRight: '10px',
              }}
            />
            <span className="text-muted">MasterCard ending in 4742</span>
          </div>
          <div className="d-flex align-items-center">
            <img
              src={cardImage}
              alt="VISA"
              className="w-8 h-8 mr-2"
              style={{
                filter: 'grayscale(100%)',
                opacity: '0.5',
                marginRight: '10px',
              }}
            />
            <span className="text-muted">VISA Debit ending in 2894</span>
          </div>
        </div>
        <h2 className="text-start mb-4 text-dark fw-light">ADD A NEW CARD</h2>
        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <label className="form-label text-muted" htmlFor="cardholderName">Cardholder Name</label>
            <div className="position-relative">
              <input
                type="text"
                id="cardholderName"
                name="cardholderName"
                value={cardDetails.cardholderName}
                onChange={handleChange}
                className="form-control form-control-sm ps-2"
                placeholder="John Maker"
                style={{
                  border: '1px solid white',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                  backgroundColor: 'white',
                  textAlign: 'left',
                }}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label text-muted" htmlFor="cardNumber">Card Number</label>
            <div className="position-relative">
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleChange}
                className="form-control form-control-sm ps-5"
                placeholder="5126-5987-2214-7621"
                style={{
                  border: '1px solid white',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                  backgroundColor: 'white',
                  textAlign: 'left',
                }}
                required
              />
              <img
                src={cardImage}
                alt="Card"
                className="position-absolute"
                style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', opacity: '0.5' }}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="w-48">
              <label className="form-label text-muted" htmlFor="expiryDate">Expiry Date</label>
              <div className="position-relative">
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleChange}
                  className="form-control form-control-sm ps-5"
                  placeholder="MM/YYYY"
                  style={{
                    border: '1px solid white',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'white',
                    textAlign: 'left',
                  }}
                  required
                />
                <FaCalendarAlt
                  className="position-absolute"
                  style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', opacity: '0.5' }}
                />
              </div>
            </div>
            <div className="w-48">
              <label className="form-label text-muted" htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleChange}
                className="form-control form-control-sm"
                placeholder="123"
                style={{
                  border: '1px solid white',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                  backgroundColor: 'white',
                  textAlign: 'left',
                }}
                required
              />
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <input
              type="checkbox"
              id="saveAsDefault"
              name="saveAsDefault"
              checked={cardDetails.saveAsDefault}
              onChange={handleChange}
              className="me-2 peer"
            />
            <label htmlFor="saveAsDefault" className="form-check-label text-muted peer-checked:text-success">Save this as your default payment method</label>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <button
              type="submit"
              className="btn btn-sm w-48 border-0"
            >
              <img
                src={addPaymentImage}
                alt="Secure Payment"
                className="w-100 h-auto"
              />
            </button>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button
              type="button"
              onClick={() => navigate('/checkout')}
              className="btn btn-sm w-48 border-0"
            >
              Back
            </button>
            <div className="d-flex align-items-center">
              <IoLockClosed className="text-success" />
              <span className="text-success ms-2">Secure Connection</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPayment;
