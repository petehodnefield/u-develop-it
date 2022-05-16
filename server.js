const mysql = require('mysql2')
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

// Express middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// Connect to a database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your username
        user: 'root',
        // Your MySQL password
        password: 'Yayaily!?38',
        database: 'election'
    },
    console.log(`Connected to the election database.`)
)

// // Get a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, rows) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(rows)
// })

// // Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(result)
// })

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
                VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1]

db.query(sql, params, (err, result) => {
    if(err) {
        console.log(err)
    }
    console.log(result)
})

// Default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end()
})
app.listen(PORT, () => {
    console.log(`Server now live on port ${PORT}`)
})