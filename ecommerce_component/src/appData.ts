export type Item = {
    price: number,
    imgSrc: string,
}

export const tax = 0.0975;

export const menuItems: Record<string, Item> = {
    'French Fries with Ketchup': {
        price: 223,
        imgSrc: 'images/plate__french-fries.png',
    },
    'Salmon and Vegetables': {
        price: 512,
        imgSrc: 'images/plate__salmon-vegetables.png',
    },
    'Spaghetti Meat Sauce': {
        price: 782,
        imgSrc: 'images/plate__spaghetti-meat-sauce.png',
    },
    'Bacon, Eggs, and Toast': {
        price: 599,
        imgSrc: 'images/plate__bacon-eggs.png',
    },
    'Chicken Salad with Parmesan': {
        price: 698,
        imgSrc: 'images/plate__chicken-salad.png',
    },
    'Fish Sticks and Fries': {
        price: 634,
        imgSrc: 'images/plate__fish-sticks-fries.png',
    }
}
