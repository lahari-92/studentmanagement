const express = require("express");
const db = require("./db5");

const app = express();
app.get("/students", (req, res) => {

    db.query("SELECT * FROM students", (err, result) => {

        if(err)
            throw err;

        res.json(result);

    });
});

app.listen(3000, () => {

    console.log("Server Running");

});