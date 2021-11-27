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
exports.eliminarLeccion = exports.actualizarLeccion = exports.agregarLeccion = exports.obtenerLeccion = exports.obtenerLecciones = void 0;
const mysql_service_1 = __importDefault(require("../services/mysql.service"));
const obtenerLecciones = (req, res, next) => {
    (0, mysql_service_1.default)('SELECT * FROM  clases').then(response => {
        const data = {
            message: `${response.lenght} clases encontradas`,
            data: response.lenght > 0 ? response : null
        };
        res.json(response);
    }).catch(error => {
        next(error);
    });
};
exports.obtenerLecciones = obtenerLecciones;
const obtenerLeccion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, mysql_service_1.default)(`SELECT * FROM clases WHERE idClases = ${req.params.id}`);
        res.send(response);
    }
    catch (error) {
        next(error);
    }
    res.send('obtenerLeccion');
});
exports.obtenerLeccion = obtenerLeccion;
const agregarLeccion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre_clases, Numeracion_clases } = req.body;
    try {
        const response = yield (0, mysql_service_1.default)(`INSERT INTO clases (Nombre_clases, Numeracion_clases) VALUES ('${Nombre_clases}', '${Numeracion_clases}')`);
        console.log(response);
        res.json({ message: 'created', id: response.insertId });
    }
    catch (error) {
        next(error);
    }
});
exports.agregarLeccion = agregarLeccion;
const actualizarLeccion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre_clases, Numeracion_clases } = req.body;
    const { id } = req.params;
    try {
        const response = yield (0, mysql_service_1.default)(`UPDATE clases SET Nombre_Clases = '${Nombre_clases}', Numeracion_clases = '${Numeracion_clases}' WHERE idClases = '${id}'`);
        console.log(response);
        res.json({ message: response.affectedRows > 0 ? 'update' : `No existe registro con id: ${id}` });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.actualizarLeccion = actualizarLeccion;
const eliminarLeccion = (req, res, next) => {
    const { id } = req.params;
    (0, mysql_service_1.default)(`DELETE FROM clases WHERE idClases = '${id}'`).then(response => {
        res.json({ message: 'delete' });
    }).catch(error => {
        next(error);
    });
};
exports.eliminarLeccion = eliminarLeccion;
//# sourceMappingURL=leccionesController.js.map