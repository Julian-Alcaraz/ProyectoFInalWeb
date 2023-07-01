// const btnLogin = document.getElementById("btnLogin")
// const salirLogin = document.getElementById("salir-btn");
// var menu = document.getElementById("sidemenu");

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
function validarLogueo(){

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

