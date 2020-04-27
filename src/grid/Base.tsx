import React, { FC } from 'react';

const Base: FC<{}> = () => {
  return (
    <section className="card">
      <h3 className="card-title">Grid 圣杯布局</h3>
      <p className="card-subtitle">圣杯布局指的是一个网页由页眉，3等高列（2个固定侧栏和中心内容主体）和贴在页面底部的页脚组成。</p>
      <div className="card-content">
        <div className="containerX">
          <div className="grid-base">
            <div className="child blocks one">one</div>
            <div className="child blocks two" >two</div>
            <div className="child blocks three">three</div>
            <div className="child blocks four">four</div>
            <div className="child blocks five">five</div>
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

      grid-template-areas: "one one one" 
                            "two three four" 
                            "five five five";
      grid-template-columns: 200px auto 120px;
      gap: 20px 20px;
    }`
              }
            </code>
          </pre>
          <pre>
            <code>
              {`    .child {
        padding: 8px;
        box-shadow: 0 2px 5px 0 rgba(52,47,51,.63);
        color: #fff;
        text-align: center;
        opacity: .9;
      }

      .one {
        grid-area: one;
      }`
              }
            </code>
          </pre>
          <pre>
            <code>
              {`    .two {
        grid-area: two;
      }
    
      .three {
        grid-area: three;
      }
      
      .four {
        grid-area: four;
      }
    
      .five {
        grid-area: five;
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

export default Base;
