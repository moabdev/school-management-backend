import express from "express";

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Olá, este é meu primeiro servidor criado com express!");
})

server.listen("3000", () => {
  console.log("Servidor iniciado na porta 3000" + "http://localhost:3000");
})