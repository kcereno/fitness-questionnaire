export function decimalToPercent(decimal: number): number {
  return Math.round(decimal * 100);
}

// Example usage
const decimalValue = 0.16666666666666666;
const percentValue = decimalToPercent(decimalValue);
console.log(percentValue); // Output: 17
