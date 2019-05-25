import React, { FC } from 'react';

const Minmax: FC<{}> = () => {
  return (
    <section className="card">
      <h3 className="card-title">Grid 中的 Minmax</h3>
      <p className="card-subtitle">minmax() 定义了一个长宽范围的闭区间。</p>
      <div className="card-content">
        <div className="containerX">
          <div className="colorNested" style={{ height: 'auto' }}>
            <div className="grid-minmax">
              <div className="box" style={{ gridColumn: 'auto / span 2' }}>A</div>
              <div className="box">B</div>
              <div className="box">C</div>
              <div className="box">D</div>
              <div className="box">E</div>
              <div className="box">F</div>
              <div className="box" style={{ gridArea: 'auto / auto / span 2 / span 2' }}>G</div>
              <div className="box">H</div>
              <div className="box">I</div>
              <div className="box">J</div>
              <div className="box" style={{ gridColumn: 'auto / span 3' }}>K</div>
              <div className="box">L</div>
              <div className="box">M</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minmax;
