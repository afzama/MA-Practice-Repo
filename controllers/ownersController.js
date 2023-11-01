const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get('/',(req,res)=>{
    const owners = JSON.parse(fs.readFileSync("./db/owners.json"))
    console.log(`${req.method} request to ${req.url}`)
    res.json(owners);
})
router.post("/",(req,res)=>{
    const newOwner = {
        id:crypto.randomUUID(),
        name:req.body.name,
        city:req.body.city
    }
    const storedOwnersData = JSON.parse(fs.readFileSync("./db/owners.json"));
    storedOwnersData.push(newOwner)
    fs.writeFileSync("./db/owners.json",JSON.stringify(storedOwnersData,null,4));
    console.log(`${req.method} request to ${req.url}`)
    res.json(newOwner)
})

router.get("/:ownerId",(req,res)=>{
    const owners = JSON.parse(fs.readFileSync("./db/owners.json"))
    const id = req.params.ownerId;
    for (let i = 0; i < owners.length; i++) {
        if(owners[i].id==id){
            return res.json(owners[i])
        } 
    }
    return res.send("sorry, no such owner")
})

module.exports = router;