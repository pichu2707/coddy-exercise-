// Crea una función llamada formatSentence que:
//
// Toma un argumento: sentence (una cadena).
// Divide la sentence en palabras usando espacios (" ") como delimitador.
// Une las palabras de nuevo en una sola cadena, separadas por guiones ("-").
// Devuelve la cadena formateada.

let sentence = "Coding is super fun";

function formatSentence(sentence) {
  let words = sentence.split(" ").join("-");

  console.log(words);
}

formatSentence(sentence);
