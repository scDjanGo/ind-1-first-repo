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
    category: 1,
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
    description: "Tashken Plov",
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
    name: "traditionally",
  },
];

function ShowListFoods() {
  let str = "==== WELCOME ==== \n";

  FOODS.forEach((item) => {
    str += `ID: ${item.id}, name: ${item.name} \n`;
  });

  str += `\n' +1 ' = create`;

  let result = prompt(str);

  if(result === "+1") {
    CreateFood()
  }
}

ShowListFoods();

function CreateFood() {
  const name = prompt("Write name of food");
  const price = +prompt("Write price of food");
  const description = prompt("Write description");
  const quantity = +prompt("Write quantity");

  let newFood = {
    id: GetUniqueId(FOODS),
    name,
    price,
    quantity,
    description,
    category: SelectCategory("Select Category")
  };


  alert(`New foods ${newFood.name} created`)


  FOODS.push(newFood)

  ShowListFoods()



}



function SelectCategory (title, defaultValue = "") {

    let str = `==== ${title} ==== \n`

    CATEGORIES.forEach(item => {
        str += `ID: ${item.id}, name: ${item.name} \n`
    })

    let result = +prompt(str, defaultValue)

    if(!result) {
        alert("Select correctly")
        SelectCategory(str, defaultValue)
    }

    return result
}


function GetUniqueId(values) {
    let num = 0

    values.forEach(item => {
        if(num <= item.id) {
            num = item.id + 1
        }
    })


    return num
}