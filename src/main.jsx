import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import myRouter from './Router';

import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'primeicons/primeicons.css';
import"primeflex/primeflex.css"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouter}/>
  </StrictMode>
)
