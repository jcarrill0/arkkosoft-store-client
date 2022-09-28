import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import AlbumProducts from '../components/products/AlbumProducts'
import { useProduct } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';

const Home = () => {

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