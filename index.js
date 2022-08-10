require('dotenv').config();
const db = require("./db");

const Usuario = require("./model/Usuario");
const Route = require("./routes/RouteGeneric");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authorization = require("./authorization.js"); 
const Controller = require("./controller/ControllerGeneric.js");
const express = require("express");


const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(8080, ()=> { 
  console.log("API executando!")
});

async function sincronizar() { 
  await db.sync()
}

async function conectar() {

  try {
    await db.authenticate();
    console.log("Sucesso!");
  } catch (e) {
    console.log(e, "Falhou!");
  }
  }

app.get("/", (req, res) => {
res.json({message:"API de usuários"})
});

async function gerarHash(senha) {
  return await bcryptjs.hash(senha, 10)
}

Route("/usuario", app, new Controller(Usuario), authorization );

app.post("/cadastrar", async (req, res) => {
  try {
    const {nome, data_nascimento, email, username, senha} = req.body;
    const usuario = await Usuario.create({nome, data_nascimento, email, username, senha:( await gerarHash(senha))});
    usuario.senha = undefined;
    res.status(200).send(usuario);
} catch(e) {
  res.status(403).send("Já existe.");
}
});

app.post("/autenticar", async (req, res) => {
  const { email, senha} = req.body;
  const usuario = await Usuario.findOne({where:{email}}); 
  if(!usuario || !senha) {
     res.status(400).send("Credenciais inválidas");
  } else if(bcryptjs.compareSync(senha, usuario.senha)){
    const token = jwt.sign(
      {email},
      process.env.SECRET,
      {expiresIn:3600}
    );
   res.send({email, token});
  } else {
    res.status(400).send("Credenciais inválidas");
  }
});

//sincronizar();
//conectar();

