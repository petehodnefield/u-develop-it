const mysql = require('mysql2')
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

module.exports = db