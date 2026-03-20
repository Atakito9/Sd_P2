import axios from 'axios'
// Dirección base del servidor
const server = 'http://localhost:8080'
// Función main
async function main() {
    try {
// Probamos la conexión básica
    console.log('--- Prueba de conexión ---')
    const hello = await axios.get(server + '/')
    console.log(hello.data)
// Creamos varias películas
        console.log('\n--- Crear películas ---')
        console.log((await axios.put(server + '/movie/m1', {
            title: 'Inception',
            genre: 'sci-fi',
            year: 2010,
            in_cinema: false
        })).data)
    }catch{}
} 