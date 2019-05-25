import React, { FC, useState, useMemo, CSSProperties } from 'react';
import RadioGroup from '../components/RadioGroup';


const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];

const justifyContents = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];

const alignItemses = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];

const LayoutAlign: FC<{}> = () => {
  const [flexDirection, setFlexDirection] = useState<CSSProperties['flexDirection']>('row');
  const [justifyContent, setJustifyContent] = useState<CSSProperties['justifyContent']>('space-around');
  const [alignItems, setAlignItems] = useState<CSSProperties['alignItems']>('center');

  const styles = useMemo<CSSProperties>(() => {
    const styles: CSSProperties = {
      display: 'flex',
      height: '100%',
      flexDirection,
      justifyContent,
      alignItems,
    };

    return styles;
  }, [flexDirection, justifyContent, alignItems]);

  return (
    <div className="card">
      <h3 className="card-title">Flex 基础属性</h3>
      <p className="card-subtitle">更改 flex 布局属性，查看效果。</p>
      <div className="card-content">
        <div className="containerX">
          <div className={`colorNested ${/column/.test(flexDirection!) ? 'taller' : 'lower'}`}>
            <div style={styles}>
              <div className="blocks one">1</div>
              <div className={`blocks ${/column/.test(flexDirection!) ? 'two_w' : 'two_h'}`}>2</div>
              <div className="blocks three">3</div>
              <div className={`blocks ${/column/.test(flexDirection!) ? 'four_w' : 'four_h'}`}>4</div>
              <div className="blocks fives">5</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <RadioGroup
          label="flex-direction"
          name="flexDirection"
          options={flexDirections}
          checked={flexDirection as string}
          onChange={checked => setFlexDirection(checked as CSSProperties['flexDirection'])}
        />
        <RadioGroup
          label='justify-content'
          name='justifyContent'
          options={justifyContents}
          checked={justifyContent as string}
          onChange={checked => setJustifyContent(checked as CSSProperties['justifyContent'])}
        />
        <RadioGroup
          label='align-items'
          name='alignItems'
          options={alignItemses}
          checked={alignItems as string}
          onChange={checked => setAlignItems(checked as CSSProperties['alignItems'])}
        />
      </div>
      <div className="card-footer">
        <h3>CSS：</h3>
        <pre>
          <code>
            {`    disply: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};`
            }
          </code>
        </pre>
      </div>
    </div>
  );
};

export default LayoutAlign;