import express from "express"
import cors from "cors"
import path from "path";
import { weatherData } from "./data.mjs"
// import { json } from "body-parser"
const app = express()
const port = 3000

const __dirname = path.resolve()
app.use("/", express.static(path.join(__dirname, "./web/dist")));

app.use(cors())

app.get('/', (req, res) => {
  res.send("Welcome to my Express Server!")
})

app.get("/api/weather", (req, res) => {
    res.json(weatherData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})