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

var minMax = () => (array) => {
  const min = 0;
  const max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array;
    }
    if (array[i] = max) {
      max = array[i];
    }
    return array;
  }
  array.push(min, max);
}




let nombre = [4, 6, 35, -65, -9, 0, 67]

function extreme (array){
  for ( let i = 0; i < array.lenght, i++){
    let stock = 0;
    for ( let j = 0; j < array.lenght, j++){
      if array[j] < array[i]{
        stock = array[j];
        array[j] = array[i];
        array[i] = stock;
      }
    }

  }
  return array;
}

extreme(nombre)

