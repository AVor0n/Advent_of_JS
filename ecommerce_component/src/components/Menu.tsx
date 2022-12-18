import { FC } from "react";
import { menuItems } from "../appData";
import { Card } from "./Card";

type MenuProps = {
    itemsInCart: string[],
    addItemToCart: (name: string) => void
}

export const Menu: FC<MenuProps> = ({ itemsInCart, addItemToCart }) => {
    return (
        <div className="panel">
            <h1>To Go Menu</h1>
            <ul className="menu">
                {Object.entries(menuItems).map(([name, { price, imgSrc }]) => (
                    <li key={name}>
                        <Card name={name} imgSrc={imgSrc} inCart={itemsInCart.includes(name)} price={price} addToCart={addItemToCart} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
