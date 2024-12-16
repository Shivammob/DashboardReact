// const express = require("express");
// const session = require("express-session");
// const mysql = require("mysql");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const bcrypt = require("bcrypt");

// const app = express();
// const port = 5000;
// const saltRounds = 10;

// app.use(cors());
// app.use(bodyParser.json());

// app.use(
//   session({
//     secret: "cec48390bfce7ee2e747a444ecb8598c", 
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       maxAge: 24 * 60 * 60 * 1000, // 1 day
//     },
//   })
// );

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "moborbitx",
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Database connection failed:", err.stack);
//     return;
//   }
//   console.log("Connected to MYSQL database");
// });

// app.get("/", (req, res) => {
//   return res.json("from backend");
// });

// app.get("/admin_master", (req, res) => {
//   db.query("SELECT * FROM admin_master", (err, data) => {
//     if (err) {
//       return res.json(err);
//     } else {
//       return res.json(data);
//     }
//   });
// });

// app.post("/sign_up", (req, res) => {
//   const { name, email, password, userRole } = req.body;

//   const checkEmailSql = "SELECT * FROM admin_master WHERE email_id = ?";
//   db.query(checkEmailSql, [email], (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: "Database error", details: err });
//     }

//     if (results.length > 0) {
//       return res.status(400).json({ error: "Email already exists" });
//     } else {
//       bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
//         if (err) {
//           return res
//             .status(500)
//             .json({ error: "Failed to hash password", details: err });
//         }

//         const insertSql =
//           "INSERT INTO admin_master (name, email_id, password, type) VALUES (?, ?, ?, ?)";
//         db.query(
//           insertSql,
//           [name, email, hashedPassword, userRole],
//           (err, data) => {
//             if (err) {
//               return res
//                 .status(500)
//                 .json({ error: "Failed to insert data", details: err });
//             } else {
//               return res.status(200).json({
//                 message: "Data inserted successfully",
//                 data: data,
//               });
//             }
//           }
//         );
//       });
//     }
//   });
// });

// app.post("/sign_in", (req, res) => {
//   const { email, password } = req.body;

//   // SQL query to check for user in the database
//   const checkSql = "SELECT * FROM admin_master WHERE email_id = ?";

//   db.query(checkSql, [email], (err, results) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ error: "Failed to check credentials", details: err });
//     }

//     if (results.length > 0) {
//       const storedHashedPassword = results[0].password; // Get the user data

//       // Compare the provided password with the stored hashed password
//       bcrypt.compare(password, storedHashedPassword, (err, isMatch) => {
//         if (err) {
//           return res
//             .status(500)
//             .json({ error: "Error comparing passwords", details: err });
//         }

//         if (isMatch) {
//           if (results[0].status == 1) {
//             const user = results[0];
//             req.session.user = user;
//             // res.send({ message: "Login successful!", user });
//             return res.status(200).json({
//               message: "Login successful",
//               success: true,
//               users: user,
//             });
//           } else {
//             return res.status(401).json({
//               error: "Your account is deactivated!",
//             });
//           }
//         } else {
//           return res.status(401).json({
//             error: "Invalid password",
//           });
//         }
//       });
//     } else {
//       return res.status(401).json({
//         error: "Invalid email",
//       });
//     }
//   });
// });

// // Login route
// // app.post("/login", (req, res) => {
// //   const { email, password } = req.body;
// //   const query =
// //     "SELECT id, name, email FROM users WHERE email = ? AND password = ?";
// //   db.query(query, [email, password], (err, results) => {
// //     if (err) {
// //       return res.status(500).send({ error: "Database error" });
// //     }
// //     if (results.length > 0) {
// //       const user = results[0];
// //       req.session.user = user; // Store user data in session
// //       res.send({ message: "Login successful!", user });
// //     } else {
// //       res.status(401).send({ error: "Invalid email or password" });
// //     }
// //   });
// // });

// // Fetch user data from session
// app.get("/user", (req, res) => {
//   if (req.session.user) {
//     res.send({ user: req.session.user });
//   } else {
//     res.status(401).send({ error: "Unauthorized" });
//   }
// });
// // Logout route
// app.post("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       res.status(500).send({ error: "Logout failed" });
//     } else {
//       res.send({ message: "Logout successful" });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log("listening");
// });
