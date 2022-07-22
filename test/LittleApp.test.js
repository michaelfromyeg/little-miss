import { render, screen } from '@testing-library/react';
import LittleApp from '../src/LittleApp';

test('renders learn react link', () => {
  render(<LittleApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
