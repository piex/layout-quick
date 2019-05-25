import React, { FC } from 'react';
import Base from './Base';
import Nested from './Nested';
import Minmax from './Minmax';

const Grid: FC<{}> = () => {
  return (
    <article>
      <Base />
      <Nested />
      <Minmax />
    </article>
  );
};

export default Grid;
