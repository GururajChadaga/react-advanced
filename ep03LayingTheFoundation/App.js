import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const heading = React.createElement('h1', { id: 'heading' }, 'h1 tag');
root.render(heading);

const jsxHeading = <h1 id='heading'>h1 tag using JSX</h1>;
root.render(jsxHeading);

const Title = () => {
  return <h1>Title JSX</h1>;
};

const HeadingComponent = () => {
  return (
    <div id='container'>
      {heading}
      <Title />
      {Title()}
      <h1>H1 from functional component</h1>
    </div>
  );
};

root.render(<HeadingComponent />);
