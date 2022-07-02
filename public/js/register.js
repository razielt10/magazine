
window.addEventListener('load', function(){
    //capturo el form
    let formR = this.document.querySelector('#register-form')

    let inputName = document.querySelector('input#name')
    inputName.onkeydown = function (ev) {
        console.log(ev)
        if (ev.keyCode >= 48 && ev.keyCode <= 57) { //son numeros
            return false
        }
        return true
    }

    const re = /\S+@\S+\.\S+/

    let inputEmail = document.querySelector('#email')
    inputEmail.onblur = function (ev) {
        let inp = ev.target
        let spanError = inp.parentElement.querySelector('span')
        // compruebo que cumpla con la patron del email
        if (!re.test(inp.value)) {
            // debeo aqui colocar el mensaje de error
            inp.style.backgroundColor = 'red'
            spanError.innerText = 'Email inválido'
        } else {
            inp.style.backgroundColor = 'white'
            spanError.innerText = ''
        }
    }

    //asigno el evento onsubmit
    formR.onsubmit = function(ev) {
        
        let textoName = inputName.value
        if (textoName.length < 2) {
            alert('escribe el nombre')
        }

        let radioMayorSi = document.querySelector('#mayorsi')
        let radioMayorNo = document.querySelector('#mayorno')

        if (!radioMayorSi.checked && radioMayorNo.checked == false) {
            alert('Selecciona si es o no mayor de edad')
        }


        ev.preventDefault();
    }


})