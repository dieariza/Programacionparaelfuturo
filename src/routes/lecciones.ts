import { request, Router } from "express";
import { actualizarLeccion, agregarLeccion, eliminarLeccion, obtenerLeccion, obtenerLecciones } from "../controllers/leccionesController";
import errorHandler from "../middlewares/errores";

const LeccionesRoutes = (app) => {
    const router = Router();
    app.use('/', router);
    router.get('/obtenerLecciones', obtenerLecciones);
    router.get('/obtenerLeccion/:id', obtenerLeccion);
    router.post('/agregarLeccion', agregarLeccion);
    router.put('/actualizarLeccion/:id', actualizarLeccion);
    router.delete('/eliminarLeccion/:id', eliminarLeccion);

    router.use(errorHandler);
}

export default LeccionesRoutes;
