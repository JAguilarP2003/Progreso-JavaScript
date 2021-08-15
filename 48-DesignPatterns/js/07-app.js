const restaurantApp = {};

restaurantApp.menu = [
    {
        course: 'Black Ink Spaghetti',
        price: 80
    },
    
    {
        course: 'Thai beef salad',
        price: 60
    },

    {
        course: 'Seafood Soup',
        price: 80
    }
]

restaurantApp.functions = {
    showMenu: () => {
        console.log('Welcome to our Restaurant');

        menu.forEach((course, i) => {
            console.log(`${i}: ${course.course} - $${course.price}`);
        });
    },

    order: id => {
        console.log(`Your course: ${restaurantApp.menu[id].course} is being prepared.`);
    },

    addCourse: (course, price) => {
        const newOrder = {
            course,
            price
        };

        restaurantApp.menu.push(newOrder);
    }

}

restaurantApp.functions.order(1);

restaurantApp.functions.addCourse('Pizza', 10);

const {menu} = restaurantApp;

restaurantApp.functions.showMenu(menu);