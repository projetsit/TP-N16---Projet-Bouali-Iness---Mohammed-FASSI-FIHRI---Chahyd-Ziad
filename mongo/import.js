
db.stations.insertMany([
    { _id: 1, nom: "Gare Centre", commune: "Rouen", latitude: 49.4431, longitude: 1.0993 },
    { _id: 2, nom: "Hotel de Ville", commune: "Rouen", latitude: 49.4425, longitude: 1.1001 },
    { _id: 3, nom: "Université", commune: "Mont-Saint-Aignan", latitude: 49.4580, longitude: 1.0683 }
]);

db.lignes_embedded.insertMany([
    {
        _id: 1,
        nom: "T1",
        type: "Tram",
        horaires: [
            { station_id: 1, station_nom: "Gare Centre", timestamp: new Date("2025-02-19T07:30:00") },
            { station_id: 2, station_nom: "Hotel de Ville", timestamp: new Date("2025-02-19T07:33:00") },
            { station_id: 3, station_nom: "Université", timestamp: new Date("2025-02-19T07:45:00") },
            { station_id: 1, station_nom: "Gare Centre", timestamp: new Date("2025-02-19T08:30:00") },
            { station_id: 2, station_nom: "Hotel de Ville", timestamp: new Date("2025-02-19T08:33:00") }
        ]
    },
    {
        _id: 2,
        nom: "F2",
        type: "Bus Rapide",
        horaires: [
            { station_id: 1, station_nom: "Gare Centre", timestamp: new Date("2025-02-19T08:00:00") },
            { station_id: 2, station_nom: "Hotel de Ville", timestamp: new Date("2025-02-19T08:05:00") },
            { station_id: 3, station_nom: "Université", timestamp: new Date("2025-02-19T09:15:00") }
        ]
    }
]);

db.lignes.insertMany([
    { _id: 1, nom: "T1", type: "Tram", vehicules_ids: ["TRAM021"] },
    { _id: 2, nom: "F2", type: "Bus Rapide", vehicules_ids: ["BUS001"] }
]);



db.horaires.insertMany([
    { ligne_id: 1, station_id: 1, timestamp: new Date("2025-02-19T07:30:00") },
    { ligne_id: 1, station_id: 2, timestamp: new Date("2025-02-19T07:33:00") },
    { ligne_id: 1, station_id: 3, timestamp: new Date("2025-02-19T07:45:00") },
    { ligne_id: 2, station_id: 1, timestamp: new Date("2025-02-19T08:00:00") },
    { ligne_id: 2, station_id: 2, timestamp: new Date("2025-02-19T08:05:00") },
    { ligne_id: 1, station_id: 1, timestamp: new Date("2025-02-19T08:30:00") },
    { ligne_id: 1, station_id: 2, timestamp: new Date("2025-02-19T08:33:00") },
    { ligne_id: 2, station_id: 3, timestamp: new Date("2025-02-19T09:15:00") }
]);

db.vehicules.insertMany([
    { _id: "BUS001", modele: "Iveco Urbanway", capacite: 110, lignes_ids: [2] },
    { _id: "TRAM021", modele: "Alstom Citadis", capacite: 220, lignes_ids: [1] }
]);

