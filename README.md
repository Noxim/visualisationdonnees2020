# visualisationdonnees2020
Description du projet


Cette petite application D3 à pour objectif de visualiser des données extraites de l'OMDB (Open Movie Database) grâce à son api.
L'app permet de chercher un film spécifique en fonction de son titre et optionellement de son année de sortie.

L'app permet également de créer un histogramme de comparaison entre des films de différents genres ou de différentes époques.
A cette fin, on utilise 100 films aléatoires stockés dans dummy.json, un fichier généré par le script python (script.py) a partir de l'api de l'OMDB.

On obtiens ainsi un comptage et le score moyen de ces films. 


On peut générer un autre fichier dummy.json en modifiant la liste de films utilisés par le script python. Auquel cas, il est également necessaire de modifier jsoninput.js afin qu'il reflète le nouveau dummy.