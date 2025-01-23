const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const port = 5000;
const saltRounds = 10;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  session({
    secret: "cec48390bfce7ee2e747a444ecb8598c",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moborbitx",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MYSQL database");
});

app.get("/", (req, res) => {
  return res.json("from backend");
});

app.get("/admin_master", (req, res) => {
  db.query("SELECT * FROM admin_master", (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.post("/sign_up", (req, res) => {
  const { name, email, password, userRole } = req.body;

  const checkEmailSql = "SELECT * FROM admin_master WHERE email_id = ?";
  db.query(checkEmailSql, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error", details: err });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: "Email already exists" });
    } else {
      bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
          return res
            .status(500)
            .json({ error: "Failed to hash password", details: err });
        }

        const insertSql =
          "INSERT INTO admin_master (name, email_id, password, type) VALUES (?, ?, ?, ?)";
        db.query(
          insertSql,
          [name, email, hashedPassword, userRole],
          (err, data) => {
            if (err) {
              return res
                .status(500)
                .json({ error: "Failed to insert data", details: err });
            } else {
              return res.status(200).json({
                message: "Data inserted successfully",
                data: data,
              });
            }
          }
        );
      });
    }
  });
});

app.post("/sign_in", (req, res) => {
  const { email, password } = req.body;

  const checkSql = "SELECT * FROM admin_master WHERE email_id = ?";

  db.query(checkSql, [email], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to check credentials", details: err });
    }

    if (results.length > 0) {
      const storedHashedPassword = results[0].password;

      // Compare the provided password with the stored hashed password
      bcrypt.compare(password, storedHashedPassword, (err, isMatch) => {
        if (err) {
          return res
            .status(500)
            .json({ error: "Error comparing passwords", details: err });
        }

        if (isMatch) {
          if (results[0].status == 1) {
            req.session.user = results[0];
            return res.status(200).json({
              message: "Login successful",
              success: true,
              user: {
                created_at: results[0].created_at,
                email_id: results[0].email_id,
                id: results[0].id,
                name: results[0].name,
                status: results[0].status,
                type: results[0].type,
              },
            });
          } else {
            return res.status(401).json({
              error: "Your account is deactivated!",
            });
          }
        } else {
          return res.status(401).json({
            error: "Invalid password",
          });
        }
      });
    } else {
      return res.status(401).json({
        error: "Invalid email",
      });
    }
  });
});

// app.get("/user", (req, res) => {
//   if (req.session.user) {
//     return res.status(200).json({
//       message_user: "User data fetched successfully",
//       success: true,
//       user: req.session.user,
//     });
//   } else {
//     return res.status(401).json({ error: "Unauthorized" });
//   }
// });

app.post("/sign_out", (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to sign out", details: err });
    }

    res.clearCookie("connect.sid");

    return res.status(200).json({
      message_logout: "Sign out successful",
      success: true,
    });
  });
});


app.get("/graph", (req, res) => {
  db.query("SELECT * FROM report_subid_hourly", (err, data) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).json({ error: "Database query failed", details: err });
    }
    res.json(data);
  });
});






app.listen(port, () => {
  console.log("listening");
});
