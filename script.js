const FOODS = [
  {
    id: 1,
    name: "Burger",
    description: "Tasty Burger",
    quantity: 50,
    price: 180,
    category: 1,
  },
  {
    id: 2,
    name: "Pizza",
    description: "Cheesy Pepperoni Pizza",
    quantity: 35,
    price: 250,
    category: 2,
  },
  {
    id: 3,
    name: "Pasta",
    description: "Creamy Alfredo Pasta",
    quantity: 40,
    price: 220,
    category: 2,
  },
  {
    id: 4,
    name: "Sushi",
    description: "Fresh Salmon Sushi",
    quantity: 25,
    price: 320,
    category: 1,
  },
  {
    id: 5,
    name: "Chicken Wings",
    description: "Spicy Chicken Wings",
    quantity: 60,
    price: 200,
    category: 1,
  },
  {
    id: 6,
    name: "Plov",
    description: "Tashkent Plov",
    quantity: 30,
    price: 340,
    category: 2,
  },
];

const CATEGORIES = [
  {
    id: 1,
    name: "fast-food",
  },
  {
    id: 2,
    name: "traditional",
  },
];

function ShowListFoods() {
  let str = "==== WELCOME ====\n";

  FOODS.forEach((item) => {
    str += `ID: ${item.id}, Name: ${item.name}\n`;
  });

  str += "\n+1 = Create";

  let result = prompt(str);

  if (result === "+1") {
    CreateFood();
    return;
  }

  result = +result;

  FOODS.forEach((item) => {
    if (item.id === result) {
      readFood(item);
    }
  });
}

ShowListFoods();

function CreateFood() {
  const name = prompt("Write name of the food");
  const price = +prompt("Write price of the food");
  const description = prompt("Write description");
  const quantity = +prompt("Write quantity");

  let newFood = {
    id: GetUniqueId(FOODS),
    name,
    price,
    quantity,
    description,
    category: SelectCategory("Select Category"),
  };

  alert(`New food "${newFood.name}" created`);
  FOODS.push(newFood);

  ShowListFoods();
}

function SelectCategory(title, defaultValue = "") {
  let str = `==== ${title} ====\n`;

  CATEGORIES.forEach((item) => {
    str += `ID: ${item.id}, Name: ${item.name}\n`;
  });

  let result = +prompt(str, defaultValue);

  let currentCategory = CATEGORIES.find(item => item.id === result)




  if (!currentCategory) {
    alert("Select correctly");
    return SelectCategory(title, defaultValue);
  }

  return currentCategory.id;
}

function GetUniqueId(values) {
  let num = 0;

  values.forEach((item) => {
    if (num <= item.id) {
      num = item.id + 1;
    }
  });

  return num;
}

function readFood(food) {
  let str = `=== Details about the Food ===\n\n`;
  str += `Id: ${food.id}\n`;
  str += `Name: ${food.name}\n`;
  str += `Price: ${food.price}\n`;
  str += `Description: ${food.description}\n`;
  str += `Quantity: ${food.quantity}\n`;
  str += `Category: ${food.category}\n\n`;
  str += `-1 = Back\n`;
  str += `+1 = Update\n`;
  str += `0 = Delete Food`;

  let result = prompt(str);

  if (result === "-1") {
    ShowListFoods();
  } else if (result === "+1") {
    updateFood(food);
  } else if (result === "0") {
    deleteFood(food);
  }
}

function updateFood(food) {
  const name = prompt("Write new name of the food", food.name);
  const price = +prompt("Write new price of the food", food.price);
  const description = prompt("Write new description", food.description);
  const quantity = +prompt("Write new quantity", food.quantity);
  const category = SelectCategory("Select Category", food.category);

  if (!name || !description || !quantity || !category) {
    alert("Введите корректные данные");
    updateFood(food);
    return;
  } else if (!price || isNaN(price) || Number(price) <= 0) {
    alert("Введите цену правильно");
    updateFood(food);
    return;
  }else if(!quantity || isNaN(quantity) || Number(quantity) <= 0) {
    alert("Введите правильное количество");
    updateFood(food);
  }

  food.name = name;
  food.price = price;
  food.description = description;
  food.quantity = quantity;
  food.category = category;

  alert(`Food "${food.name}" was updated successfully!`);

  ShowListFoods();
}

function deleteFood(food) {
  let result = confirm("Are you sure you want to delete this food?");

  if (!result) {
    readFood(food);
    return;
  }


  const currentIndex = FOODS.findIndex((item) => item.id === food.id);
  FOODS.splice(currentIndex, 1);

  alert("Food deleted successfully!");

  ShowListFoods();
}
