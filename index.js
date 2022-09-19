

const pizzaMussarela = {
    nome: "pizza mussarela",
    preço: 10,
    disponivel: true,
    ingredientes: ["farinha", "queijo", "tomate"]
}


//Semana 3
//Ex1 - loop para traforar array em string

let ingredientesString= ""

for(let i=0;i<pizzaMussarela.ingredientes.length; i++){
    ingredientesString += pizzaMussarela.ingredientes[i] + ", "
}

console.log(ingredientesString)

pizzaMussarela.ingredientes = ingredientesString

console.log(`RELATORIO:
${pizzaMussarela.nome}
${pizzaMussarela.preço}
`)


//Ex 3 - função para tranasforma objeto em string

function mudarPraString(comida){
    for(i in comida){
        comidaString += comida[i] + ", "
    }
    return comidaString
}



