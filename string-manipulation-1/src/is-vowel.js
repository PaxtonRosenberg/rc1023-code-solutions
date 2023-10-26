/* exported isVowel */
function isVowel(char) {
  let isAVowel = false;
  const vowel = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  for (let i = 0; i < vowel.length; i++) {
    if (char === vowel[i]) {
      isAVowel = true;
    }
  }
  return isAVowel;
}
