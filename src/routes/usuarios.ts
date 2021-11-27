import { request, Router } from "express";
import { actualizarUsuario, agregarUsuario, eliminarUsuario, obtenerUsuarios, obtenerUsuario } from "../controllers/usuariosController";
import errorHandler from "../middlewares/errores"

const usuariosRoutes = (app) => {
    const router = Router();
    app.use('/', router);

    router.get('/obtenerUsuarios', obtenerUsuarios, errorHandler);
    router.get('/obtenerUsuario/:id', obtenerUsuario);
    router.post('/agregarUsuario', agregarUsuario);
    router.put('/actualizarUsuario/:id', actualizarUsuario);
    router.delete('/eliminarUsuario/:id', eliminarUsuario);

    router.use(errorHandler); 
}


export default usuariosRoutes;

