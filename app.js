/*Array1. n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
Input: getInitialOdds(5)
Output: [1, 3, 5, 7, 9]

 */
// let n = 5;
// let result = [];

// function getInitialOdds(n) {
//   for (i = 0; i < n; i++) {
//     if (i == 0) {
//       result.push(1);
//     } else {
//       result.push(result[i - 1] + 2);
//     }
//   }
// }
// getInitialOdds(5)
// console.log(result)

/*Array2. arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
Input: [4, 5, 7, 8, 6, 9]
Output: [6, 8, 4]
 */

// let arr=[4, 5, 7, 8, 6, 9]
// let arrNew=[]

// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         arrNew.push(arr[i])
//     }
// }
// console.log(arrNew.reverse())

/*Array3. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],...
Input:  [4, 5, 7, 8, 6, 9]
Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4
 */
// let numbers = [4, 5, 7, 8, 6, 9];
// let result = "";

// for (let i = 0; i < numbers.length; i++) {
//   result += `${numbers[i]} ${numbers[numbers.length - 1 - i]}`;
// }
// console.log(result);

/* Array4. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
Input: arr = [1, 6, 9, 5, 8, 10, 15];
Ouput: rangeSum(arr, 2, 5) => 32
*/
// let arr = [1, 6, 9, 5, 8, 10, 15];

// function rangeSum(a, K, L) {
//   let result = 0;
//   for (i = K; i <= L; i++) {
//     result += a[i];
//   }

//   return result;
// }
// console.log(rangeSum(arr, 2, 5));

/*Array5. n ta elementdan tashkil topgan massiv berilgan. Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin.
Input: let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
Output: [7, 4, 2, 3, 1, 5]
 */
// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// let newArr = [];
// function getSingleArr(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr
 
// }
// console.log(getSingleArr(arr))

/*Array6. n ta elementdan iborat massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.
Input: [7, 4, 9, 2, 3, 1, 5]
Output:
Max: 9
Min: 1
[7, 4, 1, 2, 3, 9, 5]
 */
// const arr = [7, 4, 9, 2, 3, 1, 5];
// let max = arr[0];
// let min = arr[1];

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   } else if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// arr[arr.indexOf(max)] = min;
// arr[arr.indexOf(min)] = max;
// console.log(arr)
