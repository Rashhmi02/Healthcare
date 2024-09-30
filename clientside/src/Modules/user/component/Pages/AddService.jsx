import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import config from '../../../../config';

export default function AddService() {
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically
  const host = config.host;

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const data = { serviceName, description, price }; // Prepare data to send

    Axios.post(`${host}/api/service/serviceInsert`, data)
      .then((res) => {
        if (res.data) {
          alert('Inserted Successfully');
          navigate('/service'); // Redirect to the view service page
        }
      })
      .catch((err) => {
        console.log('Error:' + err);
      });
  };

  const handleViewService = () => {
    navigate('/service'); // Redirect to the view service page
  };

  return (
    <Box
      sx={{ 
        backgroundColor: '#FFDAB9',  // Peach background color
        minHeight: '100vh',          // Full viewport height
        display: 'flex',             // Center the content
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',             // Extra padding for responsiveness
      }}
    >
      <Container 
        maxWidth="sm" 
        sx={{ 
          padding: '30px', 
          backgroundColor: '#ffffff', 
          borderRadius: '12px',    // Softer corners
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',  // Softer shadow for depth
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: '20px' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
            Add New Service
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleViewService}
            sx={{ borderRadius: '20px' }}  // Rounded button
          >
            View Service
          </Button>
        </Grid>
        
        <form onSubmit={onSubmit}>
          <TextField
            fullWidth
            label="Service Name"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            margin="normal"
            required
            sx={{ marginBottom: '16px' }}  // Extra spacing
          />
          <TextField
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
            sx={{ marginBottom: '16px' }}  // Extra spacing
          />
          <TextField
            fullWidth
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            margin="normal"
            required
            sx={{ marginBottom: '20px' }}  // Extra spacing
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ padding: '12px', borderRadius: '30px' }}  // Larger button with rounded edges
          >
            Add Service
          </Button>
        </form>
      </Container>
    </Box>
  );
}
