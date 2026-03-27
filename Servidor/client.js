import axios from 'axios'

const server = 'http://localhost:8080'

async function testHelloWorld(){
    const result = await axios.get(server + '/')
    return result.data // el campo data contendrá el resultado
}

const hello = await testHelloWorld()

async function runTests() {
    try {
        // Añadir una película
        await axios.put(`${server}/movie/m1`, {
            title: "Inception",
            genre: "sci-fi",
            year: 2010,
            in_cinema: false
        })
        
        // Añadir valoración
        const reviewData = { rating: 5, comment: "Excelente película" }
        await axios.put(`${server}/review/m1`, reviewData)

        // Añadir una película
        await axios.post(`${server}/movie/m2`, {
            title: "Star Wars Ep:1",
            genre: "sci-fi",
            year: 2001,
            in_cinema: false
        })
        
        // Añadir valoración
        reviewData = { rating: 5, comment: "Excelente película, muy mítica" }
        await axios.put(`${server}/review/m2`, reviewData)
        
        // Comprobar estadísticas
        const stats = await axios.get(`${server}/stats`)
        console.log("Estadísticas del sistema:", stats.data)

        // Buscar texto
        const search = await axios.get(`${server}/search?text=excelente`)
        console.log("Resultados de búsqueda:", search.data)

    } catch (error) {
        console.error("Error en las pruebas:", error.response ? error.response.data : error.message)
    }
}

await runTests()
console.log('Prueba de conexión, resultado: ' + hello)