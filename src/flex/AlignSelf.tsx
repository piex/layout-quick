import React, { FC, useState, useMemo, useCallback, CSSProperties } from 'react';

const alignSelfies = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];

const AlignSelf: FC<{}> = () => {
  const [alignSelfIndex, setAlignSelfIndex] = useState(0);

  const alignSelf: CSSProperties = useMemo(() => {
    return { alignSelf: alignSelfies[alignSelfIndex] };
  }, [alignSelfIndex]);

  const handleClick = useCallback(
    () => {
      if (alignSelfIndex === 4) {
        setAlignSelfIndex(0);
      } else {
        setAlignSelfIndex(alignSelfIndex + 1);
      }
    }, [alignSelfIndex]);

  return (
    <div className="card">
      <h3 className="card-title">Align-Self</h3>
      <p className="card-subtitle">点击 'target' 查看 'align-self' 属性效果</p>
      <div className="card-content">
        <div className="containerX">
          <div style={{ height: '200px' }}>
            <div className="align-self-box">
              <div className="child black one">1</div>
              <div className="child black two_h target" style={alignSelf} onClick={handleClick}>target</div>
              <div className="child black three">3</div>
              <div className="child black fout_h">4</div>
              <div className="child black five">5</div>
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
      align-items: center;
      justify-content: center;
    }`}
            </code>
          </pre>
          <pre>
            <code>
              {`    .child {
      flex: 1 1 0%;
    }`}
            </code>
          </pre>
          <pre>
            <code>
              {`    .target {
      align-self: ${alignSelfies[alignSelfIndex]}; 
    }
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};


export default AlignSelf;
