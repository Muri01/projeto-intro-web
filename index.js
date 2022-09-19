const pizzaMussarela = {
    nome: "pizza mussarela",
    preço: 10,
    disponivel: true
}
const pizzaPalmito = {
    nome: "pizza de palmito",
    preço: 12,
    disponivel: true
}

const comidas = []


if (pizzaMussarela.disponivel){
    comidas.push(pizzaMussarela)
}
comidas.push(pizzaMussarela, pizzaPalmito)


for(elemento in elementos){
    console.log(elemento.item);
  }