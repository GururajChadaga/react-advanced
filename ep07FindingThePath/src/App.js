import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import Menu from './components/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/restaurants/:resId',
        element: <Menu />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

root.render(<RouterProvider router={router} />);
