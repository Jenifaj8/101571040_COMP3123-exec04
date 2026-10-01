const express = require("express");
const app = express();

app.use(express.json());

// Serve Static files
app.use(express.static("public"));

// GET hello
app.get("/hello", (req, res) => {
    res.type("text/plain").send("Hello Express JS");
});

// GET /user first name and last name
app.get("/user", (req, res) => {
    const firstname = req.query.firstname || "Jenifa";
    const lastname = req.query.lastname || "Joseph";
    res.json({ firstname, lastname});
});

// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

// POST /users expect array of firstname, lastname
app.post("/users", (req, res) => {
    const users = Array.isArray(req.body) ? req.body : [];
    res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
