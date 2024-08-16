const express = require("express");
const generateNews = require("./generateNews");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const bcrypt = require("bcrypt");
const ContactModel = require("./models/Contact");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://127.0.0.1:27017/website");

app.get("/", (req, res) => {
  res.send({
    message: "Hello World",
  });
});

app.get("/api/news", async (req, res) => {
  try {
    const news = await generateNews();
    res.status(200).json(news);
  } catch (error) {
    console.error(`Error fetching news: ${error}`);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields." });
  }

  UserModel.findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        return res
          .status(400)
          .json({
            message: "Email already in use. Use a different email",
          });
      }
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          UserModel.create({ name, email, password: hash })
            .then((register) =>
              res.json({ message: "Registered successfully", user: register })
            )
            .catch((err) => res.status(500).json({ error: err.message }));
        })
        .catch((err) => res.status(500).json({ error: err.message }));
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          res.json("Success");
        } else {
          res.json("Incorrect Password");
        }
      });
    } else {
      res.json("Invalid Email");  
    }  
  });
});

app.get("/api/user", async (req, res) => {
  try {
    const users = await UserModel.find({}, { name: 1, email: 1, _id: 0 });
    res.status(200).json(users);
  } catch (error) {
    console.error(`Error fetching users: ${error}`);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.post("/submit-form", async (req, res) => {
  const { name, phoneNumber, email, message } = req.body;

  // Assuming you have a model named ContactModel for storing form submissions
  try {
    const result = await ContactModel.create({
      name,
      phoneNumber,
      email,
      message,
    });
    res
      .status(200)
      .json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
