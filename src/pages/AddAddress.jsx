import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import addAdressImage from '../assets/Button (7).png';

const AddAddress = () => {
  const navigate = useNavigate();
  const [addressDetails, setAddressDetails] = useState({
    streetAddress: '',
    city: '',
    postalCode: '',
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
            <label className="form-label text-muted" htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={addressDetails.streetAddress}
              onChange={handleChange}
              className="form-control form-control-sm"
              placeholder="123 Main St"
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
              placeholder="New York"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted" htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={addressDetails.postalCode}
              onChange={handleChange}
              className="form-control form-control-sm"
              placeholder="10001"
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
              placeholder="USA"
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
              className="me-2"
            />
            <label htmlFor="saveAsDefault" className="form-check-label text-muted">Save this as your default address</label>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <button
              type="button"
              onClick={() => navigate('/checkout')}
              className="btn btn-sm w-48 border-0"
            >
              Back
            </button>
            <button type="submit" className="btn btn-success btn-sm w-48 border-0">
              Add Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddress;