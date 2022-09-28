import React from 'react'
import { Container, Paper, Typography } from '@mui/material'
import FormProducts from '../../components/products/FormProducts'

const NewProduct = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom>
        Agregar Nuevo Producto
      </Typography>
      <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
        <FormProducts />
      </Paper>
    </Container>
  )
}

export default NewProduct