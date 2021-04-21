"use strict";
const numberOfFilms = +prompt('Skolko filmov vi uzhe posmotreli?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Odin iz poslednih filmov', ''),
        b = prompt('Na skolko ocenivaete ego?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}
if (personalMovieDB.count < 10) {
    console.log('Prosmotreno dovolno malo filmov');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Vi klassiik');
} else if (personalMovieDB.count >= 30) {
    console.log('Vi kinoman');
} else {
    console.log('oshibka');
}


console.log(personalMovieDB);