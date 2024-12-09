import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip } from 'bootstrap';
import appIcon from '../assets/Icon.png';
import logoIcon from '../assets/Logo.png';
import storeIcon from '../assets/Store.png';
import bagIcon from '../assets/Bag.png';
import navLinkIcon from '../assets/Nav-Link.png';

const Sidebar = () => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div className="d-flex flex-column flex-shrink-0 bg-body-tertiary" style={{ width: '2.5rem' }}>
      <a
        href="/"
        className="d-block p-3 link-body-emphasis text-decoration-none"
        title="Icon"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
      >
        <img src={logoIcon} alt="Logo" style={{ width: '32px', height: '32px' }} />
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            title="App"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <img src={appIcon} alt="App" style={{ width: '24px', height: '24px' }} />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            title="Store"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <img src={storeIcon} alt="Store" style={{ width: '24px', height: '24px' }} />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            title="Bag"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <img src={bagIcon} alt="Bag" style={{ width: '24px', height: '24px' }} />
          </a>
        </li>
      </ul>
      <div className="mt-auto text-center">
        <a
          href="#"
          className="nav-link py-3 border-bottom rounded-0"
          title="Navigation"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <img src={navLinkIcon} alt="Navigation" style={{ width: '24px', height: '24px' }} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
