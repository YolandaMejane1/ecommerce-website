import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip } from 'bootstrap';
import { Link, useLocation } from 'react-router-dom';
import appIcon from '../assets/Icon.png';
import logoIcon from '../assets/Logo.png';
import storeIcon from '../assets/Store-logo.png';
import bagIcon from '../assets/Bag.png';
import navLinkIcon from '../assets/Nav-Link.png';

const Sidebar = () => {
  const location = useLocation();

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl);
    });
  }, []);

  const activeIconStyle = {
    border: '1px solid black',
    borderRadius: '20%',
    padding: '3px',
    margin: 'auto',
    backgroundColor: '#000',
  };

  const activeIconImageStyle = {
    filter: 'invert(1)', 
    width: '24px',
    height: '24px',
  };

  const normalIconStyle = {
    width: '26px',
    height: '26px',
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 bg-body-tertiary" style={{ width: '2.8rem', marginRight: '20px', height: '100vh' }}>
      <div
        className="d-block p-3 link-body-emphasis text-decoration-none"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
      >
        <img src={logoIcon} alt="Logo" style={{ width: '26px', height: '26px' }} />
      </div>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <div
            className="nav-link py-3"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <img
              src={appIcon}
              alt="App"
              style={normalIconStyle}
            />
          </div>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link py-3"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <div style={location.pathname === '/' ? activeIconStyle : null}>
              <img
                src={storeIcon}
                alt="Store"
                style={location.pathname === '/' ? activeIconImageStyle : normalIconStyle}
              />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/bag"
            className="nav-link py-3"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <div style={location.pathname === '/bag' ? activeIconStyle : null}>
              <img
                src={bagIcon}
                alt="Bag"
                style={location.pathname === '/bag' ? activeIconImageStyle : normalIconStyle}
              />
            </div>
          </Link>
        </li>
      </ul>
      <div className="mt-auto text-center">
        <a
          href="#"
          className="nav-link py-3 border-bottom rounded-0"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <img src={navLinkIcon} alt="Navigation" style={{ width: '26px', height: '26px' }} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;