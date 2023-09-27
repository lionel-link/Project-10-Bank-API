import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import User from './Components/User/User';

const router = createBrowserRouter([
  {path: '/', element:<Layout><Home/></Layout>},
  { path: '/sign-in', element:<Layout><Login/></Layout>},
  { path: '/user', element:<Layout><User/></Layout>},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
