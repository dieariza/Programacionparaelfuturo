"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validarRol = (req, res, next) => {
    if (req.headers.isadmin) {
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
};
exports.default = validarRol;
//# sourceMappingURL=validarRol.js.map