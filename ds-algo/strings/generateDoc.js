function generateDocument(characters, document) {
  if (document.length > characters.length) {
    return false;
  }

  const charFreq = new Map();
  for (let char of characters) {
    const freq = charFreq.get(char) || 0;
    charFreq.set(char, freq + 1);
  }

  for (let char of document) {
    if (!charFreq.has(char) || charFreq.get(char) === 0) {
      return false;
    }
    charFreq.set(char, charFreq.get(char) - 1);
  }

  return true;
}