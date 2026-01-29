import express from "express";
import session from "express-session";

const app = express();
app.use(express.json());

// Session setup
app.use(session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
}));

// Hardcoded users
const USERS = {
    admin: { username: "admin", role: "admin" },
    user: { username: "user", role: "user" }
};

// "Login" route (no password, just username check for demo)
app.post("/login", (req, res) => {
    const { username } = req.body;

    if (USERS[username]) {
        req.session.user = USERS[username]; // store in session
        return res.json({ message: `Logged in as ${username}`, role: USERS[username].role });
    }

    res.status(401).json({ message: "Invalid user" });
});

// Middleware: must be logged in
function isAuthenticated(req, res, next) {
    if (req.session.user) return next();
    res.status(401).json({ message: "Not logged in" });
}

// Middleware: role check
function authorizeRole(role) {
    return (req, res, next) => {
        if (req.session.user.role !== role) {
            return res.status(403).json({ message: "Access denied" });
        }
        next();
    };
}

// Routes
app.get("/profile", isAuthenticated, (req, res) => {
    res.json({ message: `Hello ${req.session.user.username}`, role: req.session.user.role });
});

app.get("/admin", isAuthenticated, authorizeRole("admin"), (req, res) => {
    res.json({ message: "Welcome Admin, you have full access" });
});

app.get("/user", isAuthenticated, (req, res) => {
    res.json({ message: "Welcome User, limited access here" });
});

// Logout
app.post("/logout", (req, res) => {
    req.session.destroy();
    res.json({ message: "Logged out" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
