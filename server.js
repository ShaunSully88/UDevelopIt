const mysql = require('mysql2');
const db = require('./db/connection');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const inputCheck = require('./utils/inputCheck');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use('/api', apiRoutes);





const params = [1, 'Ronald', 'Firbank', 1];

app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
app.listen(PORT, () => {
    console.log(`Server running on your port ${PORT}`);
});
});

