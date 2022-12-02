const Alumno = require('../model/Alumno') //reriremos la configuracion que hisismos para que se ingresen los datos a mongo

//Mostrara mis datos en una tabla
module.exports.mostrar = (req, res)=>{
    Alumno.find({}, (error, alumnos)=>{ //Mostrara todos los datos con find
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los alumnos'
            })
        }
        return res.render('index', {alumnos: alumnos})
    })
}

//Se registraran los dtos
module.exports.crear = (req, res)=>{
    const alumno = new Alumno({//resivira los datos de mi index
        nombre: req.body.nombre,
        edad: req.body.edad
    })
    alumno.save(function(error,alumno){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el Alumno'
            })
        }
        res.redirect('/') // acabando de ingresar los datos me redirijira a mi raiz
    })
}

//Se podran borrar los datos
module.exports.borrar = (req, res)=>{
    const id = req.params.id // con el id me eliminara ese datos
    Alumno.findOneAndDelete(id, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Alumno'
            })
        }
        res.redirect('/')//acabando em redirijira a raiz 
    })
}


//Se editaran mis cosas aqui
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const edad = req.body.edad_editar
    Alumno.findByIdAndUpdate(id, {nombre, edad}, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el Alumno'
            })
        }
        res.redirect('/')
    })
}
