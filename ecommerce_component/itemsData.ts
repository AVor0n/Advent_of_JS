export type Item = {
    name: string,
    price: number,
    imgSrc: string,
    count: number,
}

export const menuItems: Item[] = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        imgSrc: 'plate__french-fries.png',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        imgSrc: 'plate__salmon-vegetables.png',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        imgSrc: 'plate__spaghetti-meat-sauce.png',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        imgSrc: 'plate__bacon-eggs.png',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        imgSrc: 'plate__chicken-salad.png',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        imgSrc: 'plate__fish-sticks-fries.png',
        count: 0
    }
]
