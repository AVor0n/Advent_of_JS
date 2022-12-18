import { FC } from 'react';
import { AddButton } from './Button';

type CardProps = {
  name: string,
  price: number,
  imgSrc: string,
  inCart: boolean,
  addToCart: (itemId: string) => void,
}

export const Card: FC<CardProps> = ({ name, price, inCart, imgSrc, addToCart }) => {
  return (
    <>
      <div className="plate">
        <img src={imgSrc} alt={name} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">{price}</p>
        <AddButton added={inCart} onClick={() => addToCart(name)}/>
      </div>
    </>
  )
}
