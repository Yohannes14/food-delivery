export const categories = [
    {
        id: 1,
        name: 'Shiro',
        image: require('../assets/images/shiro.jpg'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/bergur.jpg'),
    },
    {
        id: 3,
        name: 'Tibs',
        image: require('../assets/images/tibs.jpg'),
    },
    {
        id: 4,
        name: 'Chicken',
        image: require('../assets/images/chicken.jpg'),
    },
    {
        id: 5,
        name: 'Kitfo',
        image: require('../assets/images/kitfo.jpg'),
    },
    {
        id: 6,
        name: 'Pizza',
        image: require('../assets/images/pizzaDish.png'),
    },
]

export const featured = {
    id: 1,
    restaurants: [
        {
            id: 1,
            name: 'Papa Johns',
            image: require('../assets/images/pizzaDish.png'),
            description: 'Ethiopian food',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pizza',
                    description: 'Ethiopian food',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'Shiro',
                    description: 'Ethiopian food',
                    price: 10,
                    image: require('../assets/images/shiro.jpg')
                },
                {
                    id: 3,
                    name: 'Burger',
                    description: 'Ethiopian food',
                    price: 10,
                    image: require('../assets/images/bergur.jpg')
                },
            ]

        },
        {
            id: 2,
            name: 'Papa Johns',
            image: require('../assets/images/shiro.jpg'),
            description: 'Ethiopian food',
            lng: 38.750,
            lat: 9.033,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pizza',
                    description: 'Ethiopian food',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'Shiro',
                    description: 'Ethiopian food',
                    price: 10,
                    image: require('../assets/images/shiro.jpg')
                },
                {
                    id: 3,
                    name: 'Burger',
                    description: 'Ethiopian food',
                    price: 10,
                    image: require('../assets/images/bergur.jpg')
                },
            ]

        },
        {
            id: 3,
            name: 'Papa Johns',
            image: require('../assets/images/bergur.jpg'),
            description: 'Ethiopian food',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pizza',
                    description: 'Ethiopian food',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'Shiro',
                    description: 'Ethiopian food',
                    price: 30,
                    image: require('../assets/images/shiro.jpg')
                },
                {
                    id: 3,
                    name: 'Burger',
                    description: 'Ethiopian food',
                    price: 60,
                    image: require('../assets/images/bergur.jpg')
                },
            ]

        }
    ]
}
