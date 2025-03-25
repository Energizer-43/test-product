import "./ProductsList.css";

import { FC } from "react";
import { useAppSelector } from "../../hook";
import { ProductItem } from "../ProductItem/ProductItem";
import { Loader } from "../Loader/Loader";

interface ProductsListProps {
  searchString: string;
  filterOption: string;
}

export const ProductsList: FC<ProductsListProps> = ({
  searchString,
  filterOption,
}) => {
  const { products, status, error } = useAppSelector((state) => state.products);
  const { productsLiked } = useAppSelector((state) => state.productsLiked);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchString.toLowerCase())
  );
  const likedProducts = filteredProducts.filter((product) =>
    productsLiked.includes(product.id)
  );

  return (
    <>
      {status === "loading" && <Loader />}
      {error && <h3 className="error">Произошла ошибка: {error}</h3>}
      <ul className="products__list">
        {filterOption === "favorites"
          ? likedProducts.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))
          : filteredProducts.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
      </ul>
    </>
  );
};
