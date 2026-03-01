/*
	Crea una función llamada benchQualityChecker que recibe coatingThickness y isHighTraffic como sus parámetros.

El departamento de parques local está recibiendo críticas debido a bancos mal mantenidos. Tu tarea es crear una función que evalúe la calidad de los bancos del parque basándose en el grosor de su recubrimiento y su ubicación.

Parámetros:

coatingThickness (número): Un entero que representa el grosor del recubrimiento del banco en micrómetros.
isHighTraffic (booleano): Un booleano que indica si el banco está en un área de alto tráfico (true) o no (false).
La función debe devolver una cadena de texto que describa la calidad del recubrimiento del banco según los siguientes criterios:

Si el grosor del recubrimiento es inferior a 50 micrómetros, devuelve "Terrible - Replace immediately!"
Si el grosor del recubrimiento está entre 50 y 100 micrómetros (inclusive):
Para áreas de alto tráfico, devuelve "Poor - Needs recoating soon"
Para áreas de bajo tráfico, devuelve "Acceptable - Monitor closely"
Si el grosor del recubrimiento está entre 101 y 150 micrómetros (inclusive), devuelve "Good - No action needed"
Si el grosor del recubrimiento es superior a 150 micrómetros, devuelve "Excellent - Overcoated!"
Usa declaraciones condicionales (if-else) para implementar la lógica que determina la calidad del banco según los criterios dados.
	*/

function benchQualityChecker(coatingThinkness, isHighTraffic) {
  if (coatingThinkness >= 50) {
    if (coatingThinkness >= 50 && coatingThinkness <= 100) {
      if (isHighTraffic === true) {
        console.log("Poor - Needs recoating soon");
      } else {
        console.log("Acceptable - Monitor closely");
      }
    } else if (coatingThinkness >= 101 && coatingThinkness <= 150) {
      console.log("Good - No action needed");
    } else {
      console.log("Excellent - Overcoated!");
    }
  } else {
    console.log("Terrible - Replace immediately!");
  }
}

benchQualityChecker(50, true);
