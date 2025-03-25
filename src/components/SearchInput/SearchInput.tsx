import "./SearchInput.css";

import { FC, ChangeEvent } from "react";

interface SearchInputProps {
  onChange: (searchString: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ onChange }) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="search-input"
      type="search"
      placeholder="Найти по названию..."
      onChange={handleSearchChange}
    />
  );
};
