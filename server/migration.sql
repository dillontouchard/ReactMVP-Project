DROP TABLE IF EXISTS gamescore;

CREATE TABLE gamescore (
  id SERIAL,
  username varchar(50),
  score INTERVAL
);

