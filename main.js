function onScrooll(){
  if(scrollY > 0){
      navigation.classList.add('scroll')//navigation é um objeto/ lista de classes que é um objeto por isso usa .
  } else{
    navigation.classList.remove('scroll')
  }
}