import React, { FC, useMemo, CSSProperties } from 'react';

const ThreeColumn: FC<{}> = () => {
  const styles = useMemo<CSSProperties>(() => {
    const styles: CSSProperties = {
      display: 'flex',
      height: '100%',
      flexDirection: 'row',
    };
    return styles;
  }, []);

  const leftStyle = useMemo<CSSProperties>(() => {
    const styles: CSSProperties = {
      width: '200px',
    };
    return styles;
  }, []);

  const centerStyle = useMemo<CSSProperties>(() => {
    const styles: CSSProperties = {
      flex: 1,
    };
    return styles;
  }, []);

  const rightStyle = useMemo<CSSProperties>(() => {
    const styles: CSSProperties = {
      width: '120px',
    };
    return styles;
  }, []);

  return (
    <div className="card">
      <h3 className="card-title">三栏布局</h3>
      <p className="card-subtitle">两边固定，中间自适应</p>
      <div className="card-content">
        <div className="containerX">
          <div className="colorNested">
            <div style={styles}>
              <div className="one" style={leftStyle}>A</div>
              <div className="two" style={centerStyle}>B</div>
              <div className="three" style={rightStyle}>C</div>
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
      display: flex;
      flex-direction: row;
    }`}
            </code>
          </pre>
          <pre>
            <code>
              {`    .left {
      width: 200px;  
    }`}
            </code>
          </pre>
          <pre>
            <code>
              {`    .center {
      flex: 1; 
    }
              `}
            </code>
          </pre>
          <pre>
            <code>
              {`    .right {
      width: 120px; 
    }
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumn;