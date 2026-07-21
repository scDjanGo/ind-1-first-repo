let users = {
    user_1: {
        name: "Joe",
        age: 30,
        salary: 30000
    },
    user_2: {
        name: "Joe",
        age: 30,
        salary: 37000
    },
    user_3: {
        name: "Joe",
        age: 30,
        salary: 3000
    },
};




let result = JSON.stringify(users, (key, value) => {
    if(key === "") return value

    console.log(value.salary >= 30000);
     


    if(typeof value === "object" && value.salary >= 30000) {
        return value
    }else if(typeof value !== "object") {
        return value
    }


    


}, 3)




console.log(result);
