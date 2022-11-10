var i = 0;
function changeColor(color) {
    document.body.style.background = color;
}
function cambiar() {
    if (i == 0) {
        document.getElementById("cabecera").innerHTML = "Dark";
        document.getElementById("logo").src="fotos/negroLogo.png";
        document.getElementById("imenu").src="fotos/negro.png";
        document.getElementById("navegador").style.background='ghostwhite';
       
        i++;
        changeColor('white');
    } else {
        console.log("entro");
        document.getElementById("logo").src="fotos/logo.png";
        document.getElementById("cabecera").innerHTML = "Light";
        document.getElementById("imenu").src="fotos/blanco.png";
        document.getElementById("navegador").style.background='black';
        
        i = 0;
        changeColor('black');
    }
}
