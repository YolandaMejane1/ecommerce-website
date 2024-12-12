import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import addAdressImage from '../assets/Button (7).png';
import { IoLockClosed } from 'react-icons/io5';

const AddAddress = () => {
  const navigate = useNavigate();
  const [addressDetails, setAddressDetails] = useState({
    shippingName: '',
    streetAddress: '',
    city: '',
    stateProvince: '',
    country: '',
    saveAsDefault: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddressDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Address details:', addressDetails);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 p-4">
      <div className="p-4 bg-light shadow-sm rounded-3" style={{ width: '100%', maxWidth: '500px' }}>
        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <label className="form-label text-muted" htmlFor="shippingName">Shipping Name</label>
            <input
              type="text"
              id="shippingName"
              name="shippingName"
              value={addressDetails.shippingName}
              onChange={handleChange}
              className="form-control form-control-sm"
              placeholder="John Maker"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted" htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={addressDetails.streetAddress}
              onChange={handleChange}
              className="form-control form-control-sm"
              placeholder="123 Plae Grond Street"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted" htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={addressDetails.city}
              onChange={handleChange}
              className="form-control form-control-sm"
              placeholder="Vermont"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted" htmlFor="stateProvince">State/Province</label>
            <input
              type="text"
              id="stateProvince"
              name="stateProvince"
              value={addressDetails.stateProvince}
              onChange={handleChange}
              className="form-control form-control-sm"
              placeholder="California"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted" htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={addressDetails.country}
              onChange={handleChange}
              className="form-control form-control-sm"
              placeholder="United States of America"
              required
            />
          </div>

          <div className="d-flex align-items-center mb-4">
            <input
              type="checkbox"
              id="saveAsDefault"
              name="saveAsDefault"
              checked={addressDetails.saveAsDefault}
              onChange={handleChange}
              className={`me-2 custom-checkbox ${addressDetails.saveAsDefault ? 'checked' : ''}`}
            />
            <label htmlFor="saveAsDefault" className="form-check-label text-muted">Save this as your default address</label>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-sm w-100 border-0">
              <img src={addAdressImage} alt="Add Address" className="w-100" />
            </button>
          </div>
        </form>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            type="button"
            onClick={() => navigate('/checkout')}
            className="btn btn-sm w-48 border-0"
            style={{ fontSize: '0.875rem' }}
          >
            Back
          </button>
          <div className="d-flex align-items-center" style={{ fontSize: '0.875rem' }}>
            <IoLockClosed className="text-success" />
            <span className="text-success ms-2">Secure Connection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;