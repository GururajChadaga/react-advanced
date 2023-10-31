import { useEffect, useRef, useState } from 'react';

const DemoRef = () => {
  const [text, setText] = useState('');
  const renderCountRef = useRef(1);
  const inputRef = useRef();
  const prevTextRef = useRef('');

  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
  });

  useEffect(() => {
    prevTextRef.current = text;
  }, [text]);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleBlur = () => {
    inputRef.current.blur();
  };

  return (
    <div className='demo-container light-theme'>
      <div>useRef Demo</div>
      <div>
        <input
          ref={inputRef}
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>{`Name: ${text} PrevName: ${prevTextRef.current}`}</div>
      <div>Render Count: {renderCountRef.current}</div>
      <div style={{ display: 'flex' }}>
        <button style={{ marginRight: '1rem' }} onClick={handleFocus}>
          Focus
        </button>
        <button onClick={handleBlur}>Blur</button>
      </div>
    </div>
  );
};
export default DemoRef;
