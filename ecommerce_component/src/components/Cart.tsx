import { FC } from 'react';
import { menuItems, tax } from '../appData';
import { Plate } from './Plate';

type CartProps = {
    data: Record<string, number>,
    change: (state: Record<string, number>) => void,
}

export const Cart: FC<CartProps> = ({ data, change }) => {
    const priceSubTotal = Object.entries(data).reduce((sum, [name, count]) => sum + count * menuItems[name].price, 0);
    const taxAmount = Math.round(priceSubTotal * tax);
    const priceAmount = Math.round(priceSubTotal + taxAmount);

    const changeItemCount = ((name: string, count: number) => {
        const newCartData = { ...data, [name]: count };
        if (count === 0) delete newCartData[name]
        change(newCartData);
    })

    return (
        <div className="panel cart">
            <h1>Your Cart</h1>

            {Object.keys(data).length > 0
                ? (
                    <ul className='cart-summary'>
                        {Object.entries(data).map(([name, count]) => (
                            <li key={name}>
                                <Plate name={name} {...menuItems[name]} count={count} onChange={changeItemCount} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="empty">Your cart is empty.</p>
                )
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
