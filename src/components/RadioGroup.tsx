import React, { FC } from 'react';

interface IRadioProps {
  label: string;
  name: string;
  options: string[];
  checked: string;
  onChange: (checked: string) => void;
}

const RadioGroup: FC<IRadioProps> = ({ label, name, options, checked, onChange }) => {
  return (
    <div className="radio-group">
      <h4 className="radio-group-header">{label}</h4>
      <div className="radio-group-content">
        <div className="radio-container">
          {
            options.map((option) => {
              return (
                <label className="radio-label" key={option}>
                  <input
                    type="radio"
                    className="radio-input"
                    name={name}
                    value={option}
                    onChange={() => onChange(option)}
                    checked={option === checked}
                  />
                  <span className="radio-label-container">{option}</span>
                </label>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default RadioGroup;