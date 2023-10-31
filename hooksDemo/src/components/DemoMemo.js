import { useMemo, useState } from 'react';
import { getFirstNthSum, getNthPrime } from '../utils/helpers';

const DemoMemo = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const firstNSum = useMemo(() => getFirstNthSum(+text), [text]);

  return (
    <div className={`demo-container ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <div>useMemo Demo</div>
      <button onClick={() => setIsDark((prev) => !prev)}>Switch Theme</button>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <div>{`${text}th prime number: ${firstNSum}`}</div>
    </div>
  );
};

export default DemoMemo;
