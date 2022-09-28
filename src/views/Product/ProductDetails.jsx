import { Container, Paper, Typography } from '@mui/material'
import React from 'react'
import CardProductDetails from '../../components/products/CardProductDetails'

const ProductDetails = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom>
        Detalle de Producto
      </Typography>
      <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
        <CardProductDetails />
      </Paper>
    </Container>
  )
}

export default ProductDetails