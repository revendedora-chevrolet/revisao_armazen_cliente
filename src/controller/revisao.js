const db = [];
let nextId = 1;

const model = (revisao, id = nextId++) => {
  if (
    revisao.dono != undefined &&
    revisao.dono != "" &&
    revisao.modelo != undefined &&
    revisao.modelo != "" &&
    revisao.kmRodado != undefined &&
    !isNaN(revisao.kmRodado) && 
    revisao.problema != undefined &&
    revisao.problema != ""
  ) {
    return {
      id,
      dono: revisao.dono,
      modelo: revisao.modelo,
      kmRodado: revisao.kmRodado,
      problema: revisao.problema,
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