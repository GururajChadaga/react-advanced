import { getSumOfTwoNumbers } from '../../../utils/helpers';

test('', () => {
  const sum = getSumOfTwoNumbers(2, 3);
  // Assertion
  expect(sum).toBe(5);
});
