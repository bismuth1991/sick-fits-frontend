/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/sell"><a>Sell</a></Link>
    <Link href="/"><a>Home</a></Link>
  </div>
);

export default Nav;
