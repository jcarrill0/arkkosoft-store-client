import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { addProductApi, storeApi } from '../api-config/axios'
import { useAuth } from './AuthContext';

export const ProductContext = createContext()

export function ProductProvider ({ children }) {
  //const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState(null);
  const { token } = useAuth()


  const headerWithToken = () => {
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  }

  const addProduct = async (data) => {
    const opts = headerWithToken()
    const res = await addProductApi.post('products', data, opts)

    if(res.status >= 400) return false;

    return true;
  }

  const getAllProducts = async () => { 
    const opts = headerWithToken()

    const {data:{products}} = await storeApi.get('products', opts)
    setProducts(products)
    //setLoading(false)
  }

  const getProduct = async (id) => { 
    const res = await storeApi.get(`products/${id}`)
  }

  const deleteProduct = async (id) => { 
    const res = await storeApi.delete(`products/${id}`)
  }

  const updateProduct = async (id) => { 
    const res = await storeApi.patch(`products/${id}`)
  }

  const otherValue = {
    products,
    getAllProducts,
    addProduct,
    setProducts
  }

  // useMemo nos ayuda a evitar que el objeto se esté contruyendo  
  // o creando cada vez que renderizamos
  const value = useMemo(
    () => ({
      products,
      getAllProducts,
      addProduct,
      setProducts
    }),
    [getAllProducts, addProduct]
  );

  /* useEffect(() => {
  }, []) */
  

  return (
    <ProductContext.Provider value={otherValue} >
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => { 
  const context = useContext(ProductContext)
  if(!context) throw new Error("There is not auth pprovider")
  return context
}