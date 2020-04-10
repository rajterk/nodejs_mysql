const express=require("express");
const Router =express.Router();
const bodyParser=require("body-parser");
const mysqlConnection = require("../connection");


Router.get("/",(req,res)=>{
    mysqlConnection.query("select * from people",(err,rows,fields)=>{
    
        if(!err)
            {
            res.send(rows);
            }
        else
        {
            console.log(err);
        }   

    })
})


Router.post('/',(req, res) => {
    let data = {Name: req.body.Name, Age: req.body.Age};
    let sql = "INSERT INTO people SET ?";
    let query = mysqlConnection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });

  Router.put('/:id',(req, res) => {
    let sql = "UPDATE people SET people_id='"+req.body.people_id+"',Name='"+req.body.Name+"', Age='"+req.body.Age+"' WHERE people_id="+req.params.id;
    let query = mysqlConnection.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });






  Router.delete('/:id',(req, res) => {
    
    let sql = "DELETE FROM people WHERE people_id="+req.params.id+"";
    let query =mysqlConnection.query(sql, (err, results) => {
      if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });






module.exports = Router;