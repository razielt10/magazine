window.onload = function () {

    //capturo los elementos
    const menuBars = document.querySelector('#menu-bars')
    const botones = document.querySelectorAll('.agregar-carrito')

    const cartQuantity = document.querySelector('#cart-quantity')

    const menuList = document.querySelector('#menu-list')

    //creo una funcion donde en el atributo onclick la voy a llamar
    function desplegarMenu() {
        console.log('clic dentro de la funcion')

        if (menuList.style.display == 'block') {
            menuList.style.display = 'none'
        } else {
            menuList.style.display = 'block'
        }
    }
    menuBars.onclick = () => {
        console.log('primera funcion')
    }

    menuBars.addEventListener('click', function () {
        if (menuList.style.display == 'block') {
            menuList.style.display = 'none'
        } else {
            menuList.style.display = 'block'
        }
    })

    let cart = document.querySelector('#cart')
    let cartList = document.querySelector('#cart-list')
    cart.addEventListener('click', function () {
        if (cartList.style.display == 'block') {
            cartList.style.display = 'none'
        } else {
            cartList.style.display = 'block'
        }
    })


    //de una vez asigno en onclick a esos botones
    for (const boton of botones) {
        boton.onclick = function(ev) {
            ev.preventDefault()
            cartQuantity.innerText = parseInt(cartQuantity.innerText) + 1
            // docu: https://developer.mozilla.org/es/docs/Web/API/Element/getAttribute

            let productName = boton.getAttribute('data-name')

            console.log('Voy a agregar al carrito el producto: ' + productName)
            cartList.innerHTML = cartList.innerHTML + '<div><img src="sdgdfgdf">'
                 + productName + '<button type="button" class="remove-cart">Eliminar</button></div>'

            let removeButtons = document.querySelectorAll('.remove-cart')
            for (const bot of removeButtons) {
                bot.onclick = function () {
                    bot.parentElement.remove()
                    cartQuantity.innerText = parseInt(cartQuantity.innerText) - 1
                }
            }
        }
    }
   
}