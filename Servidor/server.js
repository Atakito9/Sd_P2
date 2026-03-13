import express from 'express'
import bodyParser from 'body-parser'

const PORT = 8080
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello World I am running locally')
    //Importante: Ejecutar res.send siempre para poder
    //completar la petición, y no dejar la conexión pendiente,
    //incluso si no se quiere enviar nada de vuelta
})
const server = app.listen(PORT, () => console.log("listening at localhost:"+PORT))
