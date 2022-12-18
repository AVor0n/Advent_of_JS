import { FC } from "react"
import Check from '../assets/svg/check.svg';

type AddButtonProps = {
    added: boolean,
    onClick: () => void,
}

export const AddButton: FC<AddButtonProps> = ({ added, onClick }) => {
    if (added) {
        return (
            <button className="in-cart">
                <Check />
                In Cart
            </button>
        )
    }

    return <button className="add" onClick={onClick}>Add to Cart</button>
}
