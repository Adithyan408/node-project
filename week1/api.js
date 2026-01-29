import { application } from "express";
import { createServer } from "http";
const PORT = 5050;

const users = [
  { id: 1, name: "Adithyan" },
  { id: 2, name: "Manu" },
  { id: 3, name: "Sumesh" },
];

const logger = (req, res, next) => {
  console.log(`${req.method}  ${req.url}`);
  next();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    if (req.url === "/api/users" && req.method === "GET") {
      res.setHeader("content-Type", "application/json");
      res.write(JSON.stringify(users));
      res.end();
    } else {
      res.setHeader("content-Type", "application/json");
      res.write(JSON.stringify({ message: "Route Not found" }));
      res.end();
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is Running on port http://localhost:${PORT}`);
});
