let contadorNumeroIntentos = 0;

function validarAdivinanza()
{
    let input = document.getElementById("textoVino");
    let acerto = false;
    if (input.value != 9)
        {
            contadorNumeroIntentos++;
            if (contadorNumeroIntentos == 1)
            {
                alert("Respuesta incorrecta. Te quedan 3 intentos");
            }
            else if(contadorNumeroIntentos == 2)
            {
                alert("Respuesta incorrecta. Te quedan 2 intentos. Pista 1: dura menos de un mes");
            }
            else if (contadorNumeroIntentos == 3)
            {
                alert("Respuesta incorrecta. Te queda un intento. Pista 1: dura menos de un mes. Pista 2: es un poquito mas de 7 días");
            }
        }
    if (input.value == 9)
        {
            alert("Adivinaste! Felicitaciones!");
            acerto = true;
            contadorNumeroIntentos = 0;
        }
    
    if (contadorNumeroIntentos == 4 && acerto == false)
    {
        alert("Perdiste!. La respuesta correcta era: 9 días");
    }
}

enviarConsulta()
{
    alert("Consulta Enviada Correctamente");
}
