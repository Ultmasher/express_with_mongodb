import express from 'express';
import countryRouter from './routes/countryRouter.js'
import bodyParser from 'body-parser';
const PORT = 8654
const app = express()

app.use(bodyParser.json())
app.use("/api/countries", countryRouter)
console.log ("server läuft auf port 8000")


app.listen(PORT, () => console.log(`server läuft auf ${PORT}`))