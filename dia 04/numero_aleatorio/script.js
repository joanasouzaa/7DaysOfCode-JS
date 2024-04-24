const numeroAdivinhar = 8
let chute = '';
let acertou = false;

for (cont = 0; cont < 3; cont++) {
    chute = Number(prompt("Tente adivinhar um número de 1 a 10:"));
    if (chute === numeroAdivinhar) {
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhar}`)
        acertou = true;
        break;
    }
    alert("Errado!")
}

if (!acertou) {
    alert(`Infelizmente você não acertou. O número era ${numeroAdivinhar}`)
}