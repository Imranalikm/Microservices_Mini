const express = require('express')

const {randomBytes} =require ('crypto')
const bodyParser = require('body-parser')
const cors =require('cors')

const app =express()
app.use(bodyParser.json());
app.use(cors());
let posts ={}
app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/posts',(req,res)=>{
   const id = randomBytes(4).toString('hex')
   const {title} = req.body
   posts[id] ={
    id,title
   }
   res.status(201).send(posts[id]);
})

app.post('/clear',(req,res)=>{
    posts ={}
    res.status(200).send("all posts deleetd")
})

app.listen(4000,()=>{
    console.log("server started at 4000")
})