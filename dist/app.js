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
const express_1 = __importDefault(require("express"));
const modulos_1 = __importDefault(require("./routes/modulos"));
const config_1 = __importDefault(require("./config/config"));
const lecciones_1 = __importDefault(require("./routes/lecciones"));
const errores_1 = __importDefault(require("./middlewares/errores"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, modulos_1.default)(app);
(0, lecciones_1.default)(app);
app.use(errores_1.default);
app.get('/prueba/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //desestructuracion de datos
    const datos = {
        nombre: "Fernando",
        genero: "Maculino",
        edad: "30 años"
    };
    const { genero, nombre } = datos;
    //buscar el numero mayor
    const arrayNumeros = [5, 10, 30, 1000];
    const mayor = Math.max(...arrayNumeros);
    res.status(200).json({ message: nombre });
}));
app.listen(config_1.default.PORT, () => {
    return console.log(`Servidor corriendo sobre el puerto ${config_1.default.PORT}`);
});
//# sourceMappingURL=app.js.map