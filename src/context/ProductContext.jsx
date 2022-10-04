import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { addProductApi, storeApi } from '../api/config'
import { useAuth } from './AuthContext';

export const ProductContext = createContext()

export function ProductProvider ({ children }) {
  //const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);
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
    const opts = headerWithToken()
    const {data:{product}} = await storeApi.get(`products/${id}`, opts)
    return product;
  }

  const deleteProduct = async (id) => { 
    const opts = headerWithToken()
    await storeApi.delete(`products/${id}`, opts)
    setProducts(products.filter(item => item.id !== id))
  }

  const updateProduct = async (data) => { 
    const opts = headerWithToken()
    const res = await storeApi.put('products', data, opts)
    
    if(res.status >= 400) return false;

    return true;
  }

  const updateProductNotImage = async (data) => { 
    const opts = headerWithToken()
    const res = await storeApi.put('products/not_img', JSON.stringify(data), opts)
    
    if(res.status >= 400) return false;

    return true;
  }

  const otherValue = {
    products,
    getAllProducts,
    addProduct,
    setProducts,
    updateProduct,
    deleteProduct,
    getProduct,
    updateProductNotImage
  }

  // useMemo nos ayuda a evitar que el objeto se esté contruyendo  
  // o creando cada vez que renderizamos
  const value = useMemo(
    () => ({
      products,
      getAllProducts,
      addProduct,
      setProducts,
      updateProduct,
      deleteProduct,
      getProduct
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