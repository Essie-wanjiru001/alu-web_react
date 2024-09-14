import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getFullYear, getFooterCopy } from './utils';

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    const headerDiv = wrapper.find('.App-header');
    expect(headerDiv.exists()).toBe(true);

    const logo = headerDiv.find('img');
    const heading = headerDiv.find('h1');
    expect(logo.exists()).toBe(true);
    expect(heading.text()).toEqual('School dashboard');
  });

  it('renders a div with the class App-body containing email and password inputs', () => {
    const wrapper = shallow(<App />);
    const bodyDiv = wrapper.find('.App-body');
    expect(bodyDiv.exists()).toBe(true);

    const emailInput = bodyDiv.find('input#email');
    const passwordInput = bodyDiv.find('input#pwd');
    expect(emailInput.prop('type')).toBe('email');
    expect(passwordInput.prop('type')).toBe('password');
  });

  it('renders a button with the text OK', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    expect(button.text()).toBe('OK');
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    const footerDiv = wrapper.find('.App-footer');
    expect(footerDiv.exists()).toBe(true);

    const currentYear = getFullYear();
    const footerText = footerDiv.find('p').text();
    expect(footerText).toContain(`Copyright ${currentYear}`);
    expect(footerText).toContain(getFooterCopy(true));
  });
});
