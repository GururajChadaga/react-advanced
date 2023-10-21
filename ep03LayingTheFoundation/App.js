import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'heading' }, 'h1 tag');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

/*
  line4 React.createElement => React element - is an object => HTMLElement
  when this element is rendered onto the dom, it becomes an HTML element
  here, react element is created using core react
 */

/*
  line6 root's chlidren are replaced by heading with the root.render()
  hence, "Not Rendered" is replaced by heading"
 */

//JSX
const jsxHeading = <h1 id='heading'>h1 tag using JSX</h1>;
root.render(jsxHeading);

/*
  code is written first for humans, then for machines.
  JSX is a JS syntax to easily create react elements
  JSX is NOT a part of React
  JSX is NOT HTML
    it is HTML-like or XML-like syntax
      class in HTML is className
      kebab case attributes are camelCased in JSX
      multiline JSX is wrapped in ()
  React can be completely writted without JSX,
    but JSX is used to make development easier.

  line19: jsxHeading is a react element created by jsx

  console.log(heading) and console.log(jsxHeading)
  both are the same thing

  JSX is not valid pure JS
    JS engine does not understand JSX
    JS engine only understand EcmaScript
    JSX is transpiled by Parcel before being fed into the JS engine
      Transpiled -> JSX is converted into React.createElement(...)
      Parcel in turn uses Babel to transpile JSX
    Babel is a JS compiler/transpiler
      it also transpiles modern JS code to code compatible with older versions
    Flow:
      JSX =(Babel)=> React.createElement =(render)=> HTMLElement
      hence, 
        jsxHeading = heading
 */

const Title = () => {
  return <h1>Title JSX</h1>;
};
const HeadingComponent = () => {
  return (
    <div id='container'>
      <Title />
      <h1>H1 from functional component</h1>
    </div>
  );
};

root.render(<HeadingComponent />);
/*
  react components are rendered within <ComponentName /> or <ComponentName></ComponentName>
    can also be rendered like this:
      {ComponentName()}
        as it is a regular JS function that returns JSX
  unlike react elements which are rendered with the variable alone
  Nested components: component composition, composing multiple components together.

  JS can be written within JSX within {}
    so react elements can be injected into react components within {} 
    as react elements are JS variables

    JSX sanitizes the JS within {} before running it,
      hence preventing cross site scripting
    
 */
