const mysql=require("mysql");
var mysqlConnection=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:"",
    database:'crud',
    multipleStatements:true
});

mysqlConnection.connect((err)=>{
    if(!err)
    {
    
        console.log("connected");
    }
    else{

        console.log("not connected");
    }
});

module.exports = mysqlConnection;