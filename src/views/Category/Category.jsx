import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { Link } from 'react-router-dom'
import DataTableCategories from '../../components/datatable/DataTableCategories'

const Category = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent:'space-between', margin: '.2rem 1.5rem 1rem'}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lista de Categorías
        </Typography>
        <Link to="new" style={{ textDecoration: "none" }}>
          <Button color='success' variant="outlined" startIcon={<BookmarkAddIcon />}>
            Agregar 
          </Button>
        </Link>
      </Box>
      <DataTableCategories />
    </> 
  )
}

export default Category