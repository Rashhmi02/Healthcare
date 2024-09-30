import React from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  return (
    <Box
      sx={{
        backgroundColor: '#fce4ec',  // Soft peach background color
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: '40px',
          maxWidth: '800px',
          borderRadius: '12px',
          backgroundColor: '#ffffff',  // White background for form container
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#d32f2f', // Orange-ish red for heading
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={3}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <form>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  backgroundColor: '#fff3e0', // Light peach background for input fields
                  borderRadius: '4px',
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  backgroundColor: '#fff3e0', // Light peach background for input fields
                  borderRadius: '4px',
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                required
                sx={{
                  backgroundColor: '#fff3e0', // Light peach background for textarea
                  borderRadius: '4px',
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#ff9800', // Orange button
                  color: '#ffffff',
                  marginTop: '20px',
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor: '#fb8c00', // Darker orange on hover
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </Grid>
          {/* Contact Details */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" sx={{ color: '#1976d2', marginBottom: '10px' }}>
                Get in Touch
              </Typography>

              <Box display="flex" alignItems="center" sx={{ marginBottom: '10px' }}>
                <LocationOnIcon sx={{ color: '#1976d2', marginRight: '10px' }} />
                <Typography variant="body1">
                  123 Healthcare St, Wellness City, Country
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" sx={{ marginBottom: '10px' }}>
                <PhoneIcon sx={{ color: '#1976d2', marginRight: '10px' }} />
                <Typography variant="body1">
                  Emergency Contact: +1 (555) 123-4567
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" sx={{ marginBottom: '10px' }}>
                <EmailIcon sx={{ color: '#1976d2', marginRight: '10px' }} />
                <Typography variant="body1">
                  Email: contact@healthcare.org
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ color: '#1976d2', marginTop: '20px' }}>
                Opening Hours
              </Typography>
              <Typography variant="body2">Mon - Fri: 9:00 AM - 6:00 PM</Typography>
              <Typography variant="body2">Sat: 10:00 AM - 2:00 PM</Typography>
              <Typography variant="body2">Sun: Closed</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
