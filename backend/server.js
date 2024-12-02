const express = require('express');
const mysql = require('mysql');
const bodyParser =  require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'moborbitx',
})


db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MYSQL database')
})


app.get('/', (req, res)=> {
    return res.json("from backend");
})

app.get('/admin_master' , (req, res) => {
    db.query('SELECT * FROM admin_master', (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            return res.json(data);
        }
    })
})

app.post('/admin_master', (req, res) => {
    const { email, password } = req.body;
    console.log(req, req.body, "ddd")
    const sql = 'INSERT INTO admin_master (email_id, password) VALUES (?, ?)';

    db.query(sql, [email, password], (err, data) => {
        if (err) {
            // Handle error - return response with the error message
            return res.status(500).json({ error: 'Failed to insert data', details: err });
        } else {
            // On successful insertion, return response with the result
            return res.status(200).json({
                message: 'Data inserted successfully',
                data: data
            });
        }
    });
});




app.listen(port, ()=> {
    console.log('listening')
})