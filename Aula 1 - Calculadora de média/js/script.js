var nome = "Guilherme";

function enviar(){
  var resposta = document.getElementById("nota_final"); 
  var input1 = document.querySelector("#nota1");
  var notaDoPrimeiroBimestre = Number(input1.value);
  var input2 = document.querySelector("#nota2");
  var notaDoSegundoBimestre = Number(input2.value);
  var input3 = document.querySelector("#nota3");
  var notaDoTerceiroBimestre = Number(input3.value);
  var input4 = document.querySelector("#nota4");
  var notaDoQuartoBimestre = Number(input4.value);

  var somaDasNotas =
    notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre;

  var notaFinal = somaDasNotas / 4;
  
  var notaFixada = notaFinal.toFixed(1);
  resposta.innerHTML = `Sua média final é : ${notaFixada}`;
}




// Revisão
// variáveis, strings, console.log, toFixed, oprerações, matemáticas, concatenação
