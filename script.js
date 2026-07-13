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
        name: "Novel",
    },
];

let films = [
    {
        id: 1,
        catId: 1,
        name: "The ring",
        duration: "2:30:00",
    },
    {
        id: 2,
        catId: 2,
        name: "Ted",
        duration: "1:30:00",
    },
    {
        id: 3,
        catId: 3,
        name: "3 meters above the heaven",
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
    }, {
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
        endDate: "2026-06-25T11:30:00.686Z",
        places: 10,
    },
];



function createSession(filmId, hallId, placesCount, startDate) {
    let currentFilm = films.find(item => item.id === filmId);
    if (!currentFilm) {
        console.log("This movie does not exist!");
        console.table(films);
        return;
    }

    let currentHall = hall.find(item => item.id === hallId);
    if (!currentHall) {
        console.log("This hall does not exist!");
        console.table(hall);
        return;
    }

    if (placesCount > currentHall.places) {
        console.log("There are not enough places, ARE YOU BLIND ?!");
        console.table(currentHall);
        return;
    }

    let start = new Date(startDate);

    let durationStr = currentFilm.duration;

    let hours = Number(durationStr[0]);
    let minutes = Number(durationStr[2] + durationStr[3]);
    let seconds = Number(durationStr[5] + durationStr[6]);

    let duration = hours * 3600000 + minutes * 60000 + seconds * 1000;
    let end = new Date(start.getTime() + duration);

    let isBusy = sessions.some(session => {
        if (session.hallId !== hallId) {
            return false;
        }
        let oldStart = new Date(session.startDate);
        let oldEnd = new Date(session.endDate);
        return start < oldEnd && end > oldStart;
    });

    if (isBusy) {
        console.log("No available time in this hall!");
        console.table(
            sessions.filter(session => session.hallId === hallId)
        );
        return;
    }

    let newSession = {
        id: sessions.length + 1,
        filmId: filmId,
        hallId: hallId,
        startDate: start.toISOString(),
        endDate: end.toISOString(),
        places: placesCount
    };

    sessions.push(newSession);
    console.log("Session successfully created!");
    console.table(sessions);
}

createSession(2, 1, 20, "2026-06-25T15:00:00.686Z");
createSession(3, 3, 15, "2026-06-25T18:00:00.686Z");