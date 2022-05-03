const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db =mysql.createConnection(
    {
        host:'localhost',
        user: 'root',
        password: 'Shorro88!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on your port ${PORT}`);
});