import { FC } from 'react';
import Chevron from '../../images/chevron.svg';

type PlateProps = {
    name: string,
    price: number,
    count: number,
    imgSrc: string,
}

export const Plate: FC<PlateProps> = ({ name, price, count, imgSrc }) => {
    return (
        <>
            <div className="plate">
                <img src={imgSrc} alt={name} className="plate" />
                <div className="quantity">{count}</div>
            </div>

            <div className="content">
                <p className="menu-item">{name}</p>
                <p className="price">{price}</p>
            </div>

            <div className="quantity__wrapper">
                <button className="decrease"><Chevron /></button>
                <div className="quantity">{count}</div>
                <button className="increase"><Chevron /></button>
            </div>

            <div className="subtotal">
                {price * count}
            </div>
        </>
    )
}
