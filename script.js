let categories = [
  {
    id: 1,
    name: "Horror",
  },
  {
    id: 2,
    name: "Comedy",
  },
  {
    id: 3,
    name: "Roman",
  },
];

let films = [
  {
    id: 1,
    catId: 1,
    name: "Zvonok",
    duration: "2:30:00",
  },
  {
    id: 2,
    catId: 2,
    name: "3 lishniy",
    duration: "1:30:00",
  },
  {
    id: 3,
    catId: 3,
    name: "3 metra",
    duration: "1:45:00",
  },
];

let hall = [
  {
    id: 1,
    places: 20,
  },
  {
    id: 2,
    places: 30,
  },
  {
    id: 3,
    places: 25,
  },
];

let sessions = [
  {
    id: 1,
    filmId: 1,
    hallId: 2,
    startDate: "2026-06-25T10:00:00.686Z",
    endDate: "2026-06-25T12:30:00.686Z",
    places: 15,
  },
  {
    id: 2,
    filmId: 1,
    hallId: 3,
    startDate: "2026-06-25T10:00:00.686Z",
    endDate: "2026-06-25T12:30:00.686Z",
    places: 10,
  },
  {
    id: 3,
    filmId: 2,
    hallId: 3,
    startDate: "2026-06-25T10:00:00.686Z",
    endDate: "2026-06-25T12:30:00.686Z",
    places: 10,
  },
];


function createSession(filmId, hallId, placesCount, startDate) {

  let currentFilm = films.find(item => item.id === filmId)

  if(!currentFilm) {
    let str = ""
    films.forEach(item => {
      str += `id: ${item.id}, name: ${item.name} \n`
    })
    console.log(`Такого фильма не существует, выберите другой фильм`)
    console.table(films)
    return
  } 



}
createSession(836217356271, 3, 20, "2026-06-25T10:00:00.686Z") // "2026-06-26T12:30:00.686Z"