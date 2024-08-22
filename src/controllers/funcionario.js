const concessionariaController = require('./concessionaria.js');
const db = []
let nextID = 1;

const model = (body, id = nextID++) => {
    if(
        concessionariaController.show(body.idConcessionaria),
        body.idConcessionaria != undefined,
        body.cargo != undefined,
        body.cargo != "",
        body.nome != undefined,
        body.nome != "",
        body.turno != undefined,
        body.turno != "",
        body.horasTotais != undefined,
        body.horasTotais != ""
        
    ){
        return {
            id,
            idConcessionaria: body.idConcessionaria,
            Cargo: body.cargo,
            nome: body.nome,
            horas: body.horasTotais,
            turno: body.turno
        }
    }
}

const store = body => {
    const novo = model(body);
    if(novo){
        db.push(novo);
        return 201
    }
    return 400
}

const index = () => db;

const show = id => db.find(el => el.id == id);

const update = (body, id) => {
    const index = db.findIndex(el => el.id == id);
    const novo = model(body, parseInt(id));
    if(novo && index != -1){
        db[index] = novo;
        return 200
    }
    return 400
}

const destroy = id => {
    const index = db.findIndex(el => el.id == id);
    if(index != -1){
        db.splice(index,1);
        return 200
    }
    return 400;
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy,
}