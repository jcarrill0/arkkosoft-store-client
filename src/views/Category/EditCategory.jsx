import { Container, Paper, Typography } from '@mui/material'
import React from 'react'
import FormCategories from '../../components/categories/FormCategories'

const EditCategory = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Editar Categoría
      </Typography>
      <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
        <FormCategories />
      </Paper>
    </Container>
  )
}

export default EditCategory