"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leccionesController_1 = require("../controllers/leccionesController");
const errores_1 = __importDefault(require("../middlewares/errores"));
const LeccionesRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    router.get('/obtenerLecciones', leccionesController_1.obtenerLecciones);
    router.get('/obtenerLeccion/:id', leccionesController_1.obtenerLeccion);
    router.post('/agregarLeccion', leccionesController_1.agregarLeccion);
    router.put('/actualizarLeccion/:id', leccionesController_1.actualizarLeccion);
    router.delete('/eliminarLeccion/:id', leccionesController_1.eliminarLeccion);
    router.use(errores_1.default);
};
exports.default = LeccionesRoutes;
//# sourceMappingURL=lecciones.js.map