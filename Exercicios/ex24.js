// Escreva um programa que leia três números e mostre o maior entre eles
function maiorNum(arrayOfNums){
    let [ num1 , num2, num3 ] = arrayOfNums
    let maior;

    if(num1 > num2 && num1 > num3){
        maior = num1;
    } else if (num2 > num1 && num2 > num3){
        maior = num2
    } else {
        maior = num3
    }

    console.log("O maior número é: " + maior)
}

let nums = [9, 8, 7]
maiorNum(nums)