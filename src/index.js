import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importing the App component

// Getting the root element from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
