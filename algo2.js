/* 
* Corriger la fonction minMax()
* La fonction récupère un tableau de nombres positifs, négatifs ou nuls
* Et retourne un tableau à 2 entrées contenant la valeur minimale
* et la valeur maximale du tableau récupéré en entrée
* 
* Exemple 1 :
* Tableau d'entrée : [4, 6, 35, -65, -9, 0, 67]
* Résultat : [-65, 67]
* 
* Exemple 2 :
* Tableau d'entrée : [-30, 5, 43, 108, -5, -7, 89]
* Résultat : [-30, 108]
* 
* Exemple 3 :
* Tableau d'entrée : [56, 7, 63, 9, 7, 12, 85]
* Résultat : [7, 85]
*/

function minMax(array) { // j'ai remplacer par une fonction ES5
  var min = array[0]; // ceci est une variable
  var max = array[0]; // Ceci est une var, non une constante

  for (let i = 0; i < array.length; i++) { // pour l'incrémentation de 1 : i++
      if (min > array[i]) { // crochet pour le tableau
         min = array[i]; //recher dans un tableau avec crochet et le numéro de l'item
      }
      if (max < array[i] ) { // comparaison et pas ==
          max = array[i];   
      }
  }
  var result = [min, max];
  return result; // Son return était dans la boucle For
}