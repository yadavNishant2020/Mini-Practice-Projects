const express = require("express");
const cors = require("cors");
const pool = require("./database")
const app = express();

//setting middleware
app.use(express.json());
app.use(cors());

const port = 4000;

app.post("/adduser", (req, res) => {

    const username = req.body["username"];
    const password = req.body["password"];

    console.log("Username:" + username);
    console.log("password:" + password);

    const insertQry = `INSERT INTO accounts (username, password) VALUES ('${username}', '${password}');`

    pool.query(insertQry).then((response)=>{
        console.log("Data SAved");
        console.log(response);
    }).catch((err) =>{
        console.log(err);
    })

    console.log(req.body);
  res.send("Response Receive: " + req.body);
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
