import Menu from '../../Menu';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from '../../../store/index';
import { BrowserRouter } from 'react-router-dom';
import { MenuMock } from '../../../__mocks__/MenuMock';
import {
  cleanup,
  fireEvent,
  getAllByTestId,
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import RestaurantCardsContainer from '../../RestaurantCardsContainer';
import Header from '../../Header';
import Cart from '../../Cart';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MenuMock),
  })
);

describe('Menu Tests', () => {
  it('should Load Restaurant Menu Component', async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Menu />
          </BrowserRouter>
        </Provider>
      )
    );
    const resMenu = screen.getByTestId('res-menu');
    expect(resMenu).toBeInTheDocument();
  });

  it('should Load 6 Dish Cards for Breads', async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Menu />
          </BrowserRouter>
        </Provider>
      )
    );
    const breadsAccordian = screen.getByText('Breads (6)');
    expect(breadsAccordian).toBeInTheDocument();
    fireEvent.click(breadsAccordian);
    const dishCard = screen.getAllByTestId('dish-card');
    expect(dishCard.length).toBe(6);
  });

  it('should add items to header and cart on adding dishes to cart', async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Menu />
            <Cart />
          </BrowserRouter>
        </Provider>
      )
    );
    const breadsAccordian = screen.getByText('Breads (6)');
    fireEvent.click(breadsAccordian);
    const addDishButtons = screen.getAllByTestId('first-add-dish-btn');
    fireEvent.click(addDishButtons[0]);
    expect(screen.getByText('Cart (1)')).toBeInTheDocument();
    fireEvent.click(addDishButtons[1]);
    expect(screen.getByText('Cart (2)')).toBeInTheDocument();
    const dishCards = screen.getAllByTestId('dish-card');
    expect(dishCards.length).toBe(8);
    fireEvent.click(screen.getByTestId('clear-cart'));
    const dishCardsAfterClearCart = screen.getAllByTestId('dish-card');
    expect(dishCardsAfterClearCart.length).toBe(6);
  });
});
