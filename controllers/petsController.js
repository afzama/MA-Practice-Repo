const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get('/',(req,res)=>{
    const pets = JSON.parse(fs.readFileSync("./db/pets.json"))
    console.log(`${req.method} request to ${req.url}`)
    res.json(pets);
})

router.post("/",(req,res)=>{
    const newPet = {
        id:crypto.randomUUID(),
        name:req.body.name,
        species:req.body.species,
        breed:req.body.breed,
        color:req.body.color
    }
    const storedPetsData = JSON.parse(fs.readFileSync("./db/pets.json"));
    storedPetsData.push(newPet)
    fs.writeFileSync("./db/pets.json",JSON.stringify(storedPetsData,null,4));
    console.log(`${req.method} request to ${req.url}`)
    res.json(newPet)
})

router.get("/:petId",(req,res)=>{
    const pets = JSON.parse(fs.readFileSync("./db/pets.json"))
    const id = req.params.petId;
    for (let i = 0; i < pets.length; i++) {
        if(pets[i].id==id){
            return res.json(pets[i])
        } 
    }
    return res.status(404).send("sorry, no such pet")
})

module.exports = router;