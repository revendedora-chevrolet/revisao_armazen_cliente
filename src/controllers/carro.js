const estadoCarroController = require('./estadoCarro.js');
const db = []
let nextID = 1;

const model = (body, id = nextID++) => {
    if(
        body.estadoID != undefined,
        body.estadoID != "",
        estadoCarroController.show(body.estadoID),
        body.marca != undefined,
        body.marca != "",
        body.modelo != undefined,
        body.modelo != "",
        body.preco > 0,
        body.preco != undefined

    ){
        return {
            id,
            estadoID: body.estadoID,
            marca: body.marca,
            modelo: body.modelo,
            preco: body.preco
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