import { FC, useState } from 'react';
import { Cart } from './components/Cart';
import { Menu } from './components/Menu';

export const App: FC = () => {
    const [itemsInCart, setItemsInCart] = useState<Record<string, number>>({});
    const addItemToCart = (name: string) => { setItemsInCart({ ...itemsInCart, [name]: 1 }) }

    return (
        <div className="wrapper menu">
            <Menu itemsInCart={Object.keys(itemsInCart)} addItemToCart={addItemToCart} />
            <Cart data={itemsInCart} change={setItemsInCart} />
        </div>
    )
}
