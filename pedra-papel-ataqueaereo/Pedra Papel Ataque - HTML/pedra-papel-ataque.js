
let jogada = parseInt(alert("Escolha entre ATAQUE, PEDRA ou PAPEL"));
let jogador1, jogador2;
function jogar() {
        jogador1 = prompt("Jogador 1 joga.");
        jogador2 = prompt("Jogador 2 joga.");
              
  //TODO: Complete os espaços em branco com uma possível solução para o desafio
  
      if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE") {
        alert("Aniquilação mútua");
      } else if (jogador1.toUpperCase() === "PAPEL" && jogar2.toUpperCase() === "PAPEL") {
            alert("Ambos venceram");
      } else if (jogador1.toUpperCase() === 'ATAQUE' && jogador2.toUpperCase() === 'PEDRA') {
          alert("Jogador 1 venceu");
      } else if (jogador1.toUpperCase() === 'PAPEL' && jogador2.toUpperCase() === 'ATAQUE'){
          alert("Jogador 2 venceu");
      } else if (jogador1.toUpperCase() === 'PEDRA' && jogador2.toUpperCase() === 'PAPEL'){
          alert("Jogador 1 venceu");
      } else if (jogador1.toUpperCase() === 'PEDRA' && jogador2.toUpperCase() === 'ATAQUE'){
           alert("Jogador 2 venceu");
      } else alert("Sem ganhador");
  }
  jogar();