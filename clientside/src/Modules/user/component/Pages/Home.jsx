import React from 'react';
import { Typography, Button, Box, Container, Grid, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import homeImage from './Images/home1.jpeg'; // Path to uploaded image

const Home = () => {
  return (
    <>
      {/* AppBar for top navigation */}
      <AppBar position="static" sx={{ backgroundColor: '#0d47a1' }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          {/* Admin Button - Redirect to /login-admin */}
          <Button
            color="inherit"
            component={Link}
            to="/login-admin"
            sx={{ marginRight: '1rem' }}
          >
            Admin
          </Button>

          {/* User Button */}
          <Button
            color="inherit"
            component={Link}
            to="/user"
          >
            User
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main content of the Home page */}
      <Box
        sx={{
          backgroundColor: '#FFDAB9', // Peach background color
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          color: '#333',
          position: 'relative',
        }}
      >
        <Container sx={{ textAlign: 'center', maxWidth: 'lg' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              {/* Displaying the uploaded image */}
              <img
                src={homeImage}
                alt="Doctor"
                style={{
                  width: '300px', // Adjust the size as per your design
                  borderRadius: '50%',
                  marginBottom: '2rem', // Space below the image
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  color: '#0d47a1',
                  marginBottom: '1rem',
                }}
              >
                Welcome to Jarurat Care
              </Typography>

              <Typography
                variant="h6"
                paragraph
                sx={{
                  color: '#555',
                  fontWeight: '500',
                  marginBottom: '2rem',
                }}
              >
                Your trusted healthcare partner. We provide a range of medical services to ensure your well-being.
              </Typography>

              {/* Buttons */}
              <Box
                sx={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/service"
                  sx={{
                    padding: '1rem 2rem',
                    fontSize: '1.2rem',
                    backgroundColor: '#2196f3',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#1976d2',
                    },
                  }}
                >
                  View Services
                </Button>

                <Button
                  variant="outlined"
                  component={Link}
                  to="/contact"
                  sx={{
                    padding: '1rem 2rem',
                    fontSize: '1.2rem',
                    color: '#ff5722', // Bright orange text color
                    borderColor: '#ff5722', // Border color matching text
                    '&:hover': {
                      backgroundColor: '#ff5722', // Bright orange background on hover
                      color: '#fff', // White text on hover for better contrast
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Additional Section for Featured Services */}
          <Box sx={{ marginTop: '4rem' }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: 'bold', marginBottom: '2rem', color: '#0d47a1' }}
            >
              Our Featured Services
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: '600', marginBottom: '1rem' }}>
                    General Checkup
                  </Typography>
                  <Typography>
                    Comprehensive health evaluations to ensure your well-being.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: '600', marginBottom: '1rem' }}>
                    Emergency Services
                  </Typography>
                  <Typography>
                    Quick and efficient care when you need it most.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: '600', marginBottom: '1rem' }}>
                    Pediatric Care
                  </Typography>
                  <Typography>
                    Specialized care for children of all ages.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
