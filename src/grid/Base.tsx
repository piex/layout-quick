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
    </section>
  );
};

export default Base;
