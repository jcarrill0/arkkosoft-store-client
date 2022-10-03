import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './views/Home/Home';
import Product from './views/Product/Product';
import Signin from './views/Auth/Signin';
import ProductDetails from './views/Product/ProductDetails';
import NewProduct from './views/Product/NewProduct';
import EditProduct from './views/Product/EditProduct';
import Category from './views/Category/Category';
import NewCategory from './views/Category/NewCategory';
import ErrorPage from './views/ErrorPage';
import ProtectedRoute from './components/utilities/ProtectedRoute';
import Signup from './views/Auth/Signup';
import Contact from './views/Contact/Contact';
import EditCategory from './views/Category/EditCategory';
// import { AuthProvider } from './context/AuthContext';

export default function App() {

 /*  const history = createBrowserHistory({
    basename: 'arkkosoft-store-client'
  })  */

  return (
    // <AuthProvider>
      <Routes>
        <Route path="/" element={ <ProtectedRoute /> }>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products">
              <Route index element={<Product /> } />
              <Route path="details/:id" element={<ProductDetails />} />
              <Route path="new"
                element={<NewProduct /> }
              />
               <Route path="edit/:id"
                element={<EditProduct /> }
              />
            </Route>
            <Route path="categories">
              <Route index element={<Category /> } />
              <Route path="new"
                element={<NewCategory /> }
              />
              <Route path="edit/:id"
                element={<EditCategory /> }
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
