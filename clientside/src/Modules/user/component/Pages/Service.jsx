import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Axios from 'axios';
import config from '../../../../config';
import { useNavigate } from 'react-router-dom';

export default function Service() {
  const host = config.host;
  const navigate = useNavigate();
  const [serviceList, setServiceList] = useState([]);
  const [serviceDeleted, setServiceDeleted] = useState(false);
  const [error, setError] = useState(null); // State for error messages

  useEffect(() => {
    Axios.get(`${host}/api/service/getService`)
      .then((res) => {
        if (res.data) {
          setServiceList(res.data);
        }
      })
      .catch((err) => {
        console.log('Error fetching services:', err);
        setError('Error fetching services. Please try again.');
      });
  }, [serviceDeleted, host]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this service?');
    if (confirmDelete) {
      Axios.delete(`${host}/api/service/deleteService/${id}`)
        .then((res) => {
          if (res.data) {
            alert('Service Deleted Successfully');
            setServiceDeleted(!serviceDeleted);
          }
        })
        .catch((err) => {
          console.log('Error deleting service:', err);
          setError('Error deleting service. Please try again.');
        });
    }
  };

  const handleEdit = (id) => {
    navigate(`/editService/${id}`);
  };

  const handleAddService = () => {
    navigate('/addService');
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ 
        backgroundColor: '#ffe6e6',  // Light peach/pink background color
        padding: '40px 0',
      }}
    >
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center" 
        width="80%" 
        mt={4}
        mb={2}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
          Service List
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleAddService}
          sx={{ borderRadius: '20px', textTransform: 'none' }} // Rounded button with no text transformation
        >
          Add Service
        </Button>
      </Box>

      {error && <Typography color="error">{error}</Typography>} {/* Display error messages */}

      <Box width="80%">
        <TableContainer 
          component={Paper} 
          sx={{ 
            backgroundColor: 'white', 
            borderRadius: '12px',  // Rounded corners for the table
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Soft shadow for elevation
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="service table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', backgroundColor: '#1976d2', color: 'white' }}>Service Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', backgroundColor: '#1976d2', color: 'white' }}>Description</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', backgroundColor: '#1976d2', color: 'white' }} align="right">Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', backgroundColor: '#1976d2', color: 'white' }} align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {serviceList.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    <Typography>No services available</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                serviceList.map((service, index) => (
                  <TableRow
                    key={service._id}
                    sx={{
                      backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff',  // Alternating row colors for clarity
                      '&:hover': { backgroundColor: '#f1f1f1' },  // Hover effect for rows
                    }}
                  >
                    <TableCell>{service.serviceName}</TableCell>
                    <TableCell>{service.description}</TableCell>
                    <TableCell align="right">{service.price}</TableCell>
                    <TableCell align="right">
                      <IconButton 
                        onClick={() => handleEdit(service._id)} 
                        aria-label="edit"
                        sx={{ color: '#1976d2' }}  // Custom color for edit icon
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton 
                        onClick={() => handleDelete(service._id)} 
                        aria-label="delete"
                        sx={{ color: 'red' }}  // Custom color for delete icon
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
