const express = require('express');
const app = express();
const port = 3000
const concessionariaController = require('./controllers/concessionaria.js');
const estadoCarroController = require('./controllers/estadoCarro.js');
const carroController = require('./controllers/carro.js');
const funcionarioController = require('./controllers/funcionario.js');

app.use(express.json());

//GERENCIAMENTO CONCESSIONÁRIA

app.post("/concessionaria", (req, res) => {
    const concessionaria = req.body;
    const code = concessionariaController.store(concessionaria);
    res.status(code).json();
});

app.get("/concessionaria", (req, res) => {
    res.json(concessionariaController.index);
});

app.get("/concessionaria/:id", (req,res) => {
    const concessionaria = concessionariaController.show(req.params.id);
    res.json(concessionaria);
});

app.put("concessionaria/:id", (req,res) => {
    const concessionaria = req.body;
    const code = concessionariaController.update(concessionaria, req.params.id);
    res.status(code).json();
});

app.delete("concessionaria/:id", (req,res) => {
    concessionariaController.destroy(req.params.id);
    res.json();    
});

//GERENCIAMENTO ESTADO DE USO DO CARRO
app.post("/estadoCarro", (req, res) => {
    const estadoCarro = req.body;
    const code = estadoCarroController.store(estadoCarro);
    res.status(code).json();
});

app.get("/estadoCarro", (req, res) => {
    res.json(estadoCarroController.index);
});

app.get("/estadoCarro/:id", (req,res) => {
    const estadoCarro = estadoCarroController.show(req.params.id);
    res.json(estadoCarro);
});

app.put("estadoCarro/:id", (req,res) => {
    const estadoCarro = req.body;
    const code = estadoCarroController.update(estadoCarro, req.params.id);
    res.status(code).json();
});

app.delete("estadoCarro/:id", (req,res) => {
    estadoCarroController.destroy(req.params.id);
    res.json();    
});

//GERENCIAMENTO DE CARROS
app.post("/carro", (req, res) => {
    const carro = req.body;
    const code = carroController.store(carro);
    res.status(code).json();
});

app.get("/carro", (req, res) => {
    res.json(carroController.index);
});

app.get("/carro/:id", (req,res) => {
    const carro = carroController.show(req.params.id);
    res.json(carro);
});

app.put("carro/:id", (req,res) => {
    const carro = req.body;
    const code = carroController.update(carro, req.params.id);
    res.status(code).json();
});

app.delete("carro/:id", (req,res) => {
    carroController.destroy(req.params.id);
    res.json();    
});
//GERENCIMENTO DE FUNCIONÁRIOS
app.post("/funcionario", (req, res) => {
    const funcionario = req.body;
    const code = funcionarioController.store(funcionario);
    res.status(code).json();
});

app.get("/funcionario", (req, res) => {
    res.json(funcionarioController.index);
});

app.get("/funcionario/:id", (req,res) => {
    const funcionario = funcionarioController.show(req.params.id);
    res.json(funcionario);
});

app.put("funcionario/:id", (req,res) => {
    const funcionario = req.body;
    const code = funcionarioController.update(funcionario, req.params.id);
    res.status(code).json();
});

app.delete("funcionario/:id", (req,res) => {
    funcionarioController.destroy(req.params.id);
    res.json();    
});



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

