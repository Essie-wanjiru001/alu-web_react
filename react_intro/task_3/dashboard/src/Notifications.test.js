import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from './utils';

describe('Notifications Component', () => {
  beforeEach(() => {
    render(<Notifications />);
  });

  test('renders without crashing', () => {
    // Already handled by render function
  });

  test('renders three list items', () => {
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
    expect(listItems[0]).toHaveTextContent('New course available');
    expect(listItems[1]).toHaveTextContent('New resume available');
  });

  test('renders the text "Here is the list of notifications"', () => {
    const paragraph = screen.getByText('Here is the list of notifications');
    expect(paragraph).toBeInTheDocument();
  });

  test('renders the close button with the correct alt text', () => {
    const button = screen.getByRole('button', { name: /Close/i });
    const img = screen.getByAltText('Close');
    expect(button).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  test('clicking the close button logs the correct message', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const button = screen.getByRole('button', { name: /Close/i });
    fireEvent.click(button);
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleSpy.mockRestore();
  });

  test('correctly renders the latest notification content', () => {
    const latestNotification = getLatestNotification();
    const lastItem = screen.getAllByRole('listitem')[2];
    expect(lastItem).toHaveAttribute('dangerouslySetInnerHTML');
    expect(lastItem.innerHTML).toContain(latestNotification.__html);
  });
});
