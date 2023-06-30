const fs = require('fs/promises');
const axios = require('axios');
const argumentosEntrada = process.argv.slice(2);
const opcion = argumentosEntrada[0];

const validarOpcionesDeEntrada = () => {
    switch (opcion) {
        case 'comments':
            leerApi(opcion)
            break;
        case 'photos':
            leerApi(opcion)
        break;
        case 'albums':
            leerApi(opcion)
        break;
        case 'todos':
            leerApi(opcion)
        break;
        case 'posts':
            leerApi(opcion)
        break;
        default:

    }
}


const leerApi = async (opt) => {
    try {
        await axios.get(`https://jsonplaceholder.typicode.com/${opt}`)
        .then(res => res.data)
        .then(info => escribirApi(JSON.stringify(info, null, 2), opt))
    } catch (error) {
        console.log('Lo sentimos, algo ha salido mal');
        console.log(error);
    }
    
}

const escribirApi = async (contenido, dire) => {
    try {
        await fs.writeFile(`${dire}.json`, contenido, 'utf8')
        console.log('Los datos han sido escritos exitosamente');
    } catch (error) {
        console.log(error);
    }}




validarOpcionesDeEntrada()
