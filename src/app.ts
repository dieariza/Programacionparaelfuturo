import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('prueba del servidor');
})
app.listen(port, () => {
    return console.log(`Servidor corriendo sobre el puerto ${port}`)
});