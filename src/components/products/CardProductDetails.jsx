import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useProduct } from '../../context/ProductContext';
import { useCategory } from '../../context/CategoryContext';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const CardProductDetails = () => {
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState({});
  const [product, setProduct] = useState({})
  
  const { id } = useParams()

  const {getProduct} = useProduct()
  const {getCategory} = useCategory();
  const {currentUser} = useAuth()

  const loadProductShow = async (id) => { 
    let resultado = await getProduct(id)
    setProduct(resultado)
    let categResult = await getCategory(resultado.categoryId)
    setCategory(categResult)
  }

  useEffect(() => {
    if(currentUser) {
      loadProductShow(id)
      setLoading(false)
    }
  }, [currentUser])

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 360, height: 360}}
        image={product.image}
        alt={product.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{fontWeight: 400}}>
            {product.description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Cod. {product.model}  
          </Typography>
          <Typography variant="subtitle1" color="text.primary" component="div" sx={{fontWeight: 400, fontSize: '1.2rem', mt: '.8rem'}}>
          Precio: $ {product.price}  
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
    </Card>
  )
}

export default CardProductDetails