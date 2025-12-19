
var resultat1 = db.lignes_embedded.findOne(
    { nom: "T1" },
    { nom: 1, type: 1, horaires: 1 }
);
printjson(resultat1);


var resultat1b = db.lignes.aggregate([
    { $match: { nom: "T1" } },
    {
        $lookup: {
            from: "horaires",
            localField: "_id",
            foreignField: "ligne_id",
            as: "horaires"
        }
    }
]).toArray();
printjson(resultat1b);




var debut = new Date("2025-02-19T07:00:00");
var fin = new Date("2025-02-19T09:00:00");

var resultat2 = db.horaires.aggregate([
    {
        $match: {
            timestamp: { $gte: debut, $lte: fin }
        }
    },
    {
        $lookup: {
            from: "lignes",
            localField: "ligne_id",
            foreignField: "_id",
            as: "ligne"
        }
    },
    {
        $lookup: {
            from: "stations",
            localField: "station_id",
            foreignField: "_id",
            as: "station"
        }
    },
    { $unwind: "$ligne" },
    { $unwind: "$station" },
    {
        $project: {
            _id: 0,
            ligne: "$ligne.nom",
            station: "$station.nom",
            heure: "$timestamp"
        }
    },
    { $sort: { heure: 1 } }
]).toArray();

printjson(resultat2);



var resultat3 = db.horaires.aggregate([
    {
        $group: {
            _id: "$ligne_id",
            nombre_passages: { $sum: 1 }
        }
    },
    {
        $lookup: {
            from: "lignes",
            localField: "_id",
            foreignField: "_id",
            as: "ligne_info"
        }
    },
    { $unwind: "$ligne_info" },
    {
        $project: {
            _id: 0,
            ligne: "$ligne_info.nom",
            type: "$ligne_info.type",
            nombre_passages: 1
        }
    },
    { $sort: { nombre_passages: -1 } }
]).toArray();

printjson(resultat3);
