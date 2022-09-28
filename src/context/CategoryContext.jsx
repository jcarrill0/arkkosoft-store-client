import { createContext, useContext, useMemo, useState } from 'react'
import { storeApi } from '../api-config/axios'
import { useAuth } from './AuthContext';

export const CategoryContext = createContext()

export function CategoryProvider ({ children }) {
  //const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState(null);
  const { token } = useAuth()

  const headerWithToken = () => {
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  }

  const addCategory = async (category) => { 
    const opts = headerWithToken()
    const res = await storeApi.post('categories', JSON.stringify(category), opts)

    return (res.status >= 400) ? false : true
  }

  const getAllCategories = async () => { 
    const opts = headerWithToken()
    const {data:{categories}} = await storeApi.get('categories', opts)
    setCategories(categories)
    //setLoading(false)
  }

  const getCategory = async (id) => { 
    const res = await storeApi.get(`categories/${id}`)
  }

  const deleteCategory = async (id) => { 
    const res = await storeApi.delete(`categories/${id}`)
  }

  const updateCategory = async (id) => { 
    const res = await storeApi.patch(`categories/${id}`)
  }

  const otherValue = {
    categories,
    getAllCategories,
    addCategory,
    setCategories,
  }

  // useMemo nos ayuda a evitar que el objeto se esté contruyendo  
  // o creando cada vez que renderizamos
  const value = useMemo(
    () => ({
        categories,
        getAllCategories,
        addCategory,
        setCategories,
    }),
    []
  );

  /* useEffect(() => {
  }, []) */
  

  return (
    <CategoryContext.Provider value={otherValue} >
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategory = () => { 
  const context = useContext(CategoryContext)
  if(!context) throw new Error("There is not auth pprovider")
  return context
}