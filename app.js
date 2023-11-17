//Importando a o framework express para ser utilizado nesse arquivo
import express from "express";

//Cria um instancia que facilita utilizacao futura
const app = express();
//define a porta em que o nosso servidor ira rodar.
const port = 3000;

//define uma rota, onde podemos fazer uma requisicao do tipo get
app.get("/", (request, response) => {
  response.send("Hello world");
});

//a funcao listen "ouve" tudo que acontece em um determinado local/porta
//ele recebe dois parametros, onde ele ira ouvir, e uma funcao que indica o que o servidore
//ira ouvir.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//local onde voce pode abrir no seu navegador.
//http://localhost:3000/
