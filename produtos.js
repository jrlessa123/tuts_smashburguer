class lanche {
  constructor(name, preço, molho, blend, queijo) {
    this.name = name
    this.preço = preço
    this.molho = molho
    this.blend = blend
    this.queijo = queijo
  }
}

var tuts_slim = new lanche(
  'Tuts Slim',
  15,
  'Tuts Mac-Artesanal',
  'Smash-Tuts 100g',
  'Cheddar'
)

var big_tuts = new lanche(
  'Big Tuts',
  25,
  'Tuts Barbeque ',
  '2x Smash-Tuts 100g',
  'Molho Especial da Casa'
)

var combo_tuts = new lanche(
  'Combo Tuts',
  13,
  'Especial Tuts Gorgonzola',
  '3x Smash-Tuts 100g',
  'Cheddar'
)

var nomelanche_l1 = document.getElementById('nomelanche_l1')
var nomelanche_l2 = document.getElementById('nomelanche_l2')
var nomelanche_l3 = document.getElementById('nomelanche_l3')
nomelanche_l1.innerText = tuts_slim.name
nomelanche_l2.innerText = big_tuts.name
nomelanche_l3.innerText = combo_tuts.name

function adicionar() {
  
}
