import "./ProductsPage.css";

import { FC, useState } from "react";
import { ProductsList } from "../../components/ProductList/ProductsList";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Select } from "../../components/Select/Select";

export const ProductsPage: FC = () => {
  const [searchString, setSearchString] = useState<string>("");
  const [filterOption, setFilterOption] = useState<string>("");

  const handleSearchChange = (searchString: string): void => {
    setSearchString(searchString);
  };

  const handleSelectedChange = (option: string): void => {
    setFilterOption(option);
  };

  return (
    <section className="products">
      <div className="products__wrapper">
        <Select
          defaultValue="Фильтровать по"
          options={[
            { value: "all", name: "всем товарам" },
            { value: "favorites", name: "любимым товарам" },
          ]}
          value={filterOption}
          onChange={handleSelectedChange}
        />
        <SearchInput onChange={handleSearchChange} />
        <ProductsList searchString={searchString} filterOption={filterOption} />
      </div>
    </section>
  );
};
