const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// use json & cors middleware
app.use(express.json());
app.use(cors());


app.post("/api/translate-markdown", (req, res) =>{
    
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})