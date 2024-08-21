const db = [];
let nextId = 1;

const model = (cliente, id = nextId++) => {
  if (
    cliente.nome != undefined &&
    cliente.nome!= "" &&
    cliente.telefone != undefined &&
    cliente.telefone != "" &&
    cliente.CPF != undefined &&
    !isNaN(cliente.CPF) && 
    cliente.RG!= undefined &&
    cliente.RG!= "" &&
    !isNaN(cliente.RG)
  ) {
    return {
      id,
      nome: cliente.nome,
      telefone: cliente.telefone,
      CPF: cliente.CPF,
      RG: cliente.RG,
    };
  }

  return null; 
};

const store = body => {
    const novo = model(body);

    if(novo) {
        db.push(novo);
        return 201;
    }
    return 400; 
};

const index = () => db;

const show = id => db.find(el => el.id == id)

const update = (id, body ) => {
    const index = db.findIndex(el => el.id == id)
    const novo = model(body, parceInt (id))

    if(novo && index != -1) {
        db[index] = novo; 
        return 200;
    }
    return 400;
};

const destroy = id => {
    const index = db.findIndex(el => el.id == id)

    if(index != -1) {
        db.splice(index, 1)
    }
};

module.exports = {
    store,
    index, 
    show,
    update,
    destroy
};