import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import DataTable from '../../components/datatable/DataTable'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

import { useProduct } from '../../context/ProductContext';
import { useAuth } from '../../context/AuthContext';


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