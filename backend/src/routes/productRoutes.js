const express = require("express");
const router = express.Router();

//sample products array
const products =[
    {id:1, name: "T-shirt", price:20},
    {id:2, name: "Jeans", price:20},
    {id:3, name: "Cap", price:20},

]

router.get("/", (req, res) =>{
    res.json(products);
})

module.exports = router;