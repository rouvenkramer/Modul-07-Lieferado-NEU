
const menus = [
    {
        category: 'Pizza',
        items: [
            {
                name: "Margherita", price: 8.99, info: "Classic with fresh tomatoes, mozzarella, and basil",
                image: "./img/menuThumbs/margheritaThumb.jpg"
            },
            {
                name: "Pepperoni Delight", price: 9.99, info: "Loaded with spicy pepperoni and melted cheese",
                image: "./img/menuThumbs/pepperoniThumb.jpg"
            },
            {
                name: "Veggie Supreme", price: 10.49, info: "Topped with bell peppers, mushrooms, and olives",
                image: "./img/menuThumbs/veggieSupremeThumb.jpg"
            },
            {
                name: "BBQ Chicken", price: 11.49, info: "Smoky BBQ sauce with grilled chicken and red onions",
                image: "./img/menuThumbs/bbqChickenThumb.jpg"
            }
        ]
    },
    {
        category: 'Pasta',
        items: [
            {
                name: "Spaghetti Carbonara", price: 10.99, info: "Creamy sauce with pancetta and Parmesan",
                image: "./img/menuThumbs/carbonaraThumb.jpg"
            },
            {
                name: "Penne Arrabbiata", price: 9.49, info: "Spicy tomato sauce with chili flakes and garlic",
                image: "./img/menuThumbs/penneArrabbiataThumb.jpg"
            },
            {
                name: "Fettuccine Alfredo", price: 11.99, info: "Rich, creamy sauce with Parmesan and butter",
                image: "./img/menuThumbs/fettuccineAlfredoThumb.jpg"
            },
            {
                name: "Lasagna Bolognese", price: 12.49, info: "Layered pasta with hearty meat sauce and cheese",
                image: "./img/menuThumbs/lasagnaBologneseThumb.jpg"
            }
        ]
    },
    {
        category: 'Burgers',
        items: [
            {
                name: "Classic Cheeseburger", price: 9.49, info: "Juicy beef patty with cheddar, lettuce, and tomato",
                image: "./img/menuThumbs/classicCheeseburgerThumb.jpg"
            },
            {
                name: "Bacon BBQ Burger", price: 10.99, info: "Beef patty with crispy bacon and smoky BBQ sauce",
                image: "./img/menuThumbs/baconBBQBurgerThumb.jpg"
            },
            {
                name: "Veggie Burger", price: 9.99, info: "Plant-based patty with avocado and sprouts",
                image: "./img/menuThumbs/veggieBurgerThumb.jpg"
            },
            {
                name: "Spicy Jalapeño Burger", price: 10.49, info: "Beef patty topped with jalapeños and pepper jack cheese",
                image: "./img/menuThumbs/spicyJalapenoBurgerThumb.jpg"
            }
        ]
    },
    {
        category: 'Salads',
        items: [
            {
                name: "Caesar Salad", price: 7.99, info: "Crisp romaine lettuce with Caesar dressing and croutons",
                image: "./img/menuThumbs/caesarSaladThumb.jpg"
            },
            {
                name: "Greek Salad", price: 8.49, info: "Tomatoes, cucumbers, olives, and feta cheese",
                image: "./img/menuThumbs/greekSaladThumb.jpg"
            },
            {
                name: "Garden Salad", price: 7.49, info: "Mixed greens with fresh vegetables and vinaigrette",
                image: "./img/menuThumbs/gardenSaladThumb.jpg"
            },
            {
                name: "Caprese Salad", price: 8.99, info: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
                image: "./img/menuThumbs/capreseSaladThumb.jpg"
            }
        ]
    },
    {
        category: 'Desserts',
        items: [
            {
                name: "Tiramisu", price: 6.99, info: "Coffee-soaked ladyfingers with mascarpone cream",
                image: "./img/menuThumbs/tiramisuThumb.jpg"
            },
            {
                name: "Chocolate Lava Cake", price: 7.49, info: "Warm chocolate cake with a molten center",
                image: "./img/menuThumbs/chocolateLavaCakeThumb.jpg"
            },
            {
                name: "Cheesecake", price: 6.49, info: "Classic New York-style cheesecake with a buttery crust",
                image: "./img/menuThumbs/cheesecakeThumb.jpg"
            },
            {
                name: "Gelato Trio", price: 5.99, info: "Three scoops of assorted Italian gelato",
                image: "./img/menuThumbs/gelatoTrioThumb.jpg"
            }
        ]
    }
];


let totalAmount = 0;
let totalPrice = 0;

let basket = JSON.parse(localStorage.getItem('storedBasket')) || [];

