import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserProvider} from './context'

ReactDOM.render(
  //App becomes a children od UserProvider
  <UserProvider>
  <App />
  </UserProvider>,
    
  
  document.getElementById('root')
);

reportWebVitals();
