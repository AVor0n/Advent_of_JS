import { FC } from 'react';
import Chevron from '../assets/svg/chevron.svg';

type PlateProps = {
    name: string,
    price: number,
    count: number,
    imgSrc: string,
    onChange: (name: string, count: number) => void,
}

export const Plate: FC<PlateProps> = ({ name, price, count, imgSrc, onChange }) => {
    const increase = () => {
        onChange(name, count + 1)
    }
    const decrease = () => {
        if(count === 0) return;
        onChange(name, count - 1)
    }
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
                <button className="decrease" onClick={decrease}><Chevron /></button>
                <div className="quantity">{count}</div>
                <button className="increase" onClick={increase}><Chevron /></button>
            </div>

            <div className="subtotal">
                {price * count}
            </div>
        </>
    )
}
