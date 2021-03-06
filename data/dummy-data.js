import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category(
    "c1",
    "Italian",
    "#f5428d",
    "https://pixabay.com/get/g9bffc2a8b7b6faf1448aa3aacaa25a8d4c812179524c04447ddf077fcc8e6aaaab6e59ad77a8edd6899c0e7bec4f8fee2ae27bd5a9a48f75a6b59a1910876ab882bea37e216481061bd10c92589006c5_1920.jpg"
  ),
  new Category(
    "c2",
    "Quick & Easy",
    "#f54242",
    "https://pixabay.com/get/ge7f4274c9fcf5e5b012a86004c679154b67ee664dbee04ea7e762d10bb71602bf6e74b46dd885fc7f5ecc2837f739f78d97b1214f0d8371bc13d5fb46f8056b132168b4cfbb29c309829481e53f9298c_1920.jpg"
  ),
  new Category(
    "c3",
    "Hamburgers",
    "#f5a442",
    "https://pixabay.com/get/g7e11e76910b5ed91844e22b45f99f8b0aeff13ef70146391bcc0b08af1afb6872d8390bb496b23df9a056559bdf954601370ea8996af85927434c94304ea4aca515f89ecb6618c8e0cd73f98c8dc652f_1920.jpg"
  ),
  new Category(
    "c4",
    "German",
    "#f5d142",
    "https://pixabay.com/get/g1c6f53d492940dc80fab08b1491f34f4d6d192423b8631afe6d2b73b6345cbed8bf6f0c972a120db3f302d95668b209a5abbd2dd32cf956d97371d0350bef52d89e7e0a914b1cb0a68fce5b7a65b0489_1920.jpg"
  ),
  new Category(
    "c5",
    "Light & Lovely",
    "#368dff",
    "https://pixabay.com/get/g2d12da0316fee8765adca712f928e55b1061d562a0d587427fc57f9429fec167ba1393245101ff542582dbe16550e44bf5dffbf459e6c524305c69ed6686ad0861faac011e1269b20171ab5eb74c54bd_1920.jpg"
  ),
  new Category(
    "c6",
    "Exotic",
    "#41d95d",
    "https://pixabay.com/get/g424def55167e89269c781ffde890b06cf70234850831a0bf77288ed974808b1f27ff454e8a4e5247b2c5297e6da9112ff6800c1cb5618e37a17b6e7cfbbc78c5cc53f446c5728bf20513b41940d8d8d5_1920.jpg"
  ),
  new Category(
    "c7",
    "Breakfast",
    "#9eecff",
    "https://pixabay.com/get/gf5792937355f32784260b374b671ae6e18455f90eb106e3ac6a615e1a7a026d8ea8972061193abe0ef04e57c594552de91a72bb83b8ad3890ac8d59d1d82990d8307c330d018f47e989385fb679bfd6e_1920.jpg"
  ),
  new Category(
    "c8",
    "Asian",
    "#b9ffb0",
    "https://pixabay.com/get/g411f8634ec54daff9580b208ad17d0f471d06ebca7c92667f8e7376986e7b9ceb4eb88771ab106b16eac4c8f1dbf4794bfbf693506aaaed12a76d7a233dedd1bf108b892470aef33832a6a869e2f02a1_1920.jpg"
  ),
  new Category(
    "c9",
    "French",
    "#ffc7ff",
    "https://pixabay.com/get/gd866ec65e940d2850581d1add1dc36d1a8a835c28481e894fe0a388574d645637107bbc87b398f0b17527be4933860bcf1adc50158bcc4823e8ad7ff0929f1700897d8f58b00ce1532a409d9597dcc29_1920.jpg"
  ),
  new Category(
    "c10",
    "Summer",
    "#47fced",
    "https://pixabay.com/get/g298cec329c261261c431b243cddfeead41587783d506e39fc4664bc8f4b42790d7062781dfcb86d3f7c8da28f81e7490acf771fa973ca80957b7b43dd1e50770bab92d5aafaa05bb7994c9ac0a01dcb6_1920.jpg"
  ),
];

export const MEALS = [
  new Meal(
    "m1",
    ["c1", "c2"],
    "Spaghetti with Tomato Sauce",
    "affordable",
    "simple",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    20,
    [
      "4 Tomatoes",
      "1 Tablespoon of Olive Oil",
      "1 Onion",
      "250g Spaghetti",
      "Spices",
      "Cheese (optional)",
    ],
    [
      "Cut the tomatoes and the onion into small pieces.",
      "Boil some water - add salt to it once it boils.",
      "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
      "In the meantime, heaten up some olive oil and add the cut onion.",
      "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
      "The sauce will be done once the spaghetti are.",
      "Feel free to add some cheese on top of the finished dish.",
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    "m2",
    ["c2"],
    "Toast Hawaii",
    "affordable",
    "simple",
    "https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg",
    10,
    [
      "1 Slice White Bread",
      "1 Slice Ham",
      "1 Slice Pineapple",
      "1-2 Slices of Cheese",
      "Butter",
    ],
    [
      "Butter one side of the white bread",
      "Layer ham, the pineapple and cheese on the white bread",
      "Bake the toast for round about 10 minutes in the oven at 200??C",
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    "m3",
    ["c3"],
    "Classic Hamburger",
    "pricey",
    "simple",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    45,
    [
      "300g Cattle Hack",
      "1 Tomato",
      "1 Cucumber",
      "1 Onion",
      "Ketchup",
      "2 Burger Buns",
    ],
    [
      "Form 2 patties",
      "Fry the patties for c. 4 minutes on each side",
      "Quickly fry the buns for c. 1 minute on each side",
      "Bruch buns with ketchup",
      "Serve burger with tomato, cucumber and onion",
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    "m4",
    ["c4"],
    "Wiener Schnitzel",
    "luxurious",
    "challenging",
    "https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg",
    60,
    [
      "8 Veal Cutlets",
      "4 Eggs",
      "200g Bread Crumbs",
      "100g Flour",
      "300ml Butter",
      "100g Vegetable Oil",
      "Salt",
      "Lemon Slices",
    ],
    [
      "Tenderize the veal to about 2???4mm, and salt on both sides.",
      "On a flat plate, stir the eggs briefly with a fork.",
      "Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.",
      "Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.",
      "Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ???fluffy???.",
      "Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.",
      "Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.",
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    "m5",
    ["c2", "c5", "c10"],
    "Salad with Smoked Salmon",
    "luxurious",
    "simple",
    "https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg",
    15,
    [
      "Arugula",
      "Lamb's Lettuce",
      "Parsley",
      "Fennel",
      "200g Smoked Salmon",
      "Mustard",
      "Balsamic Vinegar",
      "Olive Oil",
      "Salt and Pepper",
    ],
    [
      "Wash and cut salad and herbs",
      "Dice the salmon",
      "Process mustard, vinegar and olive oil into a dessing",
      "Prepare the salad",
      "Add salmon cubes and dressing",
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    "m6",
    ["c6", "c10"],
    "Delicious Orange Mousse",
    "affordable",
    "hard",
    "https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg",
    240,
    [
      "4 Sheets of Gelatine",
      "150ml Orange Juice",
      "80g Sugar",
      "300g Yoghurt",
      "200g Cream",
      "Orange Peel",
    ],
    [
      "Dissolve gelatine in pot",
      "Add orange juice and sugar",
      "Take pot off the stove",
      "Add 2 tablespoons of yoghurt",
      "Stir gelatin under remaining yoghurt",
      "Cool everything down in the refrigerator",
      "Whip the cream and lift it under die orange mass",
      "Cool down again for at least 4 hours",
      "Serve with orange peel",
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m7",
    ["c7"],
    "Pancakes",
    "affordable",
    "simple",
    "https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg",
    20,
    [
      "1 1/2 Cups all-purpose Flour",
      "3 1/2 Teaspoons Baking Powder",
      "1 Teaspoon Salt",
      "1 Tablespoon White Sugar",
      "1 1/4 cups Milk",
      "1 Egg",
      "3 Tablespoons Butter, melted",
    ],
    [
      "In a large bowl, sift together the flour, baking powder, salt and sugar.",
      "Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium high heat.",
      "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m8",
    ["c8"],
    "Creamy Indian Chicken Curry",
    "pricey",
    "challenging",
    "https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg",
    35,
    [
      "4 Chicken Breasts",
      "1 Onion",
      "2 Cloves of Garlic",
      "1 Piece of Ginger",
      "4 Tablespoons Almonds",
      "1 Teaspoon Cayenne Pepper",
      "500ml Coconut Milk",
    ],
    [
      "Slice and fry the chicken breast",
      "Process onion, garlic and ginger into paste and saut?? everything",
      "Add spices and stir fry",
      "Add chicken breast + 250ml of water and cook everything for 10 minutes",
      "Add coconut milk",
      "Serve with rice",
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    "m9",
    ["c9"],
    "Chocolate Souffle",
    "affordable",
    "hard",
    "https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg",
    45,
    [
      "1 Teaspoon melted Butter",
      "2 Tablespoons white Sugar",
      "2 Ounces 70% dark Chocolate, broken into pieces",
      "1 Tablespoon Butter",
      "1 Tablespoon all-purpose Flour",
      "4 1/3 tablespoons cold Milk",
      "1 Pinch Salt",
      "1 Pinch Cayenne Pepper",
      "1 Large Egg Yolk",
      "2 Large Egg Whites",
      "1 Pinch Cream of Tartar",
      "1 Tablespoon white Sugar",
    ],
    [
      "Preheat oven to 190??C. Line a rimmed baking sheet with parchment paper.",
      "Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.",
      "Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.",
      "Place chocolate pieces in a metal mixing bowl.",
      "Place bowl over a pan of about 3 cups hot water over low heat.",
      "Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.",
      "Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.",
      "Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.",
      "Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.",
      "Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.",
      "Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.",
      "whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.",
      "Transfer a little less than half of egg whites to chocolate.",
      "Mix until egg whites are thoroughly incorporated into the chocolate.",
      "Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.",
      "Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.",
      "Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.",
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    "m10",
    ["c2", "c5", "c10"],
    "Asparagus Salad with Cherry Tomatoes",
    "luxurious",
    "simple",
    "https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg",
    30,
    [
      "White and Green Asparagus",
      "30g Pine Nuts",
      "300g Cherry Tomatoes",
      "Salad",
      "Salt, Pepper and Olive Oil",
    ],
    [
      "Wash, peel and cut the asparagus",
      "Cook in salted water",
      "Salt and pepper the asparagus",
      "Roast the pine nuts",
      "Halve the tomatoes",
      "Mix with asparagus, salad and dressing",
      "Serve with Baguette",
    ],
    true,
    true,
    true,
    true
  ),
];
