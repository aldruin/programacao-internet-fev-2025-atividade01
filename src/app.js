import express from "express";

const app = express();

//middleware para arquivos estaticos 
app.use(express.static('src/views/public'));


export default app;