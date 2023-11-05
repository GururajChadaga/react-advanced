import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { RestaurantsMock } from '../../../__mocks__/RestaurantsApiMock';
import Body from '../../Body';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RestaurantsMock);
    },
  });
});

describe('Filter Functionality Tests', () => {
  it('Shoudl show 20 cards, 1 card after search, 20 cards after all', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const searchBox = screen.getByTestId('search-input');
    const searchButton = screen.getByTestId('search-btn');
    const restaurantCardsBeforeSearch =
      screen.getAllByTestId('restaurant-card');
    expect(searchBox).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(restaurantCardsBeforeSearch.length).toBe(20);

    fireEvent.change(searchBox, { target: { value: 'Burger' } });
    fireEvent.click(searchButton);
    const restaurantCardsAfterSearch = screen.getAllByTestId('restaurant-card');
    expect(restaurantCardsAfterSearch.length).toBe(1);

    const filterAllBtn = screen.getByTestId('filter-all-btn');
    fireEvent.click(filterAllBtn);
    const restaurantCardsAfterFilterAll =
      screen.getAllByTestId('restaurant-card');
    expect(restaurantCardsAfterFilterAll.length).toBe(20);
  });
  it('Shoudl show 20 cards, 4 cards after top rated, 20 cards after all,', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const restaurantCardsBeforeSearch =
      screen.getAllByTestId('restaurant-card');
    expect(restaurantCardsBeforeSearch.length).toBe(20);
    const topRatedButtom = screen.getByTestId('filter-toprated-btn');
    fireEvent.click(topRatedButtom);

    const topRatedRestaurantCards = screen.getAllByTestId('restaurant-card');
    expect(topRatedRestaurantCards.length).toBe(5);

    const filterAllBtn = screen.getByTestId('filter-all-btn');
    fireEvent.click(filterAllBtn);
    const restaurantCardsAfterFilterAll =
      screen.getAllByTestId('restaurant-card');
    expect(restaurantCardsAfterFilterAll.length).toBe(20);
  });
});
