import { FC } from 'react';
import { Item } from '../appData';
import { List } from './List';
import { Plate } from './Plate';

type CartProps = {
    data: Item[]
    tax: number,
}

export const Cart: FC<CartProps> = ({ data, tax }) => {
    const priceSubTotal = data.reduce((sum, it) => sum + it.count * it.price, 0);
    const taxAmount = priceSubTotal * tax;
    const priceAmount = priceSubTotal + taxAmount;

    return (
        <div className="panel cart">
            <h1>Your Cart</h1>

            {data.length > 0
                ? <List cls="cart-summary" data={data} item={Plate} keyProp={'name'} />
                : <p className="empty">Your cart is empty.</p>
            }

            <div className="totals">
                <div className="line-item">
                    <div className="label">Subtotal:</div>
                    <div className="amount price subtotal">${priceSubTotal}</div>
                </div>
                <div className="line-item">
                    <div className="label">Tax:</div>
                    <div className="amount price tax">${taxAmount}</div>
                </div>
                <div className="line-item total">
                    <div className="label">Total:</div>
                    <div className="amount price total">${priceAmount}</div>
                </div>
            </div>
        </div>
    )
}
