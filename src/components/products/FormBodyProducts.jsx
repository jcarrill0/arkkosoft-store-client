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

const FormBodyProducts = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="model"
          name="model"
          label="Modelo"
          fullWidth
          autoComplete="given-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="nombre"
          name="nombre"
          label="Nombre"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="brand"
          name="brand"
          label="Marca"
          fullWidth
          autoComplete="shipping address-level2"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="price"
          name="price"
          label="Precio"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl required variant="standard" fullWidth>
          <InputLabel id="category-label">Categoría</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={age}
            label="Categoría *"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
        />
      </Grid>
      <Grid item xs={12}>
      <Stack direction="row" justifyContent="center">
        <Button 
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