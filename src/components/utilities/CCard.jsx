import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CCard = ({ card }) => {
  return (
    <Grid item key={card} xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent:'flex-end' }}
        > 
          <Link to={`products/details/${card}`} style={{ textDecoration: "none" }}>
            <Button size="small">Ver Detalle</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CCard