import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Navigation from '../component/Nav/Navigation';

import Box from '@mui/material/Box';
import Home from '../component/Pages/Home';
import { styled } from '@mui/material/styles';
import Service from '../component/Pages/Service';
import Contact from '../component/Pages/Contact';
import AddService from '../component/Pages/AddService';

import EditService from '../component/Pages/EditService';
import UpdateService from '../component/Pages/UpdateService';


// import '../css/Style.css';

// import CssBaseline from '@mui/material/CssBaseline';
// import LoginBranch from '../component/Pages/LoginBranch';
// import Search from '../component/Pages/Search';
// import UserInfo from '../component/Pages/UserInfo';




export default function UserRoute() {

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));
  
  return (
    <div>
      <Box >
        {/* <CssBaseline /> */}
        {/* <Navigation /> */}
        {/* <Box component="main" sx={{ flexGrow: 1, p: 3, background: '#f0f1f6' }}> */}
          {/* <DrawerHeader /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/addService" element={<AddService/>} />
            <Route exact path="/editService/:id" element={<EditService/>} />
            <Route exact path="/updateService" element={<UpdateService/>} />
            

            
          </Routes>
        </Box>
      {/* </Box> */}
    </div>
  );
}
