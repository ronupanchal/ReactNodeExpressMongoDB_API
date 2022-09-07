const express = require("express")
const mongoose = require('mongoose')
const app = express();
const cors = require("cors")
app.use(cors());

const FacultyModel = require("./models/faculty")

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/db_student",{
    useNewUrlParser: true,
});

//get api
app.get('/', async(req,res)=>{       
    try{     
        let q = await FacultyModel.find({});
        return res.json(q);
       }catch(err){
         console.log(err);
    }
});

//get api by id
app.get('/:id', async(req,res)=>{       
    try{     
        let q = await FacultyModel.findOne({ _id: id });
        return res.json(q);
       }catch(err){
         console.log(err);
    }
});

//post api
app.post('/add_faculty', async(req,res)=>{
    const faculty = new  FacultyModel({facultyName: "Nidhi",facultySalary:120000});
    try{        
        let rec = await faculty.save();
        return res.send(rec)
       }catch(err){
         console.log(err);
    }
});

//update api
app.put('/update_faculty', async(req,res)=>{        
    try{        
        let q = await FacultyModel.updateOne( { _id: "63181d4424c032e1488300c4" },{
                                            $set: {
                                            facultyName: "Meena",
                                            facultySalary: 20000,
                                            } });    
        
        return res.send(q);
       }catch(err){
         console.log(err);
    }
});

//delete api
app.delete('/delete_faculty', async(req,res)=>{    
    try{        
        let q = await FacultyModel.deleteOne( { _id: "63181d4424c032e1488300c4" });    
        
        return res.send(q);
       }catch(err){
         console.log(err);
    }
});


app.listen(3001, () =>{
    console.log("server running on port 3001...")
});