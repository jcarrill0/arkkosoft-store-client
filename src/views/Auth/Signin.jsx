import React, { useState } from 'react'
import { 
  Avatar, 
  Box, 
  Button, 
  Container,  
  Grid, 
  TextField, 
  Typography 
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const USER_INIT = {
  email:'',
  password:''
}

const Signin = () => {
  const [user, setUser] = useState(USER_INIT)

  const { signin } = useAuth();
  const navigate = useNavigate()

  const handleChange = ({target: {name, value}}) => {
    setUser({
      ...user,
      [name]:value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    let res = await signin(user)
    if(res) {
      setUser(USER_INIT)
      navigate('/')
    }
  };

  const validateForm = () => {
		if (user.email.trim() === "") {
			alert("Debe de escribir un email");
			return false;
		}
		if (user.password === "") {
			alert("Debe de escribir una contraseña");
			return false;
		}

		return true;
	};

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            onChange={ e => handleChange(e) }
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={e => handleChange(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Typography variant="p" sx={{color: "#556cd6"}}>Don't have an account? Sign Up</Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Signin