function myFunction() {
    alert("Completa todos los campos"); }
function validar(){
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const edad = document.getElementById("edad")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
form.addEventListener("submit", e=>{
    e.preventDefault()
   
    let warnings = ""
    let entrar = false
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    parrafo.innerHTML = ""
    alert("Completa el Formulario"); 
    if(nombre.value.length <6){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    if(apellido.value.length <6){
        warnings += 'El apellido no es valido <br>'
        entrar = true
    }
    if(edad.value.length <1){
        warnings += 'Edad no valida <br>'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(telefono.value.length <10){
        warnings += 'El telèfono no es valida <br>'
        entrar = true
    }
    
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
}