import { FC } from 'react';
import { AddButton } from './Button';

type CardProps = {
  name: string,
  price: number,
  imgSrc: string,
  count: number,
}

export const Card: FC<CardProps> = ({ name, price, count, imgSrc }) => {
  return (
    <>
      <div className="plate">
        <img src={imgSrc} alt={name} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">{price}</p>
        <AddButton added={count > 0} />
      </div>
    </>
  )
}
