//const { application } = require('express')
const express=require('express')
const db=require('../modal/connection')

const router=express.Router()

router.get('/showAllEmp',(req,res)=>{
    let sql="SELECT * FROM users";
    db.query(sql,(err,result)=>{
        if(err)throw err;
      //  res.status(200).json({result})
        res.render('list',{list:result})
    })
})

router.get('/showParticularEmp/:email',(req,res)=>{
    let email=req.params.email
    let sql=`SELECT * FROM users WHERE email= '${email}'`; 
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.status(200).json({result})
    })
})

router.post('/addEmp',(req,res)=>{
    const{name,email,pno,password}={...req.body}
    const user={name,email,pno,password}
    let sql="INSERT INTO `users` SET ?"
    db.query(sql,user,(err,result)=>{
        if(err) throw err;
       // res.status(200).json({result})
        console.log(result)
        res.redirect('/api/showAllEmp')
    })
})

router.get('/addEmp',(req,res)=>{
    res.render("addEmp")

})
 
//for displaying aal data
router.get('/updatedata',(req,res)=>{
    let sql="SELECT * FROM users";
    db.query(sql,(err,result)=>{
        if(err)throw err;
        // console.log(result);
        res.render('update',{list:result})
    })
})

//for display particular data
router.get('/updateEmp/:id',(req,res)=>{
   // res.send("update")
   //console.log("test")
   const id=req.params.id
   let sql=`SELECT * FROM users WHERE id=${id}`
   //console.log(sql);
   db.query(sql,(err,result)=>{
       if(err) throw err;
       console.log(result)
       res.render('lastUpdate',{list:result[0],viewTitle:"update Employee"})
   })
})

router.post('/lastUpdate',(req,res)=>{
    const{name,email,pno,password}={...req.body}
    let sql=`UPDATE users SET name='${name}',pno='${pno}',password='${password}' WHERE email='${email}'`
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.redirect('/api/updatedata')
    })
})

module.exports=router
