CREATE TABLE genre (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE country (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE movie (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_date DATE NOT NULL,
    plot TEXT NOT NULL,
    runtime INTEGER NOT NULL,
    rating NUMERIC(3,1) NOT NULL,
    poster_url VARCHAR(255) NOT NULL,
    trailer_url VARCHAR(255) NOT NULL,
    genre_id INTEGER NOT NULL REFERENCES genre(id)
);

CREATE TABLE movie_person (
    id SERIAL PRIMARY KEY,
    movie_id INTEGER NOT NULL REFERENCES movie(id),
    person_id INTEGER NOT NULL REFERENCES person(id),
    role VARCHAR(255) NOT NULL
);

CREATE TABLE movie_country (
    id SERIAL PRIMARY KEY,
    movie_id INTEGER NOT NULL REFERENCES movie(id),
    country_id INTEGER NOT NULL REFERENCES country(id)
);
