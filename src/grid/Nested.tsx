import React, { FC } from 'react';

const Nested: FC<{}> = () => {
  return (
    <section className="card">
      <h3 className="card-title">Grid 嵌套网格布局</h3>
      <p className="card-subtitle">多级 Grid 嵌套网格布局。</p>
      <div className="card-content">
        <div className="containerX">
          <div className="colorNested" style={{ height: 'auto' }}>
            <div className="grid-nested">
              <div className="blocks one">A</div>
              <div className="blocks two" >B</div>
              <div className="blocks three">C</div>
              <div className="blocks four">
                <div className="blocks one">E</div>
                <div className="blocks two" >F</div>
                <div className="blocks three">G</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nested;
