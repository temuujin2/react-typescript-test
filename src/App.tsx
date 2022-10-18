import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='login-section'>
          <p>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</p>
          <button>НЭВТРЭХ</button>
        </div>
        <div className='logo-shape'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>Boginoo</h1>
        <form>
          <input type="text" placeholder='https://www.web-huudas.mn'></input>
          <button>БОГИНОСГОХ</button>
        </form>
      </header>
    </div>
  );
}

export default App;
