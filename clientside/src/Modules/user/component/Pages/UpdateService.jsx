
// import React, { useState } from 'react';
// import { Box, Paper, Grid, TextField, Button, IconButton, Snackbar, Alert, Card, CardContent } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { Link , useNavigate } from 'react-router-dom';
// import Axios from 'axios';
// import config from '../../../../config';

// export default function UpdateService() {
//     const host = config.host;
//     const navigate = useNavigate();
//     const [serviceDetails, setServiceDetails] = useState({
//         serviceName: '',
//         description: '',
//         price: ''
        
//     });
//     const [open, setOpen] = useState(false);
//     const [errors, setErrors] = useState({});

//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }
//         setOpen(false);
//     };

//     const handleServiceDetails = (e) => {
//         setServiceDetails({ ...serviceDetails, [e.target.name]: e.target.value });
//         setErrors((prev) => ({
//             ...prev,
//             [e.target.name]: ""
//         }));
//     }

//     const validateForm = () => {
//         const newErrors = {};
//         let isValid = true;

//         if (!serviceDetails.serviceName) {
//             newErrors.serviceName = 'service name is required';
//             isValid = false;
//         }
//         if (!serviceDetails.description) {
//             newErrors.description = 'Description is required';
//             isValid = false;
//         }
//         if (!serviceDetails.price) {
//             newErrors.price = 'Price is required';
//             isValid = false;
//         }
       

//         setErrors(newErrors);
//         return isValid;
//     };

//     const handleSubmit = () => {
//         if (!validateForm()) {
//             return;
//         }

//         Axios.post(`${host}/api/service/serviceInsert`, serviceDetails)
//             .then((res) => {
//                 if (res.data) {
//                     setOpen(true);
//                     setServiceDetails({
//                         serviceName: '',
//                         description: '',
//                         price: ''
//                     });
//                 } else {
//                     console.log("some error occurred");
//                 }
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     return (
//         <div style={{ height: '100%', backgroundColor: '#ffe5b4', padding: '20px' }}>
//             <Paper>
//                 <Box sx={{ backgroundColor: '#f0f1f6', padding: '2px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <p style={{ color: 'rgb(82, 95, 127)', fontWeight: '400', fontSize: '15px' }}>Insert Service Details</p>
//                     <Link to='/service'><Button size='small' endIcon={<ArrowForwardIosIcon />}>View Service</Button></Link>
//                 </Box>

//                 <Card variant="outlined" sx={{ margin: '20px', padding: '20px', backgroundColor: '#ffdab9' }}>
//                     <CardContent>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     id="outlined-basic"
//                                     label="Service Name"
//                                     name='serviceName'
//                                     value={serviceDetails.serviceName}
//                                     onChange={handleServiceDetails}
//                                     variant="outlined"
//                                     size="small"
//                                     fullWidth
//                                     error={!!errors.serviceName}
//                                     helperText={errors.serviceName}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     id="outlined-basic"
//                                     label="Description"
//                                     name='description'
//                                     value={serviceDetails.description}
//                                     onChange={handleServiceDetails}
//                                     variant="outlined"
//                                     size="small"
//                                     fullWidth
//                                     error={!!errors.description}
//                                     helperText={errors.description}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     id="outlined-basic"
//                                     label="Price"
//                                     name='price'
//                                     value={serviceDetails.price}
//                                     onChange={handleServiceDetails}
//                                     variant="outlined"
//                                     size="small"
//                                     fullWidth
//                                     error={!!errors.price}
//                                     helperText={errors.price}
//                                 />
//                             </Grid>
                           
//                         </Grid>

//                         <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//                             <Box sx={{ p: 3, width: '400px' }}>
//                                 <Button variant='contained' color='primary' fullWidth onClick={handleSubmit}>Submit</Button>
//                             </Box>
//                         </Box>
//                     </CardContent>
//                 </Card>
//             </Paper>

//             <Snackbar
//                 open={open}
//                 autoHideDuration={4000}
//                 onClose={handleClose}
//                 anchorOrigin={{ vertical: "top", horizontal: "right" }}
//             >
//                 <Alert
//                     onClose={handleClose}
//                     severity="success"
//                     variant="filled"
//                     sx={{ width: "100%" }}
//                 >
//                     Service Inserted!
//                 </Alert>
//             </Snackbar>
//         </div>
//     );
// }


import React, { useState } from 'react';
import { Box, Paper, Grid, TextField, Button, IconButton, Snackbar, Alert, Card, CardContent } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link , useNavigate } from 'react-router-dom';
import Axios from 'axios';
import config from '../../../../config';

export default function UpdateService() {
    const host = config.host;
    const navigate = useNavigate();
    const [serviceDetails, setServiceDetails] = useState({
        serviceName: '',
        description: '',
        price: ''
    });
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState({});

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleServiceDetails = (e) => {
        setServiceDetails({ ...serviceDetails, [e.target.name]: e.target.value });
        setErrors((prev) => ({
            ...prev,
            [e.target.name]: ""
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        if (!serviceDetails.serviceName) {
            newErrors.serviceName = 'Service name is required';
            isValid = false;
        }
        if (!serviceDetails.description) {
            newErrors.description = 'Description is required';
            isValid = false;
        }
        if (!serviceDetails.price) {
            newErrors.price = 'Price is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleSubmit = () => {
        if (!validateForm()) {
            return;
        }

        Axios.post(`${host}/api/service/serviceInsert`, serviceDetails)
            .then((res) => {
                if (res.data) {
                    setOpen(true);
                    setServiceDetails({
                        serviceName: '',
                        description: '',
                        price: ''
                    });
                    setTimeout(() => {
                        navigate('/service');
                    }, 1000);
                } else {
                    console.log("Some error occurred");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div style={{ height: '100%', backgroundColor: '#ffe5b4', padding: '20px' }}>
            <Paper>
                <Box sx={{ backgroundColor: '#f0f1f6', padding: '2px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ color: 'rgb(82, 95, 127)', fontWeight: '400', fontSize: '15px' }}>Insert Branch Details</p>
                    <Link to='/service'><Button size='small' endIcon={<ArrowForwardIosIcon />}>View Branch</Button></Link>
                </Box>

                <Card variant="outlined" sx={{ margin: '20px', padding: '20px', backgroundColor: '#ffdab9' }}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <TextField
                                    id="serviceName"
                                    label="Service Name"
                                    name='serviceName'
                                    value={serviceDetails.serviceName}
                                    onChange={handleServiceDetails}
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    error={!!errors.serviceName}
                                    helperText={errors.serviceName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                    id="description"
                                    label="Description"
                                    name='description'
                                    value={serviceDetails.description}
                                    onChange={handleServiceDetails}
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    error={!!errors.description}
                                    helperText={errors.description}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                    id="price"
                                    label="Price"
                                    name='price'
                                    value={serviceDetails.price}
                                    onChange={handleServiceDetails}
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    error={!!errors.price}
                                    helperText={errors.price}
                                />
                            </Grid>
                            
                        </Grid>

                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <Box sx={{ p: 3, width: '400px' }}>
                                <Button variant='contained' color='primary' fullWidth onClick={handleSubmit}>Submit</Button>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Paper>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Branch Inserted!
                </Alert>
            </Snackbar>
        </div>
    );
}
