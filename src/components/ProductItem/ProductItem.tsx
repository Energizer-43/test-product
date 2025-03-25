import "./ProductItem.css";

import { FC } from "react";
import { Product } from "../../models/Product";
import { RemoveProductButton } from "../RemoveProductButton/RemoveProductButton";
import { LikeProductButton } from "../LikeProductButton/LikeProductButton";

interface ProductItemProps {
  product: Product;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <li className="products__item">
      <img
        className="products__image"
        src={product.image}
        alt="Изображение товара"
      />
      <div className="products__content">
        <h3 className="products__title">{product.title}</h3>
        <p className="products__description">{product.description}</p>
        <span className="products__price">{product.price} $</span>
        <div className="products__btns-container">
          <LikeProductButton id={product.id} />
          <RemoveProductButton />
        </div>
      </div>
    </li>
  );
};
