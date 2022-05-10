function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
//funções são agrupamentos de códigos e objetos tem propriedades e funcionalidades.

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

<<<<<<< HEAD
ScrollReveal({
  origin: 'top', //scroll do home desce
  diatance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card`) //` permite a string com quebra de linha
=======
function onScroll(){
  if(scrollY > 0){
      navigation.classList.add('scroll')//navigation é um objeto/ lista de classes que é um objeto por isso usa .
  } else{
    navigation.classList.remove('scroll')
  }
}

>>>>>>> 2c3e233355c734e0e0b24f80512902fdd4ca60ad
