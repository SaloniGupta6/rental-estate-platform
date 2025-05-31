const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import("./Schemas/PropertySchema");
import("./Schemas/PropHoldingSchema");
import("./Schemas/MessageSchema");
import("./Schemas/LegalDocumentSchema");    

mongoose.connect("monodb: //")
const users = [{ email: "test@example.com", password: "password123" }];

//login endpoint
app.post("/user/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(200).json({ message: "Invalid" });
  }
  const token = jwt.sign({ email: user.email }, "your_jwt_secret", {
    expiresIn: "1h",
  });
  res.json({ token });
});

//register endpoint
app.post("/user/register", (req, res) => {
  const { email, password } = req.body;
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(200).json({ message: "User already exists" });
  }
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
