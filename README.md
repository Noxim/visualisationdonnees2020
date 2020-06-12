# visualisationdonnees2020
<h3>Description du projet</h3>


<p>Cette petite application D3 à pour objectif de visualiser des données extraites de l'<a href="https://www.omdbapi.com/">OMDB</a> (Open Movie Database) grâce à son api.</p>
<p>L'app permet de chercher un film spécifique en fonction de son titre et optionellement de son année de sortie.</p>

<p>L'app permet également de créer un histogramme de comparaison entre des films de différents genres ou de différentes époques.</p>
<p>A cette fin, on utilise 100 films aléatoires stockés dans dummy.json, un fichier généré par le script python (script.py) a partir de l'api de l'OMDB.</p>

<p>On obtiens ainsi un comptage et le score moyen de ces films.</p>
<p>La liste par défaut de films à été choisie parfaitement au hasard, et se veut ne serait-ce que le plus petit peu du monde représentative d'un tout plus grand</p>
<p> Cette approche à été utilisée car l'api d'OMDB ne permet pas de renvoyer l'intégralité des films, seulement des films uniques.</p>

<p>On peut générer un autre fichier dummy.json en modifiant la liste de films utilisés par le script python. Auquel cas, il est également necessaire de modifier jsoninput.js afin qu'il reflète le nouveau dummy.</p>
<p> Cette manière inélégante de charger le fichier json à été utilisé afin d'être compatible avec Firefox et Chrome simultanément </p>

<h4>Utilisation</h4>

<p>Si l'on désire uniquement utiliser les données preexistantes, il suffit d'ouvrir le fichier index.html dans le navigateur de son choix, sous réserve que le dit fichier se trouve dans le même dossier que les fichiers script.js et jsoninput.js.</p>

<h6>OPTIONEL</h6>
<p>Si l'on veut utiliser des données customisées (choix les films comparés), il est necessaire d'utiliser python 3.6+ et de lancer le script python. Auquel cas, il faut modifier la ligne 7 du script et modifier la liste de films à cet endroit.</p>
<p>Cette opération retourne un fichier dummy.json qui doit être chargé dans l'application par jsoninput.js</p>
