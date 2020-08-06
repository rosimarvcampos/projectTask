function selectFunc() {
    const textAreaForm = document.querySelector('#textAreaForm')
    const btnForm = document.querySelector('#btn-form')
    textAreaForm.setAttribute('disabled', 'disabled')
    btnForm.setAttribute('disabled', 'disabled')          
    if(event.target.value) {
      textAreaForm.removeAttribute('disabled')
      btnForm.removeAttribute('disabled')
    }
  }

function saveFunc() {
    event.preventDefault()
    event.target.classList.add("btn-none")
    const btnList = event.target.parentNode
    const head = btnList.parentNode
    const card = head.parentNode
    const btnS = card.querySelector('.btnS')
    btnS.classList.remove('btn-none')
    const inputTitle = card.querySelector('h2 > input')
    const inputDescription = card.querySelector('p > input')
    inputTitle.removeAttribute('disabled')
    inputDescription.removeAttribute('disabled')
}
