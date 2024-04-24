const numeroAleatorio = Math.floor(Math.random()*(10 - 1) + 1 );
let chute = '';
let acertou = false;

for(cont = 0; cont < 3; cont++){
    chute = Number(prompt("Tente adivinhar um número de 1 a 10:"));
    if(chute === numeroAleatorio){
        alert(`Parabéns você acertou! O número era ${numeroAleatorio}.`)
        acertou = true
        break
    }
    alert("Errado!")
}
if(!acertou){
    alert(`Infelizmente você não acertou. O número era ${numeroAleatorio}`)
}