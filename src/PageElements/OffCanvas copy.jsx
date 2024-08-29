import React, { useState } from 'react';
import './OffCanvascopy.css'; // Ensure this path is correct for your CSS file

function OffCanvas() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
        
        <div className="offcanvas-body">
          <ul className="menu-list">
            <li className="menu-item"><a href="#">Item 1</a></li>
            <li className="menu-item"><a href="#">Item 2</a></li>
            <li className="menu-item"><a href="#">Item 3</a></li>
            <li className="menu-item"><a href="#">Item 4</a></li>
          </ul>
        </div>
      </div>
      
      <button className="offcanvas-toggle" onClick={toggleOffCanvas}>
        &#9776;
      </button>
      
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleOffCanvas}></div>
    </div>
  );
}

export default OffCanvas;
