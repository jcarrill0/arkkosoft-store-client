import { Avatar, Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ minWidth: 275 }} textAlign="center">
        <Card variant="outlined">
          <Stack direction="row"  justifyContent="center" alignItems="center" sx={{mt: "1.3rem"}}>
            <Avatar
              alt="jcarrillo"
              src="https://res.cloudinary.com/dx50afln8/image/upload/v1664428936/yo_xfidp5.jpg"
              sx={{ width: 180, height: 180 }}
            />
          </Stack>
          <CardContent>
            <Typography variant="h5" component="div">
              JOSE CARRILLO BERMUDEZ
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Full Stack Developer
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              josecarrillo8@gmail.com | +(506) 7298 6272
            </Typography>
            <Typography variant="body2">
              Programo para crear soluciones.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
    
  )
}

export default Contact