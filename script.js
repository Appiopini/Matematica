function numAleatorio() {
     return Math.floor(Math.random() * 100);
}

let num01 = numAleatorio();
let num02 = numAleatorio();


let display = document.querySelector("#display")

display.innerHTML = num01 + " - " + num02;

let input = document.querySelector("#valor")

let valor = document.getElementById("valor")
let verifica = document.getElementById("verifica")  

input.addEventListener("keyup", (event) => {
     if(event.keyCode == "13"){
     if(num01 - num02 === parseInt(input.value)){
          num01 = numAleatorio();
          num02 = numAleatorio();
          display.innerHTML = num01 + " - " + num02;
          input.value = "";
          alert("Voce acertou !!")
     } else {
          alert("Voce errou, o valor correto é " + (num01 - num02));
          input.value = "";
     }
     }
});
