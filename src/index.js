const express = require('express');
const app = express();
const port = 3000
const concessionariaController = require('./controllers/concessionaria.js');
const estadoCarroController = require('./controllers/estadoCarro.js');

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


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});