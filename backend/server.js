const express= require('express');
const app= express();
require('dotenv').config();
const cors= require('cors');
app.use(cors({
    origin:['http://localhost:3000']
}))



PORT= process.env.PORT || 5000


app.use(express.json());


app.listen(PORT, ()=>{
    console.log(`Running on http://localhost:${PORT}`);
})