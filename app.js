let especilizacao = document.getElementById('especilizacao')
let tipoEspecializcao = document.getElementById('tipoEspecializcao')
let botao = document.getElementById('botao')

let area = prompt("Você quer ser desenvolvedor 'Front-End' ou de 'Back-End'? Digite a área:");
let linguagem = "";
if (area === "Front-End") {
    linguagem = prompt("Você quer aprender React ou Vue?");
} else if (area === "Back-End") {
    linguagem = prompt("Você quer aprender C# ou Java?");
} else {
    alert("Você não inseriu uma área válida!");
}

const araeEspecial = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (araeEspecial == 1) {
    especilizacao.innerHTML = `Continue se especializando em ${linguagem} para dominar a área de ${area}!`
} else if (araeEspecial == 2) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
} else {
    alert("Você não inseriu um valor válido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok") {
    let novaTecnologia = prompt("Qual?");
    tipoEspecializcao.innerHTML = `${novaTecnologia} é realmente uma tecnologia muito legal!`
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}

if (area === "Back-End" || area === "Front-End") {
    botao.innerHTML = botao.innerHTML + "<button onclick='document.location.reload(true)'> Refaça o Quiz </button>"
} else {
    botao.innerHTML = botao.innerHTML + "<button onclick='document.location.reload(true)'> Refaça o Quiz </button>"
}