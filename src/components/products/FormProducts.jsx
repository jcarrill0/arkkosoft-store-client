import React, { useEffect, useState } from 'react'
import { 
  Avatar,
  Box,
  FormControlLabel,
  Grid
} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

import FormBodyProducts from './FormBodyProducts'
import { useNavigate } from 'react-router-dom';
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
  const [file, setFile] = useState("")
  const [info, setInfo] = useState({})
  
  const {addProduct} = useProduct()
  const {getAllCategories, categories} = useCategory();
  const {currentUser} = useAuth()

  const navigate = useNavigate()

  const handleChange = ({target: {name, value}}) => {
    setInfo({
      ...info,
      [name]:value
    })
  }

  const handleSubmit = async (e) => { 
    e.preventDefault();
    let formData = buildFormData()
    let res = await addProduct(formData)
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
 
  useEffect(() => {
    if(currentUser) {
      getAllCategories()
      setLoading(false)
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
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
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
          <FormBodyProducts
            categories={categories}
            loading={loading} 
            handleChange={handleChange} 
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormProducts