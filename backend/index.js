const express = require('express')
const router = require('./routes/router')
const app = express()

app.use('/api',router)


app.get('/', (req,res) => {
    res.send('hola mi perroooo')
})

app.listen(4000,()=>{
    console.log ('el servidor esta en el puerto 4000')
})