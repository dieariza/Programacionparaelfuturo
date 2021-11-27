import { request, Router } from "express";
import { actualizarModulo, agregarModulo, eliminarModulo, obtenerModulos } from "../controllers/modulosController";
import errorHandler from "../middlewares/errores"

const modulosRoutes = (app) => {
    const router = Router();
    app.use('/', router);

    router.get('/obtenerModulos', obtenerModulos, errorHandler);
    router.get('/obtenerModulo/:id', obtenerModulos);
    router.post('/agregarModulo', agregarModulo);
    router.put('/actualizarModulo/:id', actualizarModulo);
    router.delete('/eliminarModulo/:id', eliminarModulo);

    router.use(errorHandler); 
}


export default modulosRoutes;
