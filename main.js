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
=======
function onScroll(){
  if(scrollY > 0){
      navigation.classList.add('scroll')//navigation é um objeto/ lista de classes que é um objeto por isso usa .
  } else{
    navigation.classList.remove('scroll')
  }
}

