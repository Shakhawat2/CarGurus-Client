import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import UserContext from './Context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext>
      <App />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </UserContext>
  </React.StrictMode>
);
