import mysql from 'mysql';

const getConnection = () => {
    const connection = mysql.createConnection({
        user: 'root',
        password: 'prueba123',
        database: 'programacionparaelfuturo',
        port: 3306,
        host: 'localhost',
    } )
}

const executeQuery = (query: string) => {
    //codigo para ejecutar el query
}

export default executeQuery;
