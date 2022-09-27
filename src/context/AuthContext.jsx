import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { storeApi } from '../api-config/axios'

//const IS_AUTH = 'authenticated'
const CURRENT_USER = 'user'
const AUTH_TOKEN = 'token'
const BASE_URL = 'http://localhost:8080/api/v1/'

export const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem(CURRENT_USER)) || null
  );
  const [token, setToken] = useState(localStorage.getItem(AUTH_TOKEN) || null);

  const signin = async (user) => { 

    const res = await storeApi.post("auth/signin", JSON.stringify(user))
    
    if (res.status === 401) {
      alert("El usuario o contraseña son invalidos")
      return false
    }

    const { data: {accessToken, ...restUser}} = res

    setToken(accessToken)
    setCurrentUser(restUser)
    return true
  }

  const signup = async (user) => { 
    console.log(user)
  }

  const logout = () => { 
    setToken(null)
    setCurrentUser(null)
    //localStorage.clear()
  }

  
  const otherValue = {
    signin,
    logout,
    signup,
    currentUser,
    token
  }

  // useMemo nos ayuda a evitar que el objeto se esté contruyendo  
  // o creando cada vez que renderizamos
  const value = useMemo(
    () => ({
      signin,
      logout,
      signup,
      currentUser,
      token
    }),
    [
      signin, 
      logout, 
      signup, 
      currentUser, 
      token,
    ]
  );

  useEffect(() => {
    localStorage.setItem(CURRENT_USER,  JSON.stringify(currentUser));
    localStorage.setItem(AUTH_TOKEN, token);
  }, [currentUser, token])
  

  return (
    <AuthContext.Provider value={otherValue} >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => { 
  const context = useContext(AuthContext)
  if(!context) throw new Error("There is not auth pprovider")
  return context
}