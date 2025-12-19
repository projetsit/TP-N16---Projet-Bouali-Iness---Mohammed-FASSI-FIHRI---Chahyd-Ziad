
CREATE TABLE station (
    id INTEGER PRIMARY KEY,
    nom VARCHAR(15),
    commune VARCHAR(15) ,
    latitude INTEGER ,
    longitude INTEGER 
);

CREATE TABLE ligne (
    id INTEGER PRIMARY KEY,
    nom VARCHAR(15) ,
    type VARCHAR(15) 
);


CREATE TABLE horaire (
    id INTEGER PRIMARY KEY,
    ligne_id INTEGER ,
    station_id INTEGER ,
    timestamp TIMESTAMP ,
    
    FOREIGN KEY (ligne_id) REFERENCES ligne(id),
    FOREIGN KEY (station_id) REFERENCES station(id)
);

CREATE TABLE vehicule (
    id INTEGER PRIMARY KEY,
    modele VARCHAR(15),
    capacite INTEGER
);

CREATE TABLE vehicule_ligne (
    vehicule_id  INTEGER PRIMARY KEY ,
    ligne_id INTEGER PRIMARY KEY,
    date_affectation DATE DEFAULT CURRENT_DATE,
    
    FOREIGN KEY (vehicule_id) REFERENCES vehicule(id),
    FOREIGN KEY (ligne_id) REFERENCES ligne(id)
);

CREATE INDEX idx_horaire_station_heure ON horaire(station_id, heure_passage);

CREATE INDEX idx_horaire_ligne_heure ON horaire(ligne_id, heure_passage);