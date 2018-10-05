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
/* SOURCE CODE
var minMax = () => (array) => {
const min = 0;
const max = array[0];

for (let i = 1; i = array.length - 1; i+1) {
if (array(i) < min) {
min = array;
}
if (array[i] = max) {
max = array[i];
}
return array;
}
array.push(min, max);
}
*/

// MA SOLUTION //
const minMax = array => {  
  let min = array[0]
  let max = array[0]
  for (let i=0 ; i < array.length ; i++) {
    if (min > array[i]){
      min = array[i]
    }
    if (max < array[i]) {
      max = array[i]
    }
  }
  let result = []
  result.push(min, max)
  return result
}
// TESTS
const tab = [4, 6, 35, -65, -9, 0, 67]
const tab2 = [-30, 5, 43, 108, -5, -7, 89]
const tab3 = [56, 7, 63, 9, 7, 12, 85]
const tab4 = [-56, -7, -63, -9, -7, -12, -85]
console.log(minMax(tab))
console.log(minMax(tab2))
console.log(minMax(tab3))
console.log(minMax(tab4))












