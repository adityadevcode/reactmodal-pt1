

import {useState} from 'react';
import "./App.css";
import Modalpt1 from './Components/Modalpt1';

 function App() {
  const [modalOpen, setModalOpen] =useState(false);
  
  return (
    <div className="App">
      <h2>App component</h2>
      <h3>Hey, click on the button to open the modal.</h3>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
      {modalOpen && <Modalpt1 setModalOpen={setModalOpen} />}

    </div>
  );
}

export default App;