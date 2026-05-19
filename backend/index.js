const express = require ('express')

const app = express()

app.get('/', (req,res) => {
    res.send('hola mi perroooo')
})

app.listen(4000,()=>{
    console.log ('el servidor esta en el puerto 4000')
})