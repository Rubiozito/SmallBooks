import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Curso de express API",
  "/livros": "Rota Livros",
  "/autores": "Rota Autores",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log("Servidor online");
});
