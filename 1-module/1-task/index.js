/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  if (n > 0 && n % 1 == 0) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= m;
    }
    return result;
  }
  console.log("Your power is incorrect!");
}
pow(2, 3);
