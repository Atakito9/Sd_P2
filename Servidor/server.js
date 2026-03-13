import express from 'express'
import bodyParser from 'body-parser'

const PORT = 8080
const MIN_RATING = 1
const MAX_RATING = 5
const VALOR_NULO = 0
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let movies = []
let reviews = []

app.get('/', (req, res) => {
    res.send('Main page')
    //Importante: Ejecutar res.send siempre para poder
    //completar la petición, y no dejar la conexión pendiente,
    //incluso si no se quiere enviar nada de vuelta
})

app.get('/movie', (req, res) => {
    let result = movies
    const queryParams = Object.keys(req.query)
    
    // Aplicación simbólica de filtros: aplicamos todos los parámetros indicados
    // Si el array de parámetros está vacío, devuelve todas las películas
    if (queryParams.length > VALOR_NULO) {
        queryParams.forEach(key => {
            result = result.filter(m => String(m[key]) === String(req.query[key]))
        })
    }
    
    res.send(result)
})


app.put('/movie/:id', (req, res) => {
    const movieId = req.params.id
    const movieData = req.body
    
    const index = movies.findIndex(m => m.id === movieId)
    
    if (index >= VALOR_NULO) {
        // Si existe, se actualiza
        movies[index] = { id: movieId, ...movieData }
    } else {
        // Si no existe, se crea
        movies.push({ id: movieId, ...movieData })
    }
    
    res.send({ status: 'success', id: movieId })
})

app.delete('/movie/:id', (req, res) => {
    const movieId = req.params.id
    const index = movies.findIndex(m => m.id === movieId)
    
    if (index < VALOR_NULO) {
        // Si no existe se devuelve un error
        return res.status(404).send({ error: 'Movie not found' })
    }
    
    movies.splice(index, 1)
    // Se eliminan también las valoraciones asociadas
    reviews = reviews.filter(r => r.movieId !== movieId)
    
    res.send({ status: 'deleted' })
})

app.get('/review/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieReviews = reviews.filter(r => r.movieId === movieId).map(({ rating, comment }) => ({ rating, comment }))
    
    res.send(movieReviews)
})

// Añadir una valoración
app.put('/review/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const { rating, comment } = req.body
    
    // Comprobar que la película existe
    const movieExists = movies.some(m => m.id === movieId)
    if (!movieExists) {
        return res.status(404).send({ error: 'Movie not found' })
    }
    
    // Rating debe estar entre los límites establecidos
    if (!Number.isInteger(rating) || rating < MIN_RATING || rating > MAX_RATING) {
        return res.status(400).send({ error: `Rating must be an integer between ${MIN_RATING} and ${MAX_RATING}` })
    }
    
    reviews.push({ movieId, rating, comment })
    res.send({ status: 'success' })
})

// Eliminar valoraciones de una película [cite: 81]
app.delete('/review/:movieId', (req, res) => {
    const movieId = req.params.movieId
    
    // Comprobar que la película existe [cite: 84]
    const movieExists = movies.some(m => m.id === movieId)
    if (!movieExists) {
        return res.status(404).send({ error: 'Movie not found' }) // [cite: 85]
    }
    
    // Eliminar todas las valoraciones asociadas [cite: 86]
    reviews = reviews.filter(r => r.movieId !== movieId)
    res.send({ status: 'reviews deleted' })
})


// --- CONSULTAS Y ESTADÍSTICAS ---

// Obtener valoración media de una película
app.get('/rating/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieReviews = reviews.filter(r => r.movieId === movieId)
    const nReviews = movieReviews.length
    
    // Cálculo simbólico de la media
    let average = VALOR_NULO // Si no existen valoraciones la media será 0
    if (nReviews > VALOR_NULO) {
        const sum = movieReviews.reduce((acc, curr) => acc + curr.rating, VALOR_NULO)
        average = sum / nReviews
    }
    
    res.send({ movie: movieId, reviews: nReviews, average })
})

// Obtener estadísticas globales
app.get('/stats', (req, res) => {
    const totalMovies = movies.length
    const totalReviews = reviews.length
    
    let averageRating = VALOR_NULO // Si no existen valoraciones la media será 0
    if (totalReviews > VALOR_NULO) {
        const sum = reviews.reduce((acc, curr) => acc + curr.rating, VALOR_NULO)
        averageRating = sum / totalReviews // Media de todas las valoraciones
    }
    
    res.send({ movies: totalMovies, reviews: totalReviews, average_rating: averageRating })
})
// Búsqueda en comentarios
app.get('/search', (req, res) => {
    const searchText = req.query.text ? req.query.text.toLowerCase() : ''
    
    const results = movies.map(movie => {
        const movieReviews = reviews.filter(r => r.movieId === movie.id)
        // La búsqueda no distingue entre mayúsculas y minúsculas
        const matches = movieReviews.filter(r => r.comment && r.comment.toLowerCase().includes(searchText)).length
        
        return { id: movie.id, title: movie.title, matches }
    }).filter(movie => movie.matches > VALOR_NULO) // Solo se devolverán películas con coincidencias
    
    res.send(results)
})

const server = app.listen(PORT, () => console.log("listening at localhost:"+PORT))
