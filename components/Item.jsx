import React from 'react';
import Link from 'next/link';

import formatMoney from '../lib/formatMoney';

import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Item = ({ item }) => (
  <ItemStyles>
    {item.image
      ? <img src={item.img} alt={item.title} />
      : null
    }

    <Title>
      <Link
        href={{
          pathname: '/item',
          query: { id: item.id },
        }}
      >
        <a>{item.title}</a>
      </Link>
    </Title>

    <PriceTag>{formatMoney(item.price)}</PriceTag>

    <p>{item.description}</p>

    <div className="buttonList">
      <Link
        href={{
          pathname: 'update',
          query: { id: item.id },
        }}
      >
        <a>
          <span>Edit </span>
          <span role="img" aria-label="edit">✏️</span>
        </a>
      </Link>

      <button type="button">Add To Cart</button>
      <button type="button">Delete </button>
    </div>
  </ItemStyles>
);

export default Item;
