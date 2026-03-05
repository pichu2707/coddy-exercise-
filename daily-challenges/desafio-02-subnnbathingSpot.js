/*Crea una función llamada sunbathingSpot que reciba temperature y spiderCount como sus parámetros.

La función determina si un lugar determinado en la playa es seguro para tomar el sol basándose en la temperatura y el número de arañas avistadas cerca.

Usa los siguientes criterios para determinar la seguridad del lugar para tomar el sol:

Si la temperatura está entre 25 y 30 (inclusive) y hay 0 arañas, devuelve "Perfect spot!"
Si la temperatura es superior a 30, devuelve "Too hot!"
Si la temperatura es inferior a 25, devuelve "Too cold!"
Si hay 1 o 2 arañas, devuelve "Be cautious!"
Si hay 3 o más arañas, devuelve "Find another spot!"
Nota: El recuento de arañas tiene prioridad sobre la temperatura. Esto significa que, incluso si la temperatura es perfecta, la presencia de arañas afectará la decisión.

Parámetros:

temperature (number): La temperatura en grados Celsius. Siempre será un número entero.
spiderCount (number): El número de arañas avistadas cerca. Siempre será un número entero no negativo.
La función devuelve una cadena de texto que indica si es seguro tomar el sol basándose en los criterios dados.
	*/

function sunbathingSpot(temperature, spiderCount) {
  if (spiderCount >= 3) {
    return "Find another spot!";
  }

  if (spiderCount === 1 || spiderCount === 2) {
    return "Be cautious!";
  }

  if (temperature > 30) {
    return "Too hot!";
  }

  if (temperature < 25) {
    return "Too cold!";
  }

  return "Perfect spot!";
}

console.log(sunbathingSpot(28, 0));
console.log(sunbathingSpot(31, 0));
console.log(sunbathingSpot(27, 1));
console.log(sunbathingSpot(25, 6));
