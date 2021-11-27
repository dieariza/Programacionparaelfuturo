"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuario = exports.agregarUsuario = exports.obtenerUsuario = exports.obtenerUsuarios = void 0;
const mysql_service_1 = __importDefault(require("../services/mysql.service"));
const obtenerUsuarios = (req, res, next) => {
    (0, mysql_service_1.default)('SELECT * FROM usuario').then(response => {
        const data = {
            message: `${response.lenght} usuarios encontrados`,
            data: response.lenght > 0 ? response : null
        };
        res.json(response);
    }).catch(error => {
        next(error);
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
const obtenerUsuario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, mysql_service_1.default)(`SELECT * FROM usuario WHERE idUsuario = ${req.params.id}`);
        res.send(response);
    }
    catch (error) {
        next(error);
    }
    res.send('obtenerUsuario');
});
exports.obtenerUsuario = obtenerUsuario;
const agregarUsuario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre_usuario, Fecha_nacimiento, Genero_usuario, Correo_usuario, Ciudad_usuario, Nombre_colegio } = req.body;
    try {
        const response = yield (0, mysql_service_1.default)(`INSERT INTO usuario (Nombre_usuario, Fecha_nacimiento, Genero_usuario, Correo_usuario, Ciudad_usuario, Nombre_colegio) VALUES ('${Nombre_usuario}', '${Fecha_nacimiento}', '${Genero_usuario}', '${Correo_usuario}', '${Ciudad_usuario}', '${Nombre_colegio}')`);
        console.log(response);
        res.json({ message: 'created', id: response.insertId });
    }
    catch (error) {
        next(error);
    }
});
exports.agregarUsuario = agregarUsuario;
const actualizarUsuario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre_usuario, Fecha_nacimiento } = req.body;
    const { id } = req.params;
    try {
        const response = yield (0, mysql_service_1.default)(`UPDATE usuario SET Nombre_usuario = '${Nombre_usuario}', Fecha_nacimiento = '${Fecha_nacimiento}' WHERE idUsuario = '${id}'`);
        console.log(response);
        res.json({ message: response.affectedRows > 0 ? 'update' : `No existe registro con id: ${id}` });
    }
    catch (error) {
        next(error);
    }
});
exports.actualizarUsuario = actualizarUsuario;
const eliminarUsuario = (req, res, next) => {
    const { id } = req.params;
    (0, mysql_service_1.default)(`DELETE FROM usuario WHERE idUsuario = '${id}'`).then(response => {
        res.json({ message: 'delete' });
    }).catch(error => {
        next(error);
    });
};
exports.eliminarUsuario = eliminarUsuario;
//# sourceMappingURL=usuariosController.js.map