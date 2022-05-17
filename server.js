const db = require('./db/connection')
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const inputCheck = require('./utils/inputCheck')

const apiRoutes = require('./routes/apiRoutes')

// Express middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api', apiRoutes)


// Default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end()
})

db.connect(err => {
    if(err) throw err
    console.log(`Database connected.`)
    app.listen(PORT, () => {
        console.log(`Server now live on port ${PORT}`)
    })
})
