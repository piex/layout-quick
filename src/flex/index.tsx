import React, { FC } from 'react';
import LayoutAlign from './LayoutAlign';
import Flow from './Flow';
import TwoColumn from './TwoColumn';
import TwoColumnClassic from './TwoColumnClassic';
import AlignSelf from './AlignSelf';
import ThreeColumn from './ThreeColumn';

const Static: FC<{}> = () => {
  return (
    <article>
      <LayoutAlign />
      <Flow />
      <AlignSelf />
      <TwoColumn />
      <TwoColumnClassic />
      <ThreeColumn />
    </article>
  );
};

export default Static;