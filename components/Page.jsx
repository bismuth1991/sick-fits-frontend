import React from 'react';
import { element } from 'prop-types';
import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

Page.propTypes = {
  children: element.isRequired,
};

export default Page;
