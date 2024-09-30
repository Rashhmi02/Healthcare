const express=require('express');
const router=express.Router();
//importing function from controller

const {ServiceInsert,GetService,deleteService,updateService,GetSingleService} = require('../controller/service_controller');


router.post('/serviceInsert',ServiceInsert);
router.get('/getService',GetService);

router.delete('/deleteService/:id',deleteService);
router.put('/updateService/:id',updateService);
router.get('/GetSingleService/:id',GetSingleService);





module.exports=router;