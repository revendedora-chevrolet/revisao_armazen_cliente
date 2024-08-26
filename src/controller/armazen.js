const db = [];
let nextId = 1;

const model = (armazen, id = nextId++) => {
  if (
    armazen.Npeca != undefined &&
    armazen.Npeca!= "" &&
    armazen.modelo != undefined &&
    armazen.modelo != "" &&
    armazen.quantidade != undefined &&
    !isNaN(armazen.quantidade) 
  ) {
    return {
      id,
      Npeca: armazen.Npeca,
      modelo: armazen.modelo,
      quantidade: armazen.quantidade,
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