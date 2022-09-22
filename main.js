function convertir() {
    let grados =document.getElementById('farent').value;
    let resultado= ((grados - 32)*5)/9;
    resultado=parseInt(resultado);
    let celcius = document.getElementById('label').innerHTML = resultado.toFixed(2);
    let termometro= document.getElementById('termo').style.backgroundColor = "red";
    termometro = document.getElementById('termo').style.height = resultado+"%";
}

  function reiniciar() {
   document.getElementById('farent').value=" ";
   document.getElementById('label').innerText=" ";
   document.getElementById('termo').style.height="0"
   
}