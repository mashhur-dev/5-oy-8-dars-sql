CREATE TABLE teams (
    id  SERIAL PRIMARY KEY,
    name VARCHAR(128)
);


CREATE TABLE members(
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(64),
    lastname   VARCHAR(64),
    age        SMALLSERIAL,
    team_id    SERIAL 
);