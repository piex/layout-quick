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
      <div className="card-footer">
        <h3>CSS：</h3>

        <div className="card-footer-content">
          <pre>
            <code>
              {`    .parent {
      display: grid;
      padding: 5px;
      width: 100%;
      height: 100%;
      font-size: 150%;
      grid-template-columns: [col] 150px 
                              [col] 150px 
                              [col] 150px 
                              [col] 150px;
      gap: 20px 20px;
      grid-template-rows: [row] auto [row] auto;
    }`
              }
            </code>
          </pre>
          <pre>
            <code>
              {`    .blocks {
      padding: 20px;
    }
    .one {
      grid-area: row / col / row / span 2;
    }
    .two {
      grid-area: row / 3 col / row / span 2;
    }
    .three {
      grid-area: 2 row / col / auto / span 2;
    }`
              }
            </code>
          </pre>
          <pre>
            <code>
              {`    .four {
      display: grid;

      grid-area: 2 row / 3 col / auto / span 2;
      grid-template-columns: 1fr 1fr;
      gap: 10px 10px;

      .one {
        grid-area: 1 / 1 / auto / 3;
      }

      .two {
        grid-area: 2 / 1 / auto / auto;
      }

      .three {
        grid-area: 2 / 2 / auto / auto;
      }
    }`
              }
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Nested;
