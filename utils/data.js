export const mealTypes = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Gluten-free",
  "Lactose-free",
  "Keto",
  "Paleo",
  "Low-FODMAP",
  "Kid-friendly",
];

export const mealCards = [
  {
    image: "./meals/meal-1.jpg",
    mealTypes: [
      {
        name: "Vegetarian",
        color: "#51CF66",
      },
    ],
    name: "Japanese Gyozas",
    calories: 650,
    nutriscore: 74,
    ratingsAverage: 4.9,
    ratings: 537,
  },
  {
    image: "./meals/meal-2.jpg",
    mealTypes: [
      {
        name: "Vegetarian",
        color: "#51CF66",
      },
      {
        name: "Paleo",
        color: "#FFD43B",
      },
    ],
    name: "Avocado Salad",
    calories: 400,
    nutriscore: 92,
    ratingsAverage: 4.8,
    ratings: 441,
  },
];

export const steps = [
  {
    imageStatus: "right",
    id: "01",
    title: "Tell us what you like (and what not)",
    description: `Never again waste time thinking about what to eat! Omnifood AI will
    create a 100% personalized weekly meal plan just for you. It makes
    sure you get all the nutrients and vitamins you need, no matter what
    diet you follow!`,
    image: "./app/app-screen-1.png",
  },

  {
    imageStatus: "left",
    id: "02",
    title: "Approve your weekly meal plan",
    description: `Once per week, approve the meal plan generated for you by Omnifood
    AI. You can change ingredients, swap entire meals, or even add your
    own recipes.`,
    image: "./app/app-screen-2.png",
  },
  {
    imageStatus: "right",
    id: "03",
    title: "Receive meals at convenient time",
    description: `Best chefs in town will cook your selected meal every day, and we
    will deliver it to your door whenever works best for you. You can
    change delivery schedule and address daily!`,
    image: "./app/app-screen-3.png",
  },
];

export const testimonials = [
  {
    customerImage: "/customers/dave.jpg",
    mainText: `Inexpensive, healthy and great-tasting meals, without even
    having to order manually! It feels truly magical.`,
    customerName: "Dave Bryson",
  },
  {
    customerImage: "/customers/ben.jpg",
    mainText: `The AI algorithm is crazy good, it chooses the right meals for
    me every time. It's amazing not to worry about food anymore!`,
    customerName: "Ben Hadley",
  },
  {
    customerImage: "/customers/steve.jpg",
    mainText: `Omnifood is a life saver! I just started a company, so there's
    no time for cooking. I couldn't live without my daily meals now!`,
    customerName: "Steve Miller",
  },
  {
    customerImage: "/customers/hannah.jpg",
    mainText: `I got Omnifood for the whole family, and it frees up so much
    time! Plus, everything is organic and vegan and without plastic.`,
    customerName: "Hannah Smith",
  },
];
