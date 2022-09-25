import { Box, Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

function Layout() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box component="main" sx={{ mt: 3}}>
          <Outlet />
        </Box>
      </Container>
    </>
  )
}

export default Layout