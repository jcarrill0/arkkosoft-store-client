import React from 'react'
import { Box, Typography } from '@mui/material'
import AlbumProducts from '../components/products/AlbumProducts'

const Home = () => {
  return (
    <Box component="main" sx={{ my: 4}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Album de productos
      </Typography>
      <AlbumProducts />
    </Box> 
  )
}

export default Home