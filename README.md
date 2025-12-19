

### PARTIE 1 – MODELISATION (SQL & NOSQL) 
##  MODELISATION SQL
2- La modélisation est 3FN car :

Première forme normale : toutes les colonnes contiennent des valeurs atomiques 
et chaque table a une clé primaire et pas de groupes répétitifs.
  
Deuxième forme normale : Toutes les colonnes non-clé dépendent entièrement de 
la clé primaire et il y’a pas de dépendance partielle.

Troisième forme normale : Il n’existe pas de dépendance transitive.



3-Proposez 2 index SQL pertinents et justifiez-les. 

Premier index : idx_horaire_station_heure, l’index permettra d’optimiser la requête des prochaines arrivées à une station

Deuxième index : idx_horaire_ligne_heure, l’index il permettra d’optimiser les requêtes par ligne avec tri chronologique.

## MODELISATION NOSQL (MONGODB) 

3 -  Les avantages : Lecture rapide, Pas de jointure, Cohérence atomique des données
     Les inconvénients : Duplication des noms de stations, Mises à jour plus complexes


