import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './views/Home';
import Product from './views/Product/Product';
import Signin from './views/auth/Signin';
import ProductDetails from './views/Product/ProductDetails';
import NewProduct from './views/Product/NewProduct';
import CategoryDetails from './views/Category/CategoryDetails';
import Category from './views/Category/Category';
import NewCategory from './views/Category/NewCategory';
import ErrorPage from './views/ErrorPage';
import ProtectedRoute from './components/utilities/ProtectedRoute';
import Signup from './views/auth/Signup.jsx';
import Contact from './views/Contact';
// import { AuthProvider } from './context/AuthContext';

export default function App() {
  
  return (
    // <AuthProvider>
      <Routes>
        <Route path="/" element={ <ProtectedRoute /> }>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products">
              <Route index element={<Product /> } />
              <Route path="details/:productId" element={<ProductDetails />} />
              <Route path="new"
                element={<NewProduct /> }
              />
            </Route>
            <Route path="categories">
              <Route index element={<Category /> } />
              <Route path=":categoryId" element={<CategoryDetails />} />
              <Route path="new"
                element={<NewCategory /> }
              />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path='*' element={ <ErrorPage /> }/>
          </Route>
        </Route>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    // </AuthProvider>
  );
}
