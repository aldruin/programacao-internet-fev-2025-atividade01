import express from "express";
import autenticar from "./security/auth.js";
import session from "express-session";

const app = express();

//configura como o express processará os parâmetros do formulário
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "s3gr3d0",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 30 //30min de sessao
  }
}));


//o HTTP por ser stateless não se preocupa em identificar os atores envolvidos,
//ele recebe, processa e envia uma resposta à requisição feita.

//usando express-session, implementamos a habilidade de estabelecer uma sessão
//conhecendo determinado usuário

//rotas

app.get("/login", (req, res) => {
  resposta.redirect('/login.html');
})

app.post("/login", (req, res) => {
  const { usuario, senha } = req.body; // obtem os dados de usuario do corpo da requisição

  const redirectTo = req.session.redirectTo || '/'; //usa o redirecionamento armazenado pela sessão ou envia para pagina inicial '/'

  if (usuario === "admin" && senha === "admin") { // verifica se o usuario e senha estao certos
    req.session.autenticado = true; //define como valido
    res.redirect(redirectTo);
  } else {
    res.redirect('/login.html'); // caso falhe o login, volta para a pagina de login
  }
});

app.get("/logout", (req, res) => {
  res.session.destroy();
  res.redirect('/login.html');
});

//middleware para arquivos estaticos 
app.use(express.static('src/views/public'));
app.use(autenticar, express.static('src/views/private'));




export default app;