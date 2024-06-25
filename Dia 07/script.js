function calculadoraDaJoana() {
    alert("Olá, esta é a calculadora da Jojo :)");
    const pergunta = prompt("Vamos fazer algumas contas? Digite 'sim' ou 'sair'")
    const operacoes = [
        "soma",
        "subtração",
        "divisão",
        "multiplicação",
        "resto da divisão",
    ];

    while (pergunta === "sim") {
        const operacao = prompt("Qual operação gostaria de utilizar? 'soma', 'subtração', 'divisão', 'multiplicação', 'resto da divisão' ou deseja 'sair'?");
        if (operacao === "sair") {
            alert("Até mais!");
            break;
        }

        num1 = prompt("digite o 1º número:");
        num2 = prompt("digite o 2º número:");

        if (operacao === "soma") {
            alert(soma(num1, num2));
        } else if (operacao === "subtração") {
            alert(sub(num1, num2));
        } else if (operacao === "divisão") {
            alert(div(num1, num2));
        } else if (operacao === "multiplicação") {
            alert(mult(num1, num2))
        } else if (operacao === "resto da divisão") {
            alert(restoDiv(num1, num2))
        }
    }

    function soma(num1, num2) {
        let conta = parseInt(num1) + parseInt(num2);
        return conta;
    }

    function sub(num1, num2) {
        let conta = num1 - num2;
        return conta;
    }

    function div(num1, num2) {
        let conta = num1 / num2;
        return conta;
    }

    function mult(num1, num2) {
        let conta = num1 * num2;
        return conta;
    }

    function restoDiv(num1, num2) {
        let conta = num1 % num2;
        return conta;
    }
}

calculadoraDaJoana()