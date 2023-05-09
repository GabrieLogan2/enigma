const resposta = document.getElementById('resposta');
const verificar = document.getElementById('verificar');
const resultado = document.getElementById('resultado');

verificar.addEventListener('click', function() {
  const valor = resposta.value.toLowerCase();
  if (valor === 'eu suponho que você espera receber esta sequência (de palavras), mas e se você acertar (o que ela significa), encontrará a beleza, que originalmente se referia a você.') {
    resultado.textContent = 'Parabéns! Você acertou e encontrou a beleza que é só sua!';
  } else {
    resultado.textContent = 'Que pena! Tente novamente. Dica: a resposta está nas primeiras palavras do enigma!';
  }
});
