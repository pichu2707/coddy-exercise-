function caesarCipher(text: string, shift: number): string {
  return [...text]
    .map((char) => {
      const code = char.charCodeAt(0);

      // mayúsculas
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }

      // minúsculas
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }

      // otros caracteres
      return char;
    })
    .join("");
}
