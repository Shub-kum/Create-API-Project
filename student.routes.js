const express = require("express");
const router = express.Router();
const Student = require("../models/student.model")


//Get All students
router.get("/",async(req, res)=>{
    try{
        const student = await Student.find()
        res.json(student)
    }
    catch(err){
        res.status(500).json({message : err.message})
    }
})
//Get All a single students
router.get("/:id",async(req, res)=>{
    try{
        const student = await Student.findById(req.params.id)
        if(!student) return res.status(404).json({message : "Student not found"})
        res.json(student)
    }
    catch(err){
        res.status(500).json({message : err.message})
    }
})
//Get post students
router.post("/",async(req, res)=>{
    try{
const newStudent = await Student.create(req.body)
res.status(201).json(newStudent)
    }
    catch(err){
        res.status(400).json({message : err.message})
    }
})
//Get put students
router.put("/:id",async(req, res)=>{
    try{
const updateStudent = await Student.findByIdAndUpdate(req.params.id, req.body,
    {new : true}
)
 if(!updateStudent) return res.status(404).json({message : "Student not found"})  
    res.json(updateStudent); 
}
    
    catch(err){
        res.status(400).json({message : err.message})
    }
    
})
//Get delete students
router.delete("/:id",async(req, res)=>{
    try{
const student = await Student.findByIdAndDelete(req.params.id)
if(!student) return res.status(404).json({message : "Student not found"})  
    res.json({message : "Student Delete"});
    }
    catch(err){
        res.status(500).json({message : err.message})
    }
})
module.exports = router