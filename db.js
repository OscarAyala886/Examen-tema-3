const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_alumnos' //como se llamara mi base de datos


const db = mongoose
    .connect(url,{ //pasara mi link con la configuracion de mongo
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true,
    })
    .then(() => {
        console.log('Se ha conetado a mongodb...');
    })
.catch((error) => {
    console.log(error.reason); 
});
module.exports = db