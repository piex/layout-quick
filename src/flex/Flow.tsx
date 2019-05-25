import React, { FC, useMemo, CSSProperties, useState, useCallback } from 'react';

const boxes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

const flexDirections = ['column', 'column-reverse', 'row', 'row-reverse'];

const Flow: FC<{}> = () => {
  const [flowIndex, setFlowIndex] = useState(0);

  const flexFlow = useMemo(() => {
    return `${flexDirections[flowIndex]} wrap`;
  }, [flowIndex]);

  const styles = useMemo<CSSProperties>(() => {
    const styles: CSSProperties = {
      display: 'flex',
      height: '100%',
      flexDirection: 'row',
      cursor: 'pointer',
      flexFlow: flexFlow,
    };
    return styles;
  }, [flexFlow]);

  const childStyle = useMemo<CSSProperties>(() => {
    const styles: CSSProperties = {
      flex: "1 1 25%",
      padding: '0px 10px 10px 0px',
      backgroundColor: 'transparent',
    };

    if (/column/.test(flexFlow)) {
      styles.maxHeight = '25%';
    } else {
      styles.maxWidth = '25%';
    }

    return styles;
  }, [flexFlow]);

  const handleClick = useCallback(
    () => {
      if (flowIndex === 3) {
        setFlowIndex(0);
      } else {
        setFlowIndex(flowIndex + 1);
      }
    }, [flowIndex]);

  return (
    <article className="card">
      <h3 className="card-title">Flex Flow</h3>
      <p className="card-subtitle">flex-flow 是 flex-direction 和 flex-wrap 的简写形式，点击下方色块切换 flex-direction。</p>
      <div className="card-content">
        <div style={{ height: '200px' }}>
          <div style={styles} onClick={handleClick}>
            {
              boxes.map(box => (
                <div key={box} style={childStyle} >
                  <div
                    key={box}
                    className={`${box} gap-children`}
                  >
                    {box}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="card-footer">
        <h3>CSS：</h3>
        <pre>
          <code>
            {`    disply: flex;
    flex-flow: ${flexFlow};`
            }
          </code>
        </pre>
      </div>
    </article>
  );
};

export default Flow;