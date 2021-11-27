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
exports.eliminarModulo = exports.actualizarModulo = exports.agregarModulo = exports.obtenerModulo = exports.obtenerModulos = void 0;
const mysql_service_1 = __importDefault(require("../services/mysql.service"));
const obtenerModulos = (req, res, next) => {
    (0, mysql_service_1.default)('SELECT * FROM  modulos').then(response => {
        const data = {
            message: `${response.lenght} datos encontrados`,
            data: response.lenght > 0 ? response : null
        };
        res.json(response);
    }).catch(error => {
        next(error);
    });
};
exports.obtenerModulos = obtenerModulos;
const obtenerModulo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, mysql_service_1.default)(`SELECT * FROM modulos WHERE idModulos = ${req.params.id}`);
        res.send(response);
    }
    catch (error) {
        next(error);
    }
    res.send('obtenerModulo');
});
exports.obtenerModulo = obtenerModulo;
const agregarModulo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre_modulo, Fecha_Inicio_modulo } = req.body;
    try {
        const response = yield (0, mysql_service_1.default)(`INSERT INTO modulos (Nombre_modulo, Fecha_Inicio_modulo) VALUES ('${Nombre_modulo}', '${Fecha_Inicio_modulo}')`);
        console.log(response);
        res.json({ message: 'created', id: response.insertId });
    }
    catch (error) {
        next(error);
    }
});
exports.agregarModulo = agregarModulo;
const actualizarModulo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre_modulo, Fecha_Inicio_modulo } = req.body;
    const { id } = req.params;
    try {
        const response = yield (0, mysql_service_1.default)(`UPDATE modulos SET Nombre_modulo = '${Nombre_modulo}', Fecha_Inicio_modulo = '${Fecha_Inicio_modulo}' WHERE idModulos = '${id}'`);
        console.log(response);
        res.json({ message: response.affectedRows > 0 ? 'update' : `No existe registro con id: ${id}` });
    }
    catch (error) {
        next(error);
    }
});
exports.actualizarModulo = actualizarModulo;
const eliminarModulo = (req, res, next) => {
    const { id } = req.params;
    (0, mysql_service_1.default)(`DELETE FROM modulos WHERE idModulos = '${id}'`).then(response => {
        res.json({ message: 'delete' });
    }).catch(error => {
        next(error);
    });
};
exports.eliminarModulo = eliminarModulo;
//# sourceMappingURL=modulosController.js.map