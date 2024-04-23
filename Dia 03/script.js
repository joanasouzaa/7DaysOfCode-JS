const areaEscolhida = prompt("Você quer seguir para área de 'Front-End' ou 'Back-End'?");
let linguagem = '';

if(areaEscolhida === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?")
} else if(areaEscolhida === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java")
} else{
    alert("Você não inseriu uma área válida")
}

const especialidadeOuFull = Number(prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para se tornar um dev Fullstack"))
if(especialidadeOuFull === 1){
    alert(`Continue se especializando em ${linguagem}`)
} else if(especialidadeOuFull === 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack`)
}else{
    alert("Você inseriu um valor inválido")
}

let mensagemAoUsuario = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.")
while (mensagemAoUsuario === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia legal!`)
    mensagemAoUsuario = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.")
}
