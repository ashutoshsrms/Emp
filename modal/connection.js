const mysql=require('mysql')

//database connection

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'emp'
})

db.connect((err)=>{
    if(err) throw err;
    console.log("connected")
})

module.exports=db