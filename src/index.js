const express = require("express")
const revisao_controller = require("./controller/revisao.js")
const cliente_controller = require("./controller/cliente.js")
const app = express()
const port = 3000;

app.use(express.json());


app.post("/revisao", (req, res) => {
    const revisao = req.body;
    const code = revisao_controller.store(revisao);
    res.status(code).json();
    
});

app.get("/revisao", (req, res) => {
    res.json(revisao_controller.index());
});

app.get("/revisao/:id", (req, res) => {
    const revisao = revisao_controller.show(req.params.id);
    res.json(revisao);
});

app.put("/revisao/:id", (req,res) => {
    const revisao = req.body 
    const code = revisao_controller.update(req.params.id, revisao)
    res.status(code).json()
});

app.delete("/revisao/:id", (req, res) => {
    revisao_controller.destroy(req.params.id)
    res.json()
});

// CLIENTE
app.post("/cliente", (req, res) => {
    const cliente = req.body;
    const code = cliente_controller.store(cliente);
    res.status(code).json();
    
});

app.get("/cliente", (req, res) => {
    res.json(cliente_controller.index());
});

app.get("/cliente/:id", (req, res) => {
    const cliente = cliente_controller.show(req.params.id);
    res.json(cliente);
});

app.put("/cliente/:id", (req,res) => {
    const cliente = req.body 
    const code = cliente_controller.update(req.params.id, cliente)
    res.status(code).json()
});

app.delete("/cliente/:id", (req, res) => {
    cliente_controller.destroy(req.params.id)
    res.json()
});



app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})

