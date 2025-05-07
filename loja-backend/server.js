const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const carrinho = []; // Array temporário para armazenar os produtos

// Adicionar produto ao carrinho
app.post("/adicionar", (req, res) => {
    const produto = req.body;
    carrinho.push(produto);
    res.json({ message: "Produto adicionado!", carrinho });
});

// Listar produtos do carrinho
app.get("/carrinho", (req, res) => {
    res.json(carrinho);
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => console.log("🚀 Servidor rodando na porta 3000"));