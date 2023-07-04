function mostrarTipo(tipoCalza,idboton){
    // document.write(idboton)
    //oculto todos
    var productos = document.getElementsByClassName("producto");
        for (var i=0;  i < productos.length; i++) {
            productos[i].style.display= "none";
        }
    //muestro los que necesito
    for (var i=0;  i < productos.length; i++) {
        if(tipoCalza!=''){
            if (productos[i].id == tipoCalza){
                productos[i].style.display= "block";
            }
        }else{
            productos[i].style.display= "block";
        }
    }    
}
function abrir(){
    document.getElementById("sidemenu_login").style.display = 'block';
    document.getElementById("sidemenu_registrar").style.display= 'none';
    document.getElementById('btnlogin').style.display= 'none';
}
function cerrar(){
    document.getElementById("sidemenu_login").style.display = 'none';
}
function abrirRegistrar(){
    document.getElementById("sidemenu_registrar").style.display= 'block';
    document.getElementById("sidemenu_login").style.display = 'none';
}
function validarRegistrar(){
    var apellido=document.getElementById("apellido");
    var nombre=document.getElementById("nombre");

    var contra=document.getElementById("contraR");
    var mail=document.getElementById("mailR");
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var contraVal=false;
    var mailVal=false;
    var nombreVal=false;
    var apellidoVal=false;

    if(nombre.value == "" ){
        nombre.style.border ="solid 1px red";
    }else{
        nombre.style.border = "solid 1px black";
        nombreVal=true;
    }
    if(apellido.value == "" ){
        apellido.style.border ="solid 1px red";
    }else{
        apellido.style.border = "solid 1px black";
        apellidoVal=true;
    }
    if(contra.value == "" ){
        contra.style.border ="solid 1px red";
    }else{
        contra.style.border = "solid 1px black";
        contraVal=true;
    }
    if (emailRegex.test(mail.value)) {
        mail.style.border = "solid 1px black";
        mailVal=true;
    } else {
        mail.style.border ="solid 1px red";
    }
    if (contraVal && apellidoVal && mailVal && nombreVal){
        document.getElementById("formR").reset();
    }


}
function validarLogueo(){
    var contra=document.getElementById("contra");
    var mail=document.getElementById("mail");
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var contraVal=false;
    var mailVal=false;

    if(contra.value == "" ){
        contra.style.border ="solid 1px red";
    }else{
        contra.style.border = "solid 1px black";
        contraVal=true;
    }
    if (emailRegex.test(mail.value)) {
        mail.style.border = "solid 1px black";
        mailVal=true;
    } else {
        mail.style.border ="solid 1px red";
    }
    if (contraVal  && mailVal ){
        document.getElementById("form").reset();
    }
} 
function adjustGrid() {
    const container = document.getElementById('products-container');
    const wrapper = document.getElementById('products-wrapper');
    const containerWidth = container.offsetWidth;
    const wrapperWidth = wrapper.offsetWidth;
    const itemWidth = wrapper.querySelector(':first-child').offsetWidth;
    const columns = Math.floor(wrapperWidth / itemWidth);
  
    wrapper.style.gridTemplateColumns = `repeat(auto-fill, minmax(${itemWidth}px, 1fr))`;
    wrapper.style.gridTemplateRows = `repeat(auto-fill, minmax(${itemWidth}px, 1fr))`;
  
    if (columns > 1) {
      wrapper.style.maxWidth = `${columns * itemWidth}px`;
    } else {
      wrapper.style.maxWidth = '100%';
    }
  }
  window.addEventListener('resize', adjustGrid);
function mostrarProductos50(){
    
    document.getElementById('50').style.display = "block";
    document.getElementById('25').style.display = "none";

}
function mostrarProductos25(){
    document.getElementById('25').style.display = "block";
    document.getElementById('50').style.display = "none";
    
}
//carro
// Variables globales
let cartItems = [];
let totalPrice = 0;
let isCartOpen = false;

// Función para agregar un avión al carrito
function addToCart(name, price) {
  const item = {
    name: name,
    price: price
  };
  cartItems.push(item);
  totalPrice += price;
  updateCart();
}

// Función para vaciar el carrito
function clearCart() {
  cartItems = [];
  totalPrice = 0;
  updateCart();
}

// Función para actualizar el carrito
function updateCart() {
  const cartList = document.getElementById('cart-list');
  const totalPriceElement = document.getElementById('total-price');

  // Vaciar la lista del carrito
  cartList.innerHTML = '';

  // Agregar cada elemento del carrito al HTML
  cartItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${item.name} - $${item.price}`;
    cartList.appendChild(listItem);
  });

  // Actualizar el precio total
  totalPriceElement.innerText = `Total: $${totalPrice}`;
}

// Función para mostrar u ocultar el listado del carrito
function toggleCart() {
  const cartSection = document.querySelector('.cart-section');
  isCartOpen = !isCartOpen;

  if (isCartOpen) {
    cartSection.style.display = 'block';
  } else {
    cartSection.style.display = 'none';
  }
}

// Función para manejar el evento de clic en el botón del carrito en la appbar
function handleCartToggle() {
  toggleCart();
}

// Evento click para vaciar el carrito
const clearCartBtn = document.getElementById('clear-cart-btn');
clearCartBtn.addEventListener('click', clearCart);

// Evento click para mostrar u ocultar el listado del carrito
const cartToggleBtn = document.getElementById('cart-toggle-btn');
cartToggleBtn.addEventListener('click', handleCartToggle);