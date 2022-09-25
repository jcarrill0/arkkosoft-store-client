import React, { useState } from 'react'
import { 
  Avatar,
  Box,
  FormControlLabel,
  Grid
} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

import FormBodyProducts from './FormBodyProducts'


const InputFile = ({ setFile }) => { 
  return (
    <IconButton color="secondary" aria-label="upload picture" component="label">
      <input hidden accept="image/*" type="file" onChange={(e) => setFile(e.target.files[0])} />
      <CloudUploadOutlinedIcon />
    </IconButton>
  )
}

function FormProducts() {
  const [file, setFile] = useState("");

  return (
    // <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}></Box>
    <Box component="form" sx={{ mt: 1 }}>
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
          <FormBodyProducts setFile={setFile} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormProducts