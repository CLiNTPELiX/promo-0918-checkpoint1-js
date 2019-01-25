/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100

Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.
*/

function place(){
var tab = [];

var largeur = 1;
var longueur = 1;


for (let x = 1; x<2601;x++){
    let titi = largeur + "-" + longueur
    tab[x]=titi;
    longueur = longueur + 1;
    

    if (longueur > 100){
      longueur = 1;
      largeur = largeur + 1;
    }
    
}
 return tab;
}
place()




