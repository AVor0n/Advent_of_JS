import { FC } from "react"

type AddButtonProps = {
    added: boolean,
}

export const AddButton: FC<AddButtonProps> = ({ added }) => {
    if (added) {
        return (
            <button className="in-cart">
                <img src="images/check.svg" alt="Check" />
                In Cart
            </button>
        )
    }

    return <button className="add">Add to Cart</button>
}
