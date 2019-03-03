import React from 'react';
import { element } from 'prop-types';

import Header from './Header';
import Meta from './Meta';

const Page = ({ children }) => (
  <div>
    <Meta />
    <Header />
    {children}
  </div>
);

Page.propTypes = {
  children: element.isRequired,
};

export default Page;
