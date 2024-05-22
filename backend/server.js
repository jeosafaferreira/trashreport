import express from 'express'
import reportsController from './controllers/reportsController.js' 
const app = express()
const port = 3000

app.get('/', (req, res) => { res.send('Fogo no parquinho!')})
app.get('/reports', reportsController.list)

app.listen(port, () => {
    console.log("Running!")
})