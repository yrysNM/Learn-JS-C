function mergeAlternately(word1: string, word2: string): string {
  let m1 = word1.length,
    m2 = word2.length,
    i = 0,
    j = 0;
  let res = "";

  while (i < m1 || j < m2) {
    if (i < word1.length) {
      res += word1.charAt(i++);
    }

    if (j < word2.length) {
      res += word2.charAt(j++);
    }
  }

  return res;
}

console.log(mergeAlternately("abc", "pqr"));

/**
 * Input: word1 = "abc", word2 = "pqr"
    Output: "apbqcr"
    Explanation: The merged string will be merged as so:
    word1:  a   b   c
    word2:    p   q   r
    merged: a p b q c r
 */
