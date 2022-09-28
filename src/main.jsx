import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CategoryProvider } from './context/CategoryContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ProductProvider>
          <CategoryProvider>
            <BrowserRouter>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
                <App />
            </BrowserRouter>
          </CategoryProvider>
        </ProductProvider>
      </AuthProvider>
    </ThemeProvider>
    ,
  </React.StrictMode>,
);
