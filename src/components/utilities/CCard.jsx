import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CCard = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography>
            {product.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent:'flex-end' }}
        > 
          <Link to={`products/details/${product.id}`} style={{ textDecoration: "none" }}>
            <Button size="small">Ver Detalle</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CCard