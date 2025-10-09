
class menuItem {
    picture;
    name;
    description;
    price;

    constructor(picture, name, description, price){
        this.picture = picture;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

const coffeeClassicsItems = {
    picturesFolder : "/coffee-classics",
    items : [
        new menuItem("/espresso.jpg", "Espresso", "Classic espresso with the signature crema", 45),
        new menuItem("/macchiato.jpg", "Macchiato", "Espresso topped with a touch of milk foam", 50),
        new menuItem("/americano.jpg", "Americano", "Bold espresso with hot water", 55),
        new menuItem("/cappuccino.jpg", "Cappuccino", "Espresso with milk with the iconic foam on top", 65),
        new menuItem("/cafe-latte.jpg", "Cafe Latte", "Creamy steamed milk over espresso", 65),
        new menuItem("/flat-white.jpg", "Flat White", "Velvety smooth espresso and microfoam", 70),
        new menuItem("/mocha.jpg", "Mocha", "Chocolate, espresso, and steamed milk topped with whipped cream", 75)
    ]
} 

const icedCoffeeCreationsItems = {
    picturesFolder : "/iced-coffee-creations",
    items : [
        new menuItem("/iced-americano.jpg", "Iced Americano", "Espresso poured over chilled water and ice", 60),
        new menuItem("/iced-latte.jpg", "Iced Latte", "Smooth espresso with cold milk and ice", 70),
        new menuItem("/iced-mocha.jpg", "Iced Mocha", "Chocolate and espresso blended with milk and ice", 80),
        new menuItem("/cold-brew.jpg", "Cold Brew", "12-hour steeped coffee, naturally sweet and bold", 75),
        new menuItem("/affogato.jpg", "Affogato", "A scoop of vanilla ice cream drowned in hot espresso", 85)
    ]
} 

const specialtyDrinksItems = {
    picturesFolder : "/specialty-drinks",
    items : [
        new menuItem("/caramel-latte.jpg", "Caramel Latte", "Espresso, caramel syrup, and steamed milk", 70),
        new menuItem("/vanilla-latte.jpg", "Vanilla Latte", "Subtle sweetness with creamy texture", 70),
        new menuItem("/hazelnut-mocha.jpg", "Hazelnut Mocha", "Espresso with hazelnut and chocolate", 80),
        new menuItem("/spanish-latte.jpg", "Spanish Latte", "Espresso with sweetened condensed milk and steamed milk", 75),
        new menuItem("/cinnamon-cappuccino.jpg", "Cinnamon Cappuccino", "Classic cappuccino with a dusting of cinnamon", 70)
    ]
}

const hotChocolateAndNonCoffeeItems = {
    picturesFolder : "/hot-chocolate-and-non-coffee",
    items : [
        new menuItem("/classic-hot-chocolate.jpg", "Classic Hot Chocolate", "Rich, creamy cocoa topped with whipped cream", 65),
        new menuItem("/white-hot-chocolate.jpg", "White Hot Chocolate", "Sweet, silky, and smooth", 70),
        new menuItem("/chai-latte.jpg", "Chai Latte", "Spiced black tea with steamed milk", 70),
        new menuItem("/matcha-latte.jpg", "Matcha Latte", "Japanese green tea blended with milk", 80),
        new menuItem("/turmeric-latte.jpg", "Turmeric Latte", "Warming, golden milk with spices", 75)
    ]
}

const refreshingColdDrinksItems = {
    picturesFolder : "/refreshing-cold-drinks",
    items : [
        new menuItem("/iced-chai-latte.jpg", "Iced Chai Latte", "Spiced tea and milk over ice", 75),
        new menuItem("/iced-matcha-latte.jpg", "Iced Matcha Latte", "Cool and earthy", 85),
        new menuItem("/iced-chocolate.jpg", "Iced Chocolate", "Creamy cocoa over ice", 70),
        new menuItem("/lemon-iced-tea.jpg", "Lemon Iced Tea", "Freshly brewed and zesty", 55),
        new menuItem("/peach-iced-tea.jpg", "Peach Iced Tea", "Fruity and refreshing", 55)
    ]
}

const optionalAddOnsItems = {
    picturesFolder : "/optional-add-ons",
    items : [
        new menuItem("/extra-shot-of-espresso.jpg", "Extra Shot of Espresso", "", 15),
        new menuItem("/oat-almond-soy-milk.jpg", "Oat / Almond / Soy Milk", "", 20),
        new menuItem("/flavored-syrup.jpg", "Flavored Syrup", "", 15),
        new menuItem("/whipped-cream.jpg", "Whipped Cream", "", 10)
    ]
}

const menuCategoriesContainer = document.getElementById("menu-categories");
const displayContainer = document.querySelector(".menu-display");

const menuCategories = [coffeeClassicsItems, icedCoffeeCreationsItems, 
    specialtyDrinksItems, hotChocolateAndNonCoffeeItems, refreshingColdDrinksItems, optionalAddOnsItems];
const menuCategoriesElements = menuCategoriesContainer.children;

const displayMenuItems = (menuItems) => {
        const menuItemsContent = menuItems.items;
        for (let menuItem of menuItemsContent) {

            const menuItemContainer = document.createElement("div");
            const menuItemImage = document.createElement("img");
            const menuItemName = document.createElement("h3");
            const menuItemDescription = document.createElement("p");
            const menuItemPrice = document.createElement("p");

            menuItemContainer.classList.add("menu-item");

            menuItemImage.src = "/images/menu" + menuItems.picturesFolder + menuItem.picture;
            menuItemName.innerText = menuItem.name;
            menuItemDescription.innerText = menuItem.description;
            menuItemPrice.innerText = menuItem.price + " EGP";
            console.log(menuItem);

            menuItemContainer.append(menuItemImage, menuItemName, menuItemDescription, menuItemPrice);
            displayContainer.append(menuItemContainer);
        }
};

menuCategoriesElements[0].classList.add("category-selected");
displayMenuItems(menuCategories[0]);

for (let i = 0; i < menuCategoriesElements.length; i++) {
    // const menuItems = menuCategories[i].items;
    menuCategoriesElements[i].addEventListener("click", () => {
        [...menuCategoriesElements].forEach(element => element.classList.remove("category-selected"));
        menuCategoriesElements[i].classList.add("category-selected");
        displayContainer.innerText = "";
        displayMenuItems(menuCategories[i]);
        // for (let menuItem of menuItems) {
        //     const menuItemContainer = document.createElement("div");
        //     const menuItemImage = document.createElement("img");
        //     const menuItemName = document.createElement("h3");
        //     const menuItemDescription = document.createElement("p");
        //     const menuItemPrice = document.createElement("p");

        //     menuItemContainer.classList.add("menu-item");

        //     menuItemImage.src = "/images/menu" + menuCategories[i].picturesFolder + menuItem.picture;
        //     menuItemName.innerText = menuItem.name;
        //     menuItemDescription.innerText = menuItem.description;
        //     menuItemPrice.innerText = menuItem.price + " EGP";
        //     console.log(menuItem);

        //     menuItemContainer.append(menuItemImage, menuItemName, menuItemDescription, menuItemPrice);
        //     displayContainer.append(menuItemContainer);
        // }
    });
}