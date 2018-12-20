import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import TransactionSummary from '../../../web/src/components/container/TransactionSummary';

const props = {
  items: [{ name: 'Milk', amount: '200', purchased: true }]
};
const wrapper = mount(
  <BrowserRouter>
    <TransactionSummary {...props} />
  </BrowserRouter>
);

describe('Transaction Summary Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
