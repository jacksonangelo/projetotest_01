// mascara do cpf 
const input = document.getElementById('cpf')

input.addEventListener('keypress', () => {
  let inputlength = cpf.value.length

  if (inputlength === 3 || inputlength === 7) {
    input.value += '.'
  }else if (inputlength === 11) {
    input.value += '-'
  }

})
