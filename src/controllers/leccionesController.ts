import { isNamedExportBindings } from "typescript";
import executeQuery from "../services/mysql.service";

const obtenerLecciones = (req, res, next) => {
    executeQuery('SELECT * FROM  clases').then(response => {
        const data = {
            message: `${response.lenght} clases encontradas`,
            data: response.lenght > 0 ? response :null 
        }
        res.json(response);
    }).catch(error => {
        next(error);
    })
}

const obtenerLeccion = async (req, res, next) => {
    try{
        const response = await executeQuery(`SELECT * FROM clases WHERE idClases = ${req.params.id}`)
        res.send(response);
    }catch(error){
        next(error);
    }
    res.send('obtenerLeccion');
}

const agregarLeccion = async (req, res, next) => {
    const {Nombre_clases, Numeracion_clases} = req.body
    try{
        const response = await executeQuery(`INSERT INTO clases (Nombre_clases, Numeracion_clases) VALUES ('${Nombre_clases}', '${Numeracion_clases}')`)
        console.log(response);
        res.json({message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }
}

const actualizarLeccion = async (req, res, next) => {
    const {Nombre_clases, Numeracion_clases} = req.body
    const {id} = req.params;

    try{
    const response = await executeQuery(`UPDATE clases SET Nombre_Clases = '${Nombre_clases}', Numeracion_clases = '${Numeracion_clases}' WHERE idClases = '${id}'`)
    console.log(response);
    res.json({message: response.affectedRows > 0 ? 'update' : `No existe registro con id: ${id}`});
    }catch (error){
        next(error);
    };
}

const eliminarLeccion = (req, res, next) => {
    const {id} = req.params;

    executeQuery(`DELETE FROM clases WHERE idClases = '${id}'`).then(response => {
        res.json({message: 'delete'});
    }).catch(error => {
        next(error);
    });
}

export {obtenerLecciones, obtenerLeccion, agregarLeccion, actualizarLeccion, eliminarLeccion}

