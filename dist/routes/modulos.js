"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modulosController_1 = require("../controllers/modulosController");
const errores_1 = __importDefault(require("../middlewares/errores"));
const modulosRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    router.get('/obtenerModulos', modulosController_1.obtenerModulos, errores_1.default);
    router.get('/obtenerModulo/:id', modulosController_1.obtenerModulos);
    router.post('/agregarModulo', modulosController_1.agregarModulo);
    router.put('/actualizarModulo/:id', modulosController_1.actualizarModulo);
    router.delete('/eliminarModulo/:id', modulosController_1.eliminarModulo);
    router.use(errores_1.default);
};
exports.default = modulosRoutes;
//# sourceMappingURL=modulos.js.map