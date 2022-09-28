import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { useProduct } from '../../context/ProductContext';
import CCard from './CCard';

const AlbumProducts = () => {
  const [loading, setLoading] = useState(true)
  const {getAllProducts, products} = useProduct();
  const {currentUser} = useAuth()
  
  useEffect(() => {
    if(currentUser) {
      getAllProducts()
      setLoading(false)
    }
  }, [currentUser])

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        { loading ? "loading"
        : products && products.map((product) => (
          <CCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  )
}

export default AlbumProducts