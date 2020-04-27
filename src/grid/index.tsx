import React, { FC } from 'react';
import Base from './Base';
import Nested from './Nested';
import Minmax from './Minmax';
import Masonry from './Masonry';

const Grid: FC<{}> = () => {
  return (
    <article>
      <Base />
      <Nested />
      <Minmax />
      <Masonry />
    </article>
  );
};

export default Grid;
