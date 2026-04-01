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
        let reviewData = { rating: 5, comment: "Excelente película" }
        await axios.put(`${server}/review/m1`, reviewData)

        // Añadir una película
        await axios.put(`${server}/movie/m2`, {
            title: "Star Wars: Episodio 1- La Amenaza Fantasma",
            genre: "sci-fi",
            year: 2001,
            in_cinema: false
        })
        
        // Añadir valoración
        reviewData = { rating: 5, comment: "Excelente película, muy mítica" }
        await axios.put(`${server}/review/m2`, reviewData)

        // Añadir una película
        await axios.put(`${server}/movie/m3`, {
            title: "The Godfather",
            genre: "crimen",
            year: 1972,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Una obra maestra del cine" }
        await axios.put(`${server}/review/m3`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m4`, {
            title: "Titanic",
            genre: "romance",
            year: 1997,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Muy emotiva y clásica" }
        await axios.put(`${server}/review/m4`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m5`, {
            title: "The Dark Knight",
            genre: "accion",
            year: 2008,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "El mejor Batman de la historia" }
        await axios.put(`${server}/review/m5`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m6`, {
            title: "Pulp Fiction",
            genre: "crimen",
            year: 1994,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Diálogos increíbles y muy original" }
        await axios.put(`${server}/review/m6`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m7`, {
            title: "Super Mario Galaxy: The Movie",
            genre: "sci-fi",
            year: 2026,
            in_cinema: true
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Gran nuevo estreno" }
        await axios.put(`${server}/review/m7`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m8`, {
            title: "The Matrix",
            genre: "sci-fi",
            year: 1999,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Un clásico de la ciencia ficción" }
        await axios.put(`${server}/review/m8`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m9`, {
            title: "Forrest Gump",
            genre: "drama",
            year: 1994,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Inspiradora y muy conocida" }
        await axios.put(`${server}/review/m9`, reviewData)

        // Añadir una película
        await axios.put(`${server}/movie/m10`, {
            title: "Avengers: Endgame",
            genre: "accion",
            year: 2019,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Un final épico para la saga" }
        await axios.put(`${server}/review/m10`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m11`, {
            title: "Oppenheimer",
            genre: "drama",
            year: 2023,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Muy intensa y espectacular visualmente" }
        await axios.put(`${server}/review/m11`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m12`, {
            title: "Barbie",
            genre: "comedia",
            year: 2023,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 4, comment: "Divertida y sorprendente" }
        await axios.put(`${server}/review/m12`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m13`, {
            title: "Dune",
            genre: "sci-fi",
            year: 2021,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Impresionante ciencia ficción" }
        await axios.put(`${server}/review/m13`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m14`, {
            title: "Dune: Part Two",
            genre: "sci-fi",
            year: 2024,
            in_cinema: true
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Una secuela increíble" }
        await axios.put(`${server}/review/m14`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m15`, {
            title: "Top Gun: Maverick",
            genre: "accion",
            year: 2022,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Acción brutal y nostalgia" }
        await axios.put(`${server}/review/m15`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m16`, {
            title: "Spider-Man: No Way Home",
            genre: "accion",
            year: 2021,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Muy emocionante para fans de Marvel" }
        await axios.put(`${server}/review/m16`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m17`, {
            title: "Interstellar",
            genre: "sci-fi",
            year: 2014,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Una de las mejores de Nolan" }
        await axios.put(`${server}/review/m17`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m18`, {
            title: "Joker",
            genre: "drama",
            year: 2019,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Interpretación espectacular" }
        await axios.put(`${server}/review/m18`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m19`, {
            title: "Avatar: The Way of Water",
            genre: "sci-fi",
            year: 2022,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 4, comment: "Visualmente impresionante" }
        await axios.put(`${server}/review/m19`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m20`, {
            title: "Gladiator",
            genre: "accion",
            year: 2000,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Un clásico épico" }
        await axios.put(`${server}/review/m20`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m21`, {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            genre: "fantasia",
            year: 2001,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Una aventura legendaria" }
        await axios.put(`${server}/review/m21`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m22`, {
            title: "The Lord of the Rings: The Two Towers",
            genre: "fantasia",
            year: 2002,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Excelente continuación" }
        await axios.put(`${server}/review/m22`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m23`, {
            title: "The Lord of the Rings: The Return of the King",
            genre: "fantasia",
            year: 2003,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Final épico y memorable" }
        await axios.put(`${server}/review/m23`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m24`, {
            title: "John Wick",
            genre: "accion",
            year: 2014,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 4, comment: "Acción pura y entretenida" }
        await axios.put(`${server}/review/m24`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m25`, {
            title: "John Wick: Chapter 4",
            genre: "accion",
            year: 2023,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "La mejor de la saga" }
        await axios.put(`${server}/review/m25`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m26`, {
            title: "The Batman",
            genre: "accion",
            year: 2022,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 4, comment: "Muy oscura y bien hecha" }
        await axios.put(`${server}/review/m26`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m27`, {
            title: "Mission: Impossible - Dead Reckoning",
            genre: "accion",
            year: 2023,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 4, comment: "Tom Cruise nunca falla" }
        await axios.put(`${server}/review/m27`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m28`, {
            title: "Deadpool",
            genre: "comedia",
            year: 2016,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 4, comment: "Muy divertida y diferente" }
        await axios.put(`${server}/review/m28`, reviewData)


        // Añadir una película
        await axios.put(`${server}/movie/m29`, {
            title: "Wonka",
            genre: "fantasia",
            year: 2023,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 4, comment: "Muy entretenida y familiar" }
        await axios.put(`${server}/review/m29`, reviewData)

        // Añadir una película
        await axios.put(`${server}/movie/m30`, {
            title: "Star Wars: Episodio 2- El ataque de los clones",
            genre: "sci-fi",
            year: 2002,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 4, comment: "Muy entretenida pero no me gusta las escenas de amor" }
        await axios.put(`${server}/review/m30`, reviewData)

        // Añadir una película
        await axios.put(`${server}/movie/m31`, {
            title: "Star Wars: Episodio 3- La venganza de los Siths",
            genre: "sci-fi",
            year: 2005,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Puro cine" }
        await axios.put(`${server}/review/m31`, reviewData)

        // Añadir una película
        await axios.put(`${server}/movie/m32`, {
            title: "Star Wars: Episodio 4- Una nueva esperanza",
            genre: "sci-fi",
            year: 1977,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "El inicio de una trilogía mítica" }
        await axios.put(`${server}/review/m32`, reviewData)

        // Añadir una película
        await axios.put(`${server}/movie/m33`, {
            title: "Star Wars: Episodio 5- El Imperio contraataca",
            genre: "sci-fi",
            year: 1980,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Historia del cine" }
        await axios.put(`${server}/review/m33`, reviewData)

        // Añadir una película
        await axios.put(`${server}/movie/m34`, {
            title: "Star Wars: Episodio 6- El retorno del Jedi",
            genre: "sci-fi",
            year: 1983,
            in_cinema: false
        })

        // Añadir valoración
        reviewData = { rating: 5, comment: "Que gran cierre" }
        await axios.put(`${server}/review/m34`, reviewData)
        
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