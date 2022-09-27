import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import AlbumProducts from '../components/products/AlbumProducts'
import { useProduct } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const {getAllProducts} = useProduct();
  const {currentUser} = useAuth()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if(currentUser) {
      getAllProducts()
      setLoading(false)
    }
  }, [currentUser])

  if(loading) return <h1>Loading...</h1>

  return (
    <Box component="main" sx={{ my: 4}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Catálogo de productos
      </Typography>
      <AlbumProducts />
    </Box> 
  )
}

export default Home