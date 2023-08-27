// Faça um algoritmo para calcular a nota semestral de um aluno. A nota semestral é obtida
// pela média aritmética entre a nota de 2 bimestres. Cada nota de bimestre é composta por
// 2 notas de provas.


function notaSemestral(n1bimestre1, n2bimestre1, n1bimestre2, n2bimestre2){
    let primeiroBimestre = n1bimestre1 + n2bimestre1
    let segundoBimestre = n1bimestre2 + n2bimestre2
 
    let mediaAritimetica = (primeiroBimestre + segundoBimestre) / 2



    console.log("Nota do primeiro bimestre: " + primeiroBimestre)
    console.log("Nota do primeiro bimestre: " + segundoBimestre)
    console.log("A Média do semestre é: " + mediaAritimetica)
}


notaSemestral(50, 35, 60, 40)

// 50 + 100 = 150 / 2 = 75
// 20 + 40 = 60 / 2 = 30

// 75 + 30 = 