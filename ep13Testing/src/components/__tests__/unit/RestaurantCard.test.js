import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import RestaurantCard, { getTopRatedBadge } from '../../RestaurantCard';
import { RestaurantCardMockProps } from '../../../__mocks__/RestaurantCardMock';

describe('Reastaurant Card Tests', () => {
  it('Should render the Restaurant Card with data from props', () => {
    render(
      <BrowserRouter>
        <RestaurantCard resData={RestaurantCardMockProps} />
      </BrowserRouter>
    );
    const resName = screen.getByText("Glen's Bakehouse");
    expect(resName).toBeInTheDocument();
  });

  test('HOC: It Should render the Restaurant Card with top rated badge', () => {
    const RestaurantCardTopRated = getTopRatedBadge(RestaurantCard);

    render(
      <BrowserRouter>
        <RestaurantCardTopRated resData={RestaurantCardMockProps} />
      </BrowserRouter>
    );
    const topRatedBadge = screen.getByText('TopRated');
    expect(topRatedBadge).toBeInTheDocument();
  });
});
