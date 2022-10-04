import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Stack, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { useCategory } from '../../context/CategoryContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';

const FormCategories = () => {
  const [info, setInfo] = useState({
    name: "",
    description: ""
  })

  const { id } = useParams()
  
  const {addCategory, updateCategory, getCategory} = useCategory();
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
    let res = null;
    if (!validateForm()) return;
    
    if(!id) {
      res = await addCategory(info)
    } else {
      res = await updateCategory(info)
    }
    
    if(res) {
      navigate('/categories')
    }
  }

  const validateForm = () => {
		if (info.name === "") {
			alert("Debe de escribir un nombre");
			return false;
		}
		if (info.description === "") {
			alert("Debe de escribir una descripción");
			return false;
		}

		return true;
	};

  const loadCategoryEdit = async (id) => { 
    let resultado = await getCategory(id)
    setInfo(resultado)
  }

  useEffect(() => {
    if(currentUser) {
      if(id) loadCategoryEdit(id)
    }
  }, [currentUser])

  //if(loading) return <h1>Loading...</h1>

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            name="name"
            label="Nombre"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            margin="dense"
            value={info.name || ''}
            onChange={e => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            multiline
            name="description"
            id="outlined-textarea"
            label="Descripción"
            //placeholder="Descripción"
            margin="dense"
            rows={4}
            value={info.description || ''}
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
    </Box>
  )
}

export default FormCategories