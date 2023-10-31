export const getFirstNthSum = (n) => {
  //heavy operation
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
};
