import { Container, Grid } from '@mui/material';
import React from 'react'
import CCard from '../utilities/CCard';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const AlbumProducts = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {cards.map((card) => (
          <CCard card={card} />
        ))}
      </Grid>
    </Container>
  )
}

export default AlbumProducts