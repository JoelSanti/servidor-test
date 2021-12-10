const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'})


const conectarDB = async ()=> {
    try{
	await mongoose.connect(process.env.DB_MONGO, {
	    useNewUrlParser:true,
	    useUnifiedTopology:true,
	})

    console.log('Base de datos conectada')
    }catch(e){
	console.log(e)
    }

}

module.exports = conectarDB
