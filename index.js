const express=require('express') 
const exphbs=require('express-handlebars')
const employee=require('./controller/emp')

const app=express()

//configuring handelbars 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json())  //middleware
app.use(express.urlencoded({extended:true}))

app.use('/api',employee)



const PORT=process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))