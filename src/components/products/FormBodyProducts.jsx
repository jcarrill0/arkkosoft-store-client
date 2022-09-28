import React from 'react'
import { 
  Button,
  FormControl,
  Grid, 
  InputLabel, 
  MenuItem, 
  Select, 
  Stack, 
  TextField 
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';


const FormBodyProducts = ({ categories, loading, handleChange }) => {
  const [category, setCategory] = React.useState('');

  const handleSelect = (event) => {
    setCategory(event.target.value);
    handleChange(event)
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          name="model"
          label="Modelo"
          fullWidth
          autoComplete="given-name"
          variant="standard"
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          name="name"
          label="Nombre"
          fullWidth
          autoComplete="family-name"
          variant="standard"
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          required
          name="brand"
          label="Marca"
          fullWidth
          autoComplete="shipping address-level2"
          variant="standard"
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
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl required variant="standard" fullWidth>
          <InputLabel id="category-label">Categoría</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            name='category'
            value={category}
            label="Categoría *"
            onChange={handleSelect}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {loading 
              ? 'loading'
              : categories && 
                categories.map(category => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
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
            AGREGAR
          </Button>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default FormBodyProducts