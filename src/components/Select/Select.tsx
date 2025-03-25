import "./Select.css";

import { ChangeEvent, FC } from "react";

interface SelectProps {
  options: { value: string; name: string }[];
  defaultValue: string;
  value: string;
  onChange: (filterOption: string) => void;
}

export const Select: FC<SelectProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <div className="select-wrapper">
      <select
        className="select"
        value={value}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          onChange(event.target.value)
        }
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
