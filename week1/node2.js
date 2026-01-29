import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "message.txt");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "content-Type": "text/plain" });
      res.end("Error Reading file");
    } else {
      res.writeHead(200, { "content-Type": "text/plian" });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server is Running on port http://localhost:3000");
});
























//