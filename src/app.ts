import express from 'express';
import modulosRoutes from './routes/modulos';
import config from './config/config';
import LeccionesRoutes from './routes/lecciones';
import errorHandler from './middlewares/errores';
import validarRol from './middlewares/validarRol';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

modulosRoutes(app);
LeccionesRoutes(app);

app.use(errorHandler);

app.get('/prueba/:id', async(req, res, next)=>{
    //desestructuracion de datos
    const datos = {
        nombre: "Fernando",
        genero: "Maculino",
        edad: "30 años"
    }
    const {genero, nombre} = datos;

    //buscar el numero mayor
    const arrayNumeros = [5, 10, 30, 1000]
    const mayor = Math.max(...arrayNumeros)
    res.status(200).json({message: nombre});
});

app.listen(config.PORT, ()=>{
    return console.log(`Servidor corriendo sobre el puerto ${config.PORT}`);
});

