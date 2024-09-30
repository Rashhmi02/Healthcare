import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import Axios from 'axios';
import config from '../../../../config';

export default function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();
  const host = config.host;
  const [serviceData, setServiceData] = useState({});
  const [error, setError] = useState(null); // State for error messages

  useEffect(() => {
    Axios.get(`${host}/api/service/getService/${id}`)  // Corrected template literal
      .then((res) => {
        if (res.data) {
          setServiceData(res.data);
        }
      })
      .catch((err) => {
        console.log('Error fetching service data:', err);
        
      });
  }, [id, host]);
  useEffect(() => {
    Axios.get(`${host}/api/service/getSingleService/${id}`)
      .then((res) => {
        if (res.data) {
          setServiceData({
            serviceName: res.data.serviceName,
            description: res.data.description,
            price: res.data.price,
          });
        }
      })
      .catch((err) => {
        console.log("Error fetching service data:", err);
        
      });
  }, [id]);
  

  const handleChange = (e) => {
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    // Basic validation
    if (!serviceData.serviceName || !serviceData.description || !serviceData.price) {
      setError('All fields are required');
      return;
    }
    
    Axios.put(`${host}/api/service/updateService/${id}`, serviceData) // Corrected template literal
      .then((res) => {
        if (res.data) {
          alert('Service Updated Successfully');
          navigate('/service');
        }
      })
      .catch((err) => {
        console.log('Error updating service data:', err);
        
      });
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: 'lightgrey' }}
    >
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" gutterBottom>
          Edit Service
        </Typography>
        {error && <Typography color="error">{error}</Typography>} {/* Display error messages */}
        <Box
          height={400}
          width={400}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={2}
          sx={{ backgroundColor: 'white', borderRadius: 1 }}
        >
          <TextField
            label="Service Name"
            name="serviceName"
            variant="outlined"
            value={serviceData.serviceName || ''}
            onChange={handleChange}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            value={serviceData.description || ''}
            onChange={handleChange}
            multiline
            rows={4}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            variant="outlined"
            value={serviceData.price || ''}
            onChange={handleChange}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          <Button variant="contained" onClick={onSubmit}>
            Update Service
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
