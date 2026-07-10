
let users = [
    {
        name: "Joe",
        date_of_birth: "01.05.2008"
    },
    {
        name: "Jake",
        date_of_birth: "12.09.2009"
    },
    {
        name: "Jim",
        date_of_birth: "08.01.2011"
    },
    {
        name: "Jane",
        date_of_birth: "23.06.2000"
    },
    {
        name: "John",
        date_of_birth: "30.01.2007"
    },
    {
        name: "Joshua",
        date_of_birth: "20.11.2012"
    },
]





function getAge(users) {

    users.sort(function (a, b) {
        const dateA = a.date_of_birth.slice(6, 10) +
            a.date_of_birth.slice(3, 5) +
            a.date_of_birth.slice(0, 2);

        const dateB = b.date_of_birth.slice(6, 10) +
            b.date_of_birth.slice(3, 5) +
            b.date_of_birth.slice(0, 2);

        return (dateB) - (dateA);
    });

    return users;
}

console.log(getAge(users));





function getAdults(users) {
    const adults = [];
    const current = new Date();

    for (let i = 0; i < users.length; i++) {

        const birthYear = (users[i].date_of_birth.slice(6, 10));
        const age = current.getFullYear() - birthYear;

        if (age >= 18) {
            adults.push(users[i]);
        }
    }
    return adults
}
console.log(getAdults(users));