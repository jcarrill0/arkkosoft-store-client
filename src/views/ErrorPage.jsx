import React from 'react'
import { Container, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Container id="error-page" maxWidth="sm" sx={{mt: 4}} align="center">
      <Typography variant="h1">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
    </Container>
  )
}

export default ErrorPage