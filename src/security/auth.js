export default function autenticar(req, res, next) {
  console.log("Verificando autenticação:", req.session);
  if (req.session?.autenticado) {
    return next(); // se ja estiver autenticado, continua a requisição e passa para a proxima fase
  } else {
    if (!req.originalUrl.includes('/favicon.ico')) {
      req.session.redirectTo = req.originalUrl;
    }
    res.redirect('/login.html'); //se não, salva a url original com os dados da viagem e manda para pagina de login
  }
}