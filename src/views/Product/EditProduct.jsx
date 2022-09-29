import { Container, Paper, Typography } from '@mui/material'
import React from 'react'
import FormProducts from '../../components/products/FormProducts'

function EditProduct() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom>
        Editar Producto
      </Typography>
      <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
        <FormProducts />
      </Paper>
    </Container>
  )
}

export default EditProduct