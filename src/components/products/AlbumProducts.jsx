import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { useProduct } from '../../context/ProductContext';
import CCard from './CCard';
import { useIsLoading } from '../../hooks/useIsLoading';
import Spinner from '../utilities/Spinner';

const AlbumProducts = () => {
  const { isLoading } = useIsLoading()
  const {getAllProducts, products} = useProduct();
  const {currentUser} = useAuth()
  
  useEffect(() => {
    if(currentUser) {
      getAllProducts()
    }
  }, [currentUser])

  return (
    <Container sx={{ py: 8, display: 'flex', justifyContent: 'center', alignItems: 'center'}} maxWidth="md">
     {isLoading 
      ? <Spinner />
      : <Grid container spacing={4}> 
          { products && products.map((product) => (
            <CCard key={product.id} product={product} />
          ))}
        </Grid>
     }
    </Container>
  )
}

export default AlbumProducts