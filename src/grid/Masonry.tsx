import React, { FC } from 'react';

const Masonry: FC<{}> = () => {
  return (
    <section className="card">
      <h3 className="card-title">自适应网格布局</h3>
      <p className="card-subtitle">子元素宽度固定，父元素宽度不固定。</p>
      <div className="card-content">
        <div className="containerX">
          <div className="colorNested" style={{ height: 'auto' }}>
            <div className="grid-masonry">
              <div className="box">A</div>
              <div className="box">B</div>
              <div className="box">C</div>
              <div className="box">D</div>
              <div className="box">E</div>
              <div className="box">F</div>
              <div className="box">G</div>
              <div className="box">H</div>
              <div className="box">I</div>
              <div className="box">J</div>
              <div className="box">K</div>
              <div className="box">L</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <h3>CSS：</h3>

        <div className="card-footer-content">
          <pre>
            <code>
              {`    .parent {
      display: grid;
      grid-template-columns: repeat(auto-fill, 300px);
      justify-content: space-around;
      gap: 10px 0;
    }`
              }
            </code>
          </pre>
          <pre>
            <code>
              {`    .child {
      width: 300px;
    }`
              }
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Masonry;
