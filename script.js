
    //const numero = Number(prompt('Digite um número positivo e par : '));

    //if(numero % 2 === 0 && numero > 0) {
    //     console.log('Correto!')
    // } else {
    //     console.log('Errado!')
    //     if(!(numero % 2 === 0)) {
    //         console.log('O número não é par!')
        
    //     } else {
    //         console.log('O número é negativo!')
    //     }
    // 

    // const peso = Number(prompt('Digite seu peso: '));
    // const altura = Number(prompt('Digite sua altura: '));

    // const imc = peso / (altura ** 2);

    // if(imc <= 18.5) {
    //     console.log(`Seu imc é: ${Math.round(imc,2)}. Você está abaixo do peso ideal!`);
    
    // } else if(imc > 18.5 && imc <= 24.9) {
    //     console.log(`Seu imc é: ${Math.round(imc,2)}.Você está com o peso ideal (Parabéns)!`);
    // } else if(imc > 24.9 && imc <= 29.9) {
    //     console.log(`Seu imc é: ${Math.round(imc,2)}. Você está levemente acima do!`);
    // } else if(imc > 29.9 && imc <= 34.9) {
    //     console.log(`Seu imc é: ${Math.round(imc,2)}. Você está obesidade grau I!`);
    // } else if(imc > 34.9 && imc <= 39.9) {
    //     console.log(`Seu imc é: ${Math.round(imc,2)}. Você está obesidade grau II (Severa)!`);
    // } else if(imc > 39.9) {
    //     console.log(`Seu imc é: ${Math.round(imc,2)}. Você está obesidade grau III (Morbida)!`);
    // }


    // let preco = Number(prompt('Digite o preço do produto : '));
    // const idade = Number(prompt('Digite sua idade : '));
    // let precoFinal = 0;
    // if(idade < 18){
    //     precoFinal = preco *= 0.90;

    // } else {
    //     precoFinal = preco;
    // }

    // console.log(`O preço final do produto é ${precoFinal}`);


    // const lado1 = Number(prompt('Digite o primeiro lado do triângulo : '));
    // const lado2 = Number(prompt('Digite o segundo lado do triângulo : '));
    // const lado3 = Number(prompt('Digite o terceiro lado do triângulo : '));

    // if(lado1 === lado2 && lado1 === lado3) {
    //     console.log('Triangulo Equilátero!')
    // } else if (!(lado1 === lado2) && (!lado1 === lado3)) {
    //     console.log('Triangulo Escaleno!')
    // } else {
    //     console.log('Triangulo Isóceles!')
    // }

    
    const diaDaSemana = Number(prompt('Digite um numero entre 1 e 7 : '));

    switch(diaDaSemana){
        case 1:
            console.log("O dia da semana é domingo!");
            break;
        case 2:
            console.log("O dia da semana é Segunda-Feira!");
            break;
        case 3:
            console.log("O dia da semana é Terça-Feira!");
            break;
        case 4:
            console.log("O dia da semana é Quarta-feira!");
            break;
        case 5:
            console.log("O dia da semana é Quinta-feira!");
            break;
        case 6:
            console.log("O dia da semana é Sexta-feira!");
            break;
        case 7:
            console.log("O dia da semana é Sábado!");
            break;
        default:
            console.log("Número inválido!");
    }
     










