import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import DemoMemo from './components/DemoMemo';
import DemoRef from './components/DemoRef';
import Header from './components/Header';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { store } from './store';
import RTK from './components/RTK';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/demo-usememo', element: <DemoMemo /> },
      { path: '/demo-useref', element: <DemoRef /> },
      { path: '/demo-rtk', element: <RTK /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
