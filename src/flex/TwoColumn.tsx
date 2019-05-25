import React, { FC, useMemo, CSSProperties } from 'react';

const TwoColumn: FC<{}> = () => {
  const styles = useMemo<CSSProperties>(() => {
    const styles: CSSProperties = {
      display: 'flex',
      height: '100%',
      flexDirection: 'row',
    };
    return styles;
  }, []);

  const styleOne = useMemo<CSSProperties>(() => {
    const styles: CSSProperties = {
      width: '20%',
    };
    return styles;
  }, []);

  const styleTwo = useMemo<CSSProperties>(() => {
    const styles: CSSProperties = {
      flex: 1,
    };
    return styles;
  }, []);

  return (
    <div className="card">
      <h3 className="card-title">两栏比例布局</h3>
      <p className="card-subtitle">左侧宽度20%，右侧宽度80%</p>
      <div className="card-content">
        <div className="containerX">
          <div className="colorNested">
            <div style={styles}>
              <div className="one" style={styleOne}>A</div>
              <div className="two" style={styleTwo}>B</div>
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
              {`    A {
      width: 20%;  
    }`}
            </code>
          </pre>
          <pre>
            <code>
              {`    B {
      flex: 1; 
    }
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TwoColumn;