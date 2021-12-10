const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')
//crear el servidor

const app = express();


conectarDB()
//puerto de la app
app.use(cors());

app.use(express.json({extended:true}));

const PORT = process.env.PORT || 4000;


app.use('/api/agent',require('./routes/agentRoute'))


app.listen(PORT, ()=>{
    console.log(`el servidor está en el puerto ${PORT}`)
})


