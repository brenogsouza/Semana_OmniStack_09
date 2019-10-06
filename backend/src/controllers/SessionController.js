// metodos : index , show, store, update, destroy
// index: para retornar uma listagem referente a sessões
// show: para retornar uma unica sessao
// store: creiar uma sessao
// update: alterar uma sessao
// destroy: remover uma sessao
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    // criando um usuário
    const { email } = req.body;

    let user = await User.findOne({ email });

    // verificando se o usuário já existe
    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
