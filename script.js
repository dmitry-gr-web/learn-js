"use strict";
const numberOfFilms = +prompt('Skolko filmov vi uzhe posmotreli?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Odin iz poslednih filmov', ''),
    b = prompt('Na skolko ocenivaete ego?', ''),
    c = prompt('Odin iz poslednih filmov', ''),
    d = prompt('Na skolko ocenivaete ego?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);