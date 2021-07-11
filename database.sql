CREATE DATABASE ufo_sightings;
CREATE TABLE sighting
(
  id SERIAL PRIMARY KEY,
  date_time TEXT,
  city TEXT,
  state TEXT NULL,
  country TEXT,
  shape TEXT,
  duration_seconds FLOAT,
  duration_hours TEXT,
  comments TEXT,
  date_posted TEXT,
  latitude FLOAT,
  longitude FLOAT
);