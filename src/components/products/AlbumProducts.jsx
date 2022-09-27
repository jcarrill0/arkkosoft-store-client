import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useProduct } from '../../context/ProductContext';
import CCard from '../utilities/CCard';

const AlbumProducts = () => {
  const { products } = useProduct()

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {products.map((product) => (
          <CCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  )
}

export default AlbumProducts