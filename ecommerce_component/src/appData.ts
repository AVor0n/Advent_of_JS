export type Item = {
    name: string,
    price: number,
    imgSrc: string,
    count: number,
}

export const tax = 0.0975;

export const menuItems: Item[] = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        imgSrc: 'images/plate__french-fries.png',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        imgSrc: 'images/plate__salmon-vegetables.png',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        imgSrc: 'images/plate__spaghetti-meat-sauce.png',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        imgSrc: 'images/plate__bacon-eggs.png',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        imgSrc: 'images/plate__chicken-salad.png',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        imgSrc: 'images/plate__fish-sticks-fries.png',
        count: 0
    }
]
