const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/ToDoRoute")

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors())

//connection to database
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connection successfull to database")
}).catch((err) => {
    console.log(err)
})

app.use(routes);

//running on port no 500
app.listen(PORT, () => {
    console.log(`Listening on : ${PORT}`)
})