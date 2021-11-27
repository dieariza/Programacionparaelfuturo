import { isNamedExportBindings } from "typescript";
import executeQuery from "../services/mysql.service";

const obtenerModulos = (req, res, next) => {
    executeQuery('SELECT * FROM  modulos').then(response => {
        const data = {
            message: `${response.lenght} datos encontrados`,
            data: response.lenght > 0 ? response :null 
        }
        res.json(response);
    }).catch(error => {
        next(error);
    })
}

const obtenerModulo = async(req, res, next) => {
    try{
        const response = await executeQuery(`SELECT * FROM modulos WHERE idModulos = ${req.params.id}`)
        res.send(response);
    }catch(error){
        next(error);
    }
    res.send('obtenerModulo');
}

const agregarModulo = async(req, res, next) => {
    const {Nombre_modulo, Fecha_Inicio_modulo} = req.body
    try{
        const response = await executeQuery(`INSERT INTO modulos (Nombre_modulo, Fecha_Inicio_modulo) VALUES ('${Nombre_modulo}', '${Fecha_Inicio_modulo}')`)
        console.log(response);
        res.json({message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }
}

const actualizarModulo = async(req, res, next) => {
    const {Nombre_modulo, Fecha_Inicio_modulo} = req.body
    const {id} = req.params;

    try{
    const response = await executeQuery(`UPDATE modulos SET Nombre_modulo = '${Nombre_modulo}', Fecha_Inicio_modulo = '${Fecha_Inicio_modulo}' WHERE idModulos = '${id}'`)
    console.log(response);
    res.json({message: response.affectedRows > 0 ? 'update' : `No existe registro con id: ${id}`});
    }catch (error){
        next(error);
    }
}

const eliminarModulo = (req, res, next) => {
    const {id} = req.params;

    executeQuery(`DELETE FROM modulos WHERE idModulos = '${id}'`).then(response => {
        res.json({message: 'delete'});
    }).catch(error => {
        next(error);
    });
}

export {obtenerModulos, obtenerModulo, agregarModulo, actualizarModulo, eliminarModulo}
