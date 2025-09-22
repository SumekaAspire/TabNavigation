const express = require("express");
const cors = require("cors");
const productRoutes = require('./routes/productRoutes');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.use('api/products', productRoutes);
//routes
app.get("/", (req, res) =>{
    res.send("Backend server is running!");
})    


const PORT = 5000;
app.listen(PORT, () =>console.log(`Server running on port ${PORT}`));
