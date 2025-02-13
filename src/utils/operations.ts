export function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export function isPerfect(num: number): boolean {
  if (num < 2) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num;
}

export function isArmstrong(num: number): boolean {
  const digits = String(num).split("");
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), digits.length),
    0
  );
  return sum === num;
}

export function getDigitSum(num: number): number {
  return String(Math.abs(num))
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
}

export function getProperties(num: number): string[] {
  const properties: string[] = [];
  if (isArmstrong(num)) properties.push("armstrong");
  if (num % 2 === 0) properties.push("even");
  else properties.push("odd");
  return properties;
}
