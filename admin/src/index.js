import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdmincontextProvider from './context/Admincontext';
import DoctorcontextProvider from './context/Doctorcontext';
import AppcontextProvider from './context/Appcontext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AdmincontextProvider>
      <DoctorcontextProvider>
        <AppcontextProvider>
          <App />
        </AppcontextProvider>
      </DoctorcontextProvider>
    </AdmincontextProvider>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
