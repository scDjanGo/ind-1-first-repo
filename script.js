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
];




function createSession(filmId, hallId, placesCount, startDate) {

  let currentFilm = films.find(item => item.id === filmId);

  if (!currentFilm) {
    console.log("Такого фильма не существует");
    return;
  }


  let duration = currentFilm.duration;


  let hours = Number(duration[0]);
  let minutes = Number(duration[2] + duration[3]);
  let seconds = Number(duration[5] + duration[6]);


  let durationInMs =
    ((hours * 60 + minutes) * 60 + seconds) * 1000;


  let endDate = new Date(startDate);

  endDate.setTime(
    endDate.getTime() + durationInMs
  );


  let newSession = {
    id: sessions.length + 1,
    filmId: filmId,
    hallId: hallId,
    startDate: startDate,
    endDate: endDate.toISOString(),
    places: placesCount,
  };

  console.log(`
Фильм: ${currentFilm.name}
Зал: ${hallId}
Начало: ${new Date(startDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
Конец: ${endDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
Мест: ${placesCount}
`);

  sessions.push(newSession);

  console.log(newSession);
}



createSession(1, 3, 7, "2026-06-25T13:00:00.686Z")