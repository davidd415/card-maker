

var input = document.getElementById('texto')
var button = document.getElementById('criar')
var card = document.getElementById('card')
var reset = document.getElementById('reset')

//button do fundo
var vermelhoFundo = document.getElementById('vermelhoFundo')
var amereloFundo = document.getElementById('amareloFundo')
var verdeFundo = document.getElementById('verdeFundo')
var azulFundo = document.getElementById('azulFundo')

//button da cor da letra
var vermelhoPalavra = document.getElementById('vermelhoPalavra')
var amereloPalavra = document.getElementById('amareloPalavra')
var verdePalavra = document.getElementById('verdePalavra')
var azulPalavra = document.getElementById('azulPalavra')

//button da fonte
var fonteMais = document.getElementById('A')
var fonteMenos = document.getElementById('a')

var fonte = 16

//localStorege
var textoSalvo = localStorage.getItem('textoCard')
var fundoSalvo = localStorage.getItem('fundoSalvo')
var CorPalavraSalvo = localStorage.getItem('CorPalavraSalvo')
var fonteSalvo = localStorage.getItem('fonteSalvo') 

if (textoSalvo) {
  card.textContent = textoSalvo
  input.value = textoSalvo
}

if (fundoSalvo) {
  card.style.background = fundoSalvo
}

if (CorPalavraSalvo) {
  card.style.color = CorPalavraSalvo
}

if (fonteSalvo) {
  card.style.fontSize = fonteSalvo
}

//criar card
button.onclick = function() {
  console.log(input.value)
  card.textContent = input.value
  input.value = " "

}

//lendo entado escreve
input.oninput = function() {
  card.textContent = input.value

  //salvado
  localStorage.setItem('textoCard', input.value)
}

//cor do fundo
vermelhoFundo.onclick = function() {
  card.style.background = 'red'

  //salvado
  localStorage.setItem('fundoSalvo', card.style.background)
}

amereloFundo.onclick = function() {
  card.style.background = 'yellow'

  //salvado
  localStorage.setItem('fundoSalvo', card.style.background)
}

verdeFundo.onclick = function() {
  card.style.background = 'green'

  //salvado
  localStorage.setItem('fundoSalvo', card.style.background)
}

azulFundo.onclick = function() {
  card.style.background = 'blue'

  //salvado
  localStorage.setItem('fundoSalvo', card.style.background)
}

//cor da letra
amereloPalavra.onclick = function() {
  card.style.color = 'yellow'

  //salvando
  localStorage.setItem('CorPalavraSalvo', card.style.color)
}

verdePalavra.onclick = function() {
  card.style.color = 'green'

  //salvando
  localStorage.setItem('CorPalavraSalvo', card.style.color)
}

azulPalavra.onclick = function() {
  card.style.color = 'blue'

  //salvando
  localStorage.setItem('CorPalavraSalvo', card.style.color)
}

vermelhoPalavra.onclick = function() {
  card.style.color = 'red'

  //salvando
  localStorage.setItem('CorPalavraSalvo', card.style.color)
}

//resentado tudo
reset.onclick = function() {
  input.value = ''
  card.textContent = ''
  card.style.color = ''
  card.style.backgroundColor = ''
}

//mudado a fonte
fonteMais.onclick = function() {
  fonte += 1
  card.style.fontSize = fonte + 'px'

  //salvado 
  localStorage.setItem('fonteSalvo', card.style.fontSize)
}

fonteMenos.onclick = function() {
  fonte -= 1
  card.style.fontSize = fonte + 'px'

  //salvado 
  localStorage.setItem('fonteSalvo', card.style.fontSize)
}

//abaixando img
document.getElementById('baixar').onclick = function() {
  html2canvas(card).then(function (canvas) {
    var link = document.createElement('a')
    link.download = 'meu-card.png'
    link.href = canvas.toDataURL()
    link.click()
  })
}


console.log('funcionado')