import React from 'react'
import { Box, CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  )
}

export default Spinner