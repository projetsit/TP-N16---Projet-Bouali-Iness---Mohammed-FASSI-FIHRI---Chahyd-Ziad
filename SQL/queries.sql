
SELECT 
    l.nom AS ligne,
    l.type AS type,
    h.timestamp AS heure_arrivee
FROM horaire h
JOIN ligne l ON h.ligne_id = l.id
JOIN station s ON h.station_id = s.id
WHERE s.nom = 'Gare Centre'
AND h.timestamp >= NOW()
ORDER BY h.timestamp ASC
LIMIT 5;

SELECT DISTINCT 
    s.nom AS station,
    s.commune
FROM station s
JOIN horaire h ON s.id = h.station_id
JOIN ligne l ON h.ligne_id = l.id
WHERE l.nom = 'T1'
ORDER BY s.nom;



SELECT 
    l.nom AS ligne,
    s.nom AS station,
    h.timestamp AS heure
FROM horaire h
JOIN ligne l ON h.ligne_id = l.id
JOIN station s ON h.station_id = s.id
WHERE h.timestamp::time BETWEEN '07:00:00' AND '09:00:00'
ORDER BY h.timestamp;


SELECT 
    s.nom AS station,
    s.commune,
    COUNT(*) AS nombre_passages
FROM horaire h
JOIN station s ON h.station_id = s.id
GROUP BY s.id, s.nom, s.commune
ORDER BY nombre_passages DESC
LIMIT 1;
