import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../Header';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { BrowserRouter } from 'react-router-dom';
import { LOG_IN_OUT_BTN } from '../../../utils/constants';

describe('Header Tests', () => {
  it('Should render Header component with Login button', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const loginButton = screen.getByTestId(`btn-${LOG_IN_OUT_BTN.LOGIN}`);
    expect(loginButton).toBeInTheDocument();
  });

  it('Should render Header component with 0 cart items initially', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const cartText = screen.getByText('Cart (0)');
    expect(cartText).toBeInTheDocument();
  });

  it('Should render Header component cart item irrespective of count', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const cartText = screen.getByText(/Cart/);
    expect(cartText).toBeInTheDocument();
  });

  it('Should Change from login to logout on button click', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const loginButton = screen.getByTestId(`btn-${LOG_IN_OUT_BTN.LOGIN}`);
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);
    const logoutButton = screen.getByTestId(`btn-${LOG_IN_OUT_BTN.LOGOUT}`);
    expect(logoutButton).toBeInTheDocument();
  });
});
