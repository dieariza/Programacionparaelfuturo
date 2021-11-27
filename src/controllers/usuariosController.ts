import { isNamedExportBindings } from "typescript";
import executeQuery from "../services/mysql.service";

const obtenerUsuarios = (req, res, next) => {
    executeQuery('SELECT * FROM usuario').then(response => {
        const data = {
            message: `${response.lenght} usuarios encontrados`,
            data: response.lenght > 0 ? response :null 
        }
        res.json(response);
    }).catch(error => {
        next(error);
    })
}

const obtenerUsuario = async(req, res, next) => {
    try{
        const response = await executeQuery(`SELECT * FROM usuario WHERE idUsuario = ${req.params.id}`)
        res.send(response);
    }catch(error){
        next(error);
    }
    res.send('obtenerUsuario');
}

const agregarUsuario = async(req, res, next) => {
    const {Nombre_usuario, Fecha_nacimiento, Genero_usuario, Correo_usuario, Ciudad_usuario, Nombre_colegio} = req.body
    try{
        const response = await executeQuery(`INSERT INTO usuario (Nombre_usuario, Fecha_nacimiento, Genero_usuario, Correo_usuario, Ciudad_usuario, Nombre_colegio) VALUES ('${Nombre_usuario}', '${Fecha_nacimiento}', '${Genero_usuario}', '${Correo_usuario}', '${Ciudad_usuario}', '${Nombre_colegio}')`)
        console.log(response);
        res.json({message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }
}

const actualizarUsuario = async(req, res, next) => {
    const {Nombre_usuario, Fecha_nacimiento} = req.body
    const {id} = req.params;

    try{
    const response = await executeQuery(`UPDATE usuario SET Nombre_usuario = '${Nombre_usuario}', Fecha_nacimiento = '${Fecha_nacimiento}' WHERE idUsuario = '${id}'`)
    console.log(response);
    res.json({message: response.affectedRows > 0 ? 'update' : `No existe registro con id: ${id}`});
    }catch (error){
        next(error);
    }
}

const eliminarUsuario = (req, res, next) => {
    const {id} = req.params;

    executeQuery(`DELETE FROM usuario WHERE idUsuario = '${id}'`).then(response => {
        res.json({message: 'delete'});
    }).catch(error => {
        next(error);
    });
}

export {obtenerUsuarios, obtenerUsuario, agregarUsuario, actualizarUsuario, eliminarUsuario}


