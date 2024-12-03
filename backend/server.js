const express = require('express');
const mysql = require('mysql');
const bodyParser =  require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 5000;
const saltRounds = 10;

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



app.post('/sign_up', (req, res) => {
    const { name, email, password, userRole } = req.body;

    const checkEmailSql = 'SELECT * FROM admin_master WHERE email_id = ?';
    db.query(checkEmailSql, [email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error', details: err });
        }

        if (results.length > 0) {
            return res.status(400).json({ error: 'Email already exists' });
        } else {
            bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to hash password', details: err });
                }

                const insertSql = 'INSERT INTO admin_master (name, email_id, password, type) VALUES (?, ?, ?, ?)';
                db.query(insertSql, [name, email, hashedPassword, userRole], (err, data) => {
                    if (err) {
                        return res.status(500).json({ error: 'Failed to insert data', details: err });
                    } else {
                        return res.status(200).json({
                            message: 'Data inserted successfully',
                            data: data
                        });
                    }
                });
            });
        }
    });
});




app.post('/sign_in', (req, res) => {
    const { email, password } = req.body;
    
    // SQL query to check for user in the database
    const checkSql = 'SELECT * FROM admin_master WHERE email_id = ?';
    
    db.query(checkSql, [email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to check credentials', details: err });
        }
        
        if (results.length > 0) {
            const storedHashedPassword = results[0].password; // Get the user data

            // Compare the provided password with the stored hashed password
            bcrypt.compare(password, storedHashedPassword, (err, isMatch) => {
                if (err) {
                    return res.status(500).json({ error: 'Error comparing passwords', details: err });
                }

                if (isMatch) {
                    if(results[0].status == 1){
                        return res.status(200).json({
                            message: 'Login successful',
                            success: true,
                            user: results,
                        });
                    }else{
                        return res.status(401).json({
                            error: 'Your account is deactivated!'
                        });
                    }
                   
                } else {
                    return res.status(401).json({
                        error: 'Invalid password'
                    });
                }
            });
        } else {
            return res.status(401).json({
                error: 'Invalid email'
            });
        }
    });
});



app.listen(port, ()=> {
    console.log('listening')
})



