const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

function inputScreen(input) {
  display.value += input
}

function clearInput() {
  display.value = ""
}

function calcular() {
  try{
    display.value = eval(display.value)
  }
  catch(error){
    display.value = "Error"
  }
  
}