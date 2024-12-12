import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { IoLockClosed } from 'react-icons/io5';
import addPaymentImage from '../assets/CTA.png';

const AddPayment = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Card details:', cardDetails);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 p-4">
      <div className="p-4 bg-light shadow-sm rounded-3" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="text-center mb-4 text-dark fw-medium">SELECT A CARD</h2>

        <div className="d-flex flex-column align-items-center w-100 mb-4">
          <div className="d-flex align-items-center mb-2">
            <FaCcMastercard className="w-8 h-8 mr-2 text-warning" />
            <span className="text-muted">MasterCard ending in 4742</span>
          </div>
          <br />
          <div className="d-flex align-items-center">
            <FaCcVisa className="w-8 h-8 mr-2 text-primary" />
            <span className="text-muted">VISA Debit ending in 2894</span>
          </div>
        </div>

        <h2 className="text-center mb-4 text-dark fw-medium">ADD A NEW CARD</h2>

        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <label className="form-label text-muted" htmlFor="cardholderName">Cardholder Name</label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={cardDetails.cardholderName}
              onChange={handleChange}
              className="form-control form-control-sm text-center"
              placeholder="John Maker"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted" htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleChange}
              className="form-control form-control-sm text-center"
              placeholder="5126-5987-2214-7621"
              required
            />
          </div>

          <div className="d-flex justify-content-between mb-3">
            <div className="w-48">
              <label className="form-label text-muted" htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleChange}
                className="form-control form-control-sm text-center"
                placeholder="MM/YYYY"
                required
              />
            </div>
            <div className="w-48">
              <label className="form-label text-muted" htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleChange}
                className="form-control form-control-sm text-center"
                placeholder="123"
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
              className="me-2"
            />
            <label htmlFor="saveAsDefault" className="form-check-label text-muted">Save this as your default payment method</label>
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