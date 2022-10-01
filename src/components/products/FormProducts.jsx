import React, { useEffect, useState } from 'react'
import { 
  Avatar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../../context/ProductContext';
import { useAuth } from '../../context/AuthContext';
import { useCategory } from '../../context/CategoryContext';


const InputFile = ({ setFile }) => { 
  return (
    <IconButton color="secondary" aria-label="upload picture" component="label">
      <input hidden accept="image/*" type="file" onChange={(e) => setFile(e.target.files[0])} />
      <CloudUploadOutlinedIcon />
    </IconButton>
  )
}

function FormProducts() {
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState('');
  const [file, setFile] = useState("")
  const [info, setInfo] = useState({})

  const { id } = useParams()
  
  const {addProduct, updateProduct, getProduct, updateProductNotImage} = useProduct()
  const {getAllCategories, categories} = useCategory();
  const {currentUser} = useAuth()

  const navigate = useNavigate()

  const handleChange = ({target: {name, value}}) => {
    setInfo({
      ...info,
      [name]:value
    })
  }

  const handleSelect = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    let res = null;
    let formData = buildFormData()
    if(!id) {
      res = await addProduct(formData)
    } else {
      if(file !== "") {
        res = await updateProduct(formData)
      } else {
        res = await updateProductNotImage(info)
      }
    }
    if(res) {
      navigate('/products')
    }
  }

  const buildFormData = () => {
    const formData = new FormData()
    let product = new Blob([JSON.stringify(info)], {type:'application/json'})
    
    formData.append('imageFile', file)
    formData.append('product', product)

    return formData
  }

  const validateForm = () => {
		/* if (user.email.trim() === "") {
			alert("Debe de escribir un email");
			return false;
		}
		if (user.password === "") {
			alert("Debe de escribir una contraseña");
			return false;
		} */

		return true;
	};

  const loadProductEdit = async (id) => { 
    let resultado = await getProduct(id)
    setInfo(resultado)
    setCategory(resultado.categoryId)
  }
 
  useEffect(() => {
    if(currentUser) {
      getAllCategories()
      setLoading(false)
      if(id) loadProductEdit(id)
    }
  }, [currentUser])
  
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} align="center" sx={{ pt: 10, margin:"auto 0" }}>
          <Avatar
            alt="img product"
            src={
              file
                ? URL.createObjectURL(file)
                : id ? info.image : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            sx={{ width: 150, height: 150 }}
          />
          <FormControlLabel
            label="Subir imagen"
            control={<InputFile setFile={setFile} />}
            sx={{ mt: 3 }}
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="model"
                label="Modelo"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={id ? info.model || '' : info.model}
                onChange={e => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="name"
                label="Nombre"
                fullWidth
                //autoComplete="family-name"
                variant="standard"
                value={id ? info.name || '' : info.name}
                onChange={e => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                name="brand"
                label="Marca"
                fullWidth
                //autoComplete="shipping address-level2"
                variant="standard"
                value={id ? info.brand || '' : info.brand}
                onChange={e => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                name="price"
                label="Precio"
                fullWidth
                variant="standard"
                value={id ? info.price || '' : info.price}
                onChange={e => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl required variant="standard" fullWidth>
                <InputLabel id="category-label">Categoría</InputLabel>
                <Select
                  //labelId="category-label"
                  id="category"
                  name='category'
                  value={category}
                  label="Categoría *"
                  onChange={(e) => handleSelect(e)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {loading 
                    ? 'loading'
                    : categories && 
                      categories.map(item => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))
                    }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Descripción"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                value={id ? info.description || '' : info.description}
                onChange={e => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="center">
                <Button 
                  type="submit"
                  variant="contained" 
                  endIcon={<SendIcon />} 
                  size="large"
                  sx={{padding: ".5rem 2rem"}}
                  >
                {id ? 'ACTUALIZAR' : 'AGREGAR'}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormProducts