const connection = require("./connection");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());

//find
app.get("/find", function (req, res) {
  connection.query("select * from Employee", (err, rows) => {
    if (err) {
      res.send("Error: ", err);
    } else {
      res.send(rows);
    }
  });
});

//ADD
app.post("/create", (req, res) => {
  const emp = [req.body.id, req.body.name, req.body.salary];

  connection.query(
    "INSERT INTO `Employee` (id, name, salary) VALUES (?)",
    [emp],
    (err, rows) => {
      if (err) {
        res.send("something went wrong");
        console.log(err);
      } else {
        res.send("User Created");
        console.log(rows);
      }
    }
  );
});

//DELETE
app.delete("/delete/:id", (req, res) => {
    connection.query(
    "DELETE FROM `Employee` WHERE id  =?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        res.send("something went wrong");
        console.log(err);
      } else {
        res.send("Deleted Succesfully");
        console.log(rows);
      }
    }
  );
});

//update
app.put("/update", (req, res) => {
    Employee = req.body;

  connection.query(
    "UPDATE `Employee` SET ? WHERE id=" + Employee.id,
    [Employee],
    (err, rows) => {
      if (err) {
        res.send(err);
        console.log(" something went wrong", err);
      } else {
        console.log(rows);
        return res.send(rows);
      }
    }
  );
});

app.listen(3000, async () => {
  console.log("server is on port 3000");
});
