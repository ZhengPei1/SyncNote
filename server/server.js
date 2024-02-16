const express = require("express");
const cors = require("cors");
const {getLatex} = require("./latexToHTML");

const app = express();
const PORT = process.env.PORT || 5000;

// use json & cors middleware
app.use(express.json());
app.use(cors());


app.post("/api/translate-latex", (req, res) =>{
    console.log(req.body.userText);
    res.send(getLatex(req.body.userText));
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})