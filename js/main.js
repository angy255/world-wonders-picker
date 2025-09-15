document.getElementById('mexico').onclick = fiesta
document.getElementById('jordan').onclick = hummus
document.getElementById('china').onclick = rice
document.getElementById('brazil').onclick = soccer
document.getElementById('india').onclick = curry
document.getElementById('italy').onclick = pizza
document.getElementById('peru').onclick = ceviche

const greeting=document.getElementById('greeting')

function fiesta() {
  document.querySelector('body').style.backgroundImage = 'url("img/chichen-itza.jpg")'
  document.querySelector('body').style.color = 'black'
  console.log(document.querySelector('body').style)
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundSize = 'cover'
  greeting.innerHTML="¡Hola!"
  beGone()

}
// this console is to visualize all the styles that are applied to this element

// note how image leaks outside out html when inspecting, maybe ask about it

function hummus() {
  document.querySelector('body').style.backgroundImage = 'url("img/petra.jpg")'
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundSize = 'cover'
  greeting.innerHTML="مرحبا!"
  beGone()

}

function rice() {
  document.querySelector('body').style.backgroundImage = 'url("img/great-wall-of-china.jpg")'
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundSize = 'cover'
  greeting.innerHTML="你好!"
  beGone()
}

function soccer() {
  document.querySelector('body').style.backgroundImage = 'url("img/christ-the-redeemer.jpg")'
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundSize = 'cover'
  greeting.innerHTML="Olá!"
  beGone()
}

function curry() {
  document.querySelector('body').style.backgroundImage = 'url("img/taj-mahal.jpg")'
  document.querySelector('body').style.color = 'blue'
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundSize = 'cover'
  greeting.innerHTML="नमस्ते!"
  beGone()
}

function pizza() {
  document.querySelector('body').style.backgroundImage = 'url("img/colosseum.jpg")'
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundSize = 'cover'
  greeting.innerHTML="Ciao!"
  beGone()

}

function ceviche() {
  document.querySelector('body').style.backgroundImage = 'url("img/machu-picchu.jpg")'
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundSize = 'cover'
  greeting.innerHTML="¡Hola!"
  beGone()

}


function beGone() {
  document.querySelector('.travel').style.visibility="hidden"
}

