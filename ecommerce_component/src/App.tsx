import {FC, useState} from 'react';
import { Cart } from './components/Cart';
import { Menu } from './components/Menu';
import { Item, menuItems, tax } from './appData';
export const App: FC = () => {
    const [inCart, setInCart] = useState<Item[]>([]);

    return (
        <div className="wrapper menu">
            <Menu data={menuItems}/>
            <Cart data={inCart} tax={tax}/>
        </div>
    )
}
