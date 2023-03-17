const express = require("express");
const db = require("./db");
const app = express();

// middleware для парсинга JSON
app.use(express.json());

// API для работы с жанрами
app.get("/genres", async (req, res) => {
  const { rows } = await db.query("SELECT * FROM genres");
  res.json(rows);
});

app.post("/genres", async (req, res) => {
  const { name } = req.body;
  const { rows } = await db.query(
    "INSERT INTO genres (name) VALUES ($1) RETURNING *",
    [name]
  );
  res.json(rows[0]);
});

app.put("/genres/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { rows } = await db.query(
    "UPDATE genres SET name=$1 WHERE id=$2 RETURNING *",
    [name, id]
  );
  res.json(rows[0]);
});

app.delete("/genres/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query(
    "DELETE FROM genres WHERE id=$1 RETURNING *",
    [id]
  );
  res.json(rows[0]);
});

// API для работы с фильмами

app.get("/movies", async (req, res) => {
  const { rows } = await db.query("SELECT * FROM movies");
  res.json(rows);
});

app.post("/movies", async (req, res) => {
  const { name, year, genres } = req.body;
  const movieInsert = await db.query(
    "INSERT INTO movies (name, year) VALUES ($1, $2) RETURNING id",
    [name, year]
  );
  const movieId = movieInsert.rows[0].id;
  const genreInserts = genres.map(async (genreId) => {
    await db.query(
      "INSERT INTO movie_genres (movie_id, genre_id) VALUES ($1, $2)",
      [movieId, genreId]
    );
  });
  await Promise.all(genreInserts);
  res.json({ id: movieId, name, year, genres });
});

app.put("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const { name, year, genres } = req.body;
  await db.query("DELETE FROM movie_genres WHERE movie_id=$1", [id]);
  const genreInserts = genres.map(async (genreId) => {
    await db.query(
      "INSERT INTO movie_genres (movie_id, genre_id) VALUES ($1, $2)",
      [id, genreId]
    );
  });
  await Promise.all(genreInserts);
  const { rows } = await db.query(
    "UPDATE movies SET name=$1, year=$2 WHERE id=$3 RETURNING *",
    [name, year, id]
  );
  res.json(rows[0]);
});

app.delete("/movies/:id", async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM movie_genres WHERE movie_id=$1", [id]);
  const { rows } = await db.query(
    "DELETE FROM movies WHERE id=$1 RETURNING *",
    [id]
  );
  res.json(rows[0]);
});

// запуск сервера
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
