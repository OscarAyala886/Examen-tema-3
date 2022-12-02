const express = require('express') //Vmos a utilizar express para mandar los datos

const app = express()//Inicializamos la variable para hacer uso de la libreria

const db = require('./db');//Almomento de que se ejecute app se iniciara la conexion con la bae de datos

const alumnos = require('./routes/alumnos') //exportaremos las rutas que declaramos en alumnos

app.set('view engine', 'ejs')//ejecutamos el archivo ejs
//app.set("view engine", path.join(__dirname, "ejs"));

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(alumnos) //Hacemos uso de las rutas que declaramos en /routes/alumnos

app.listen(5000, ()=>{
    console.log('El servidor se ha levantado en http://localhost:5000')
})