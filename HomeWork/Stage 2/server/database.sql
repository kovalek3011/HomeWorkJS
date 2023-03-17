CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  year INTEGER NOT NULL
);

CREATE TABLE movie_genres (
  movie_id INTEGER REFERENCES movies(id),
  genre_id INTEGER REFERENCES genres(id),
  PRIMARY KEY (movie_id, genre_id)
);

