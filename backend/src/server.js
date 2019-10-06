const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://brenolopes:breno0116@cluster0-nujg2.mongodb.net/semana09?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// GET , POST , PUT , DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição ( para criação, edição de registros)

app.use(express.json());
app.use(routes);

app.listen(3333);
