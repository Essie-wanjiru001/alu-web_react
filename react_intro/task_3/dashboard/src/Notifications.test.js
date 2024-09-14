import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from './utils';

describe('Notifications Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items', () => {
    const listItems = wrapper.find('ul li');
    expect(listItems.length).toBe(3);
    expect(listItems.at(0).text()).toBe('New course available');
    expect(listItems.at(1).text()).toBe('New resume available');
  });

  it('renders the text "Here is the list of notifications"', () => {
    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toEqual('Here is the list of notifications');
  });

  it('renders the close button with the correct alt text', () => {
    const button = wrapper.find('button');
    const img = wrapper.find('img');
    expect(button.prop('aria-label')).toEqual('Close');
    expect(img.prop('alt')).toEqual('Close');
  });

  it('clicking the close button logs the correct message', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const button = wrapper.find('button');
    button.simulate('click');
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleSpy.mockRestore();
  });

  it('correctly renders the latest notification content', () => {
    const latestNotification = getLatestNotification();
    const lastItem = wrapper.find('ul li').at(2);
    expect(lastItem.prop('dangerouslySetInnerHTML')).toEqual(latestNotification);
  });
});
