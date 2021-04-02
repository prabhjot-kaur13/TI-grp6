const express = require("express");
const itemModel = require("../model/itemModel");
const router = express.Router();
router.get('/', (req,res)=>{
    itemModel.find().exec().then(data=>{
        console.log(data);
        res.status(200).json(data);
    })
   .catch(err=>{
        res.status(200).json({
            success: false,
            message: "items not found",
        
    });
    console.log(err);
})
})

module.exports = router;
