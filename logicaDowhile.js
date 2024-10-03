var numeroEntrada = 0, resultadoFactorial = 1, opcion;
do {
    opcion = parseInt(prompt("Ingrese la opción que desea realizar: 1. Calcular factorial  2. Determinar si es par   3. Terminar"));
    switch (opcion) {
        case 1:
            numeroEntrada = parseInt(prompt("Ingrese un número para calcularle el factorial"));
            resultadoFactorial = 1;
            for (let i = 1; i <= numeroEntrada; i++) {
               resultadoFactorial = resultadoFactorial * i;
            }
            alert(resultadoFactorial + " es el factorial " + numeroEntrada);
            break;
            
        case 2:
            numeroEntrada = parseInt(prompt("Ingrese un número para determinar si es par o impar"));
            if ((numeroEntrada%2) == 0 ) {
                alert(numeroEntrada + " es par");
            } else {
                alert(numeroEntrada + " es impar");
            }
            break;   
    }

} while (opcion != 3);