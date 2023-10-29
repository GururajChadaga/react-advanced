import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import ShimmerMenuCards from './components/ShimmerMenuCards';
import About from './components/About';
import UserContext from './utils/UserContext';
// import Menu from './components/Menu';
const Menu = lazy(() => import('./components/Menu'));

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [userName, setUserName] = useState('default');
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className='flex flex-col h-[99vh] p-1'>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
        element: (
          <Suspense fallback={<ShimmerMenuCards />}>
            <Menu />
          </Suspense>
        ),
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
