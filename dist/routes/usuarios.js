"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
const errores_1 = __importDefault(require("../middlewares/errores"));
const usuariosRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    router.get('/obtenerUsuarios', usuariosController_1.obtenerUsuarios, errores_1.default);
    router.get('/obtenerUsuario/:id', usuariosController_1.obtenerUsuario);
    router.post('/agregarUsuario', usuariosController_1.agregarUsuario);
    router.put('/actualizarUsuario/:id', usuariosController_1.actualizarUsuario);
    router.delete('/eliminarUsuario/:id', usuariosController_1.eliminarUsuario);
    router.use(errores_1.default);
};
exports.default = usuariosRoutes;
//# sourceMappingURL=usuarios.js.map