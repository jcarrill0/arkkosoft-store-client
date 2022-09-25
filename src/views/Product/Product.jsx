import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DataTable from '../../components/datatable/DataTable'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent:'space-between', margin: '.2rem 1.5rem 1rem'}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Productos
        </Typography>
        <Link to="new" style={{ textDecoration: "none" }}>
          <Button color='success' variant="outlined" startIcon={<AddShoppingCartIcon />}>
            Agregar 
          </Button>
        </Link>
      </Box>
      <DataTable />
    </> 
  )
}

export default Product