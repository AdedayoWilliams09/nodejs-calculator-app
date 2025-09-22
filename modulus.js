export function modulus(a, b) {
  if (b === 0) throw new Error("❌ Cannot find modulus with divisor 0!");
  return a % b;
}
