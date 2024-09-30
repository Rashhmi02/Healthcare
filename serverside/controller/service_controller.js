const serviceSchema=require('../model/service_model');


//insert the data
const ServiceInsert=async(req,res)=>{
    try{
        console.log(req.body);
        //destructure fields of client 
        const {serviceName,description,price}=req.body;
        //assign values to schema 
        const serviceInfo=new serviceSchema({serviceName,description,price});
        //save in database
        const serviceSaved=await serviceInfo.save();
        //respond
        res.send(serviceSaved);
    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal some error occured");
    }
}

//fetch the data
const GetService = async(req,res)=>{
    try{
        const service=await serviceSchema.find();
        res.send(service);
    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal some error occured");
    }
}

const GetSingleService = async(req,res)=>{
    try{
        const service=await serviceSchema.findById(req.params.id);
        res.send(service);
    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal some error occured");
    }
}


//delete the data
const deleteService = async(req,res) =>{
    try{
        let service = await serviceSchema.findById(req.params.id);
        if(!service){
            return res.status(404).send("Not Found");
        }
        service=await serviceSchema.findByIdAndDelete(req.params.id)
        res.json({"Success":"Product deleted successfully",service:service});//user: user(is the deleted data) 
    }catch(error){
        console.log(error.message); 
        res.status(500).send("Internal some error occured");
    }
}

 const updateService = async(req,res)=>{
    const {serviceName,description,price} = req.body;
    try{
        const newService = {};
        if(serviceName){ newService.serviceName = serviceName};
        if(description){ newService.description = description};
        if(price){ newService.price = price};
        let service = await serviceSchema.findById(req.params.id);
        if(!service){
            return res.status(404).send("Not Found");
        }
        service=await serviceSchema.findByIdAndUpdate(req.params.id,{$set: newService},{new: true})
        res.json({service});
    }catch(error){
        console.log(error.message);
        res.status(500).send("Internal some error occured");
    }
 }


module.exports={ServiceInsert,GetService,deleteService,updateService,GetSingleService};



// const serviceSchema = require('../model/service_model');

// // Insert the service
// const ServiceInsert = async (req, res) => {
//   try {
//     const { serviceName, description, price } = req.body;
//     const serviceInfo = new serviceSchema({ serviceName, description, price });
//     const serviceSaved = await serviceInfo.save();
//     res.send(serviceSaved);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Internal server error occurred');
//   }
// };

// // Fetch all services
// const GetService = async (req, res) => {
//   try {
//     const services = await serviceSchema.find();
//     res.send(services);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Internal server error occurred');
//   }
// };

// // Fetch single service by ID
// const GetSingleService = async (req, res) => {
//   try {
//     const service = await serviceSchema.findById(req.params.id);
//     if (!service) {
//       return res.status(404).send('Service not found');
//     }
//     res.send(service);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Internal server error occurred');
//   }
// };

// // Update the service
// const updateService = async (req, res) => {
//   try {
//     const { serviceName, description, price } = req.body;
//     const updatedService = await serviceSchema.findByIdAndUpdate(req.params.id, { serviceName, description, price }, { new: true });
//     if (!updatedService) {
//       return res.status(404).send('Service not found');
//     }
//     res.send(updatedService);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Internal server error occurred');
//   }
// };

// // Delete the service
// const deleteService = async (req, res) => {
//   try {
//     const service = await serviceSchema.findByIdAndDelete(req.params.id);
//     if (!service) {
//       return res.status(404).send('Service not found');
//     }
//     res.send({ message: 'Service deleted successfully' });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Internal server error occurred');
//   }
// };

// module.exports = { ServiceInsert, GetService, GetSingleService, updateService, deleteService };
