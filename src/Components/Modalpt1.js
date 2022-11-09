import React from 'react';

// import Modalpt1 from './Modalpt1.css';


 function Modalpt1({ setModalOpen }) {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Are You Sure You Want to Continue?</h1>
          </div>
          <div className="body">
            <p>The next page looks amazing. Hope you want to go there!</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button>Continue</button>
            <Modalpt1 />
          </div>
        </div>
      </div>
    );
  }

export default Modalpt1;