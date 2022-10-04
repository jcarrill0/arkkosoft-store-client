import { createContext, useContext, useMemo, useState } from 'react'
import { storeApi } from '../api/config'
import { useAuth } from './AuthContext';

export const CategoryContext = createContext()

export function CategoryProvider ({ children }) {
  //const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([]);
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
    const opts = headerWithToken()
    const {data:{category}} = await storeApi.get(`categories/${id}`, opts)
    const {products, ...restCategory} = category

    return restCategory;

  }

  const deleteCategory = async (id) => { 
    const opts = headerWithToken()
    await storeApi.delete(`categories/${id}`, opts)
    setCategories(categories.filter(item => item.id !== id))
    return true;
  }

  const updateCategory = async (category) => { 
    const opts = headerWithToken()
    const res = await storeApi.put('categories', JSON.stringify(category), opts)
    if(res.status >= 400) return false;

    return true;
  }

  const otherValue = {
    categories,
    getAllCategories,
    addCategory,
    setCategories,
    getCategory,
    updateCategory,
    deleteCategory
  }

  // useMemo nos ayuda a evitar que el objeto se esté contruyendo  
  // o creando cada vez que renderizamos
  const value = useMemo(
    () => ({
        categories,
        getAllCategories,
        addCategory,
        setCategories,
        getCategory,
        updateCategory,
        deleteCategory
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