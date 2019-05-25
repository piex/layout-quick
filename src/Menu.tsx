import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Menu: FC<{}> = () => {
  return (
    <article className="menu">
      <header>
        <h2 className="menu-title">Layout Quick：快速布局</h2>
        <p className="menu-subtitle">使用 flex、grid 等实现的的一些布局 Demo，快速实现页面布局，参考：
          <a href="https://tburleson-layouts-demos.firebaseapp.com" target="_black">Angular Flex</a>
        </p>
        <div className="menu-actions">
          <Link to="/flex"><button className="button">Flex</button></Link>
          <Link to="/grid"><button className="button">Grid</button></Link>
        </div>
      </header>
    </article>
  );
};

export default Menu;