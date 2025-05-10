/*Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
Input: 5
Output: [2, 4, 8, 16, 32]
 */

// function getLevel2(n) {
//   let result = [];
//   for (i = 1; i <= n; i++) {
//     result.push(2 ** i);
//   }
//   return result;
// }
// console.log(getLevel2(5));

/*Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
Input: n = 5, A = 2, B = 3
Output: [2, 3, 5, 10, 20]
 */

//MASALAGA TUSHUNDIM AMMO QANDAY SHART BERISHNI BILMADIM

/* Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.
 */
// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// for (i = arr.length-1; i >= 0; i--) {
//   newArr.push(arr[i])
// }
// console.log(newArr)

/*Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
Massiv elementlar: 4 5 7 8 6 9
Natija: 5 7 9 toqlar soni = 3
 */

// let arr = [4, 5, 7, 8, 6, 9];
// let newArr = [];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     newArr.push(arr[i]);
//   }
// }
// let result=`Natija: ${newArr} toqlar soni = ${newArr.length}`

// console.log(result);

/*Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
Massiv elementlar: 4 5 7 8 6 9
Natija: 4 8 6 9 7 5
 */
// let arr = [4, 5, 7, 8, 6, 9];

// let evenArr = [];
// let oddArr = [];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     evenArr.push(arr[i]);
//   } else if (arr[i] % 2 == 1) {
//     oddArr.push(arr[i]);
//   }
// }
// let result =[ `Natija: ${evenArr},${oddArr.reverse()}`];
// console.log(result);

/*Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin. */

// let arr = [2, 3, 4, 5, 6,7];

// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

/* Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.*/

// let numbers = [4, 5, 7, 8, 6, 9];
// let result = "";
//MASALANI O'ZIGA HAM SHART BERISHGA HAM TUSHUNMADIM

/*Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.
 */
// let arr = [4, 5, 7, 8, 6, 9];
// let result = [];

// for (let i = 0; i < arr.length; i += 2) {
//   result.push(arr[i]);
// }

// for (let i = 1; i < arr.length; i += 2) {
//   result.push(arr[i]);
// }

// console.log(result.join(" "));

/*Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin. */
// let arr = [4, 5, 7, 8, 6, 9, 3, 2];

// let evenArr = [];
// let oddArr = [];

// for (let i = arr.length; i >= 0; i -= 2) {
//   evenArr.push(arr[i]);
// }

// for (let i = 1; i < arr.length; i += 2) {
//   oddArr.push(arr[i]);
// }
// let result = [`Natija: ${oddArr}${evenArr}`];
// console.log(result);

/*Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], */

// let numbers = [4, 5, 7, 8, 6, 9, 2, 3];
// let result = "";

// for (let i = 0; i < numbers.length; i++) {
//   result += `${numbers[i]} ${numbers[numbers.length - 1 - i]}`;
// }
// console.log(result);

/*Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin. */

// let arr = [2, 3, 4, 5, 6, 7];

// function rangeOutSum(arr, K, L) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (i < K || i > L) {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }

// console.log(rangeOutSum(arr, 3, 5));

/*Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
Input: [10, false, “”, “Abdulaziz”, null]
Output:
Truthy: [10, “Abdulaziz”]
Falsy: [false, “”, null]

 */
// let arr = [10, false, "", "Abdulaziz", null];

// let truthy = [];
// let falsy = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]) { 
//     truthy.push(arr[i]);
//   } else { 
//     falsy.push(arr[i]);
//   }
// }

// console.log("Truthy:", truthy); 
// console.log("Falsy:", falsy);  



/* Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi  getEvenMax (arr) nomli funksiya tuzilsin.
 */
// let arr = [8, 2, 7, 4, 5, 6];

// function getEvenMax(arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i += 2) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log(getEvenMax(arr));

/* Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getOddMin(arr) tuzilsin.
 */

// let arr = [8, 2, 7, 9, 5, 6];
// function getOddMin(arr) {
//   let max = arr[1];
//   for (let i = 1; i < arr.length; i += 2) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(getOddMin(arr))

/*Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element */

// let arr = [2, 5, 3, 6, 4, 8, 7];
// let lastLocalMaxIndex = -1;

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//     lastLocalMaxIndex = i;
//   }
// }

// console.log(lastLocalMaxIndex);

/* Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.*/

//Shart berish ozgincha qiyinlik qilyapti🥹

/*Array17. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin. */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function findMaxSumPair(arr) {
//   let maxSum = arr[0] + arr[1];
//   let pair = [arr[0], arr[1]];

//   for (let i = 1; i < arr.length - 1; i++) {
//     let sum = arr[i] + arr[i + 1];
//     if (sum > maxSum) {
//       maxSum = sum;
//       pair = [arr[i], arr[i + 1]];
//     }
//   }

//   return pair;
// }

// console.log(findMaxSumPair(arr));

/*Array18. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin. */
// let arr = [1, 2, 3, 4, 5, 6, 3];

// function findDuplicateIndices(arr) {
//   // Massivni tekshiramiz
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

// console.log(findDuplicateIndices(arr));

/*Array19. n ta elementdan tashkil topgan massiv berilgan. Massivda eng ko'p qatnashgan bir xil qiymatli elementni va uning sonini chiqaruvchi programma tuzilsin.
 */
// let arr = [3, 2, 4, 3, 5, 3, 6, 2, 3];

// function findMostFrequent(arr) {
//   let count = {};

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     count[num] = count[num] ? count[num] + 1 : 1;
//   }

//   let maxElement = null;
//   let maxCount = 0;

//   for (let num in count) {
//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       maxElement = num;
//     }
//   }

//   return { element: maxElement, count: maxCount };
// }

// let result = findMostFrequent(arr);
// console.log(
//   `Eng ko'p qatnashgan element: ${result.element}, soni: ${result.count}`
// );

/*Array20. n ta elementdan iborat butun sonlardan tashkil topgan a massiv berilgan. a massivning juft elementlaridan tashkil topgan b massivini hosil qiling. b massiv elementlari soni va elementlari chiqarilsin.
 */

// let arrA = [1, 2, 3, 4, 5, 6, 7, 8];
// let arrB = [];

// for (i = 0; i < arrA.length; i++) {
//   if (arrA[i] % 2 == 0) {
//     arrB.push(arrA[i]);
//   }
// }
// console.log(`Elementlar soni: ${arrB.length}ta ${arrB}`);

/*Array21. n ta butun sonlardan iborat a massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin.
 */

// let arrA = [1, 2, 3, 4, 5, 6, 7, 8];
// function addKToEachElement(arr, k) {
//   let result = [];
//   for (i = 0; i <= arr.length - 1; i++) {
//     result.push(arr[i] + k);
//   }
//   return result;
// }
// console.log(addKToEachElement(arrA, 4));

/*Array22. n ta elementdan iborat massiv berilgan (n juft son). Massivning birinchi yarmi va ikkinchi yarmi qiymatlari almashtirilsin.
 */

// let arr = [1, 2, 3, 4, 5, 6];
// let result = [];

// let half = arr.length / 2;

// for (let i = half; i < arr.length; i++) {
//   result.push(arr[i]);
// }

// for (let i = 0; i < half; i++) {
//   result.push(arr[i]);
// }

// console.log(result);

/*Array23. n ta elementdan iborat massiv berilgan. Massivning elementlari teskari tartibda joylashtirilsin. (DIQQAT: Sizdan teskari tartibda chiqarish talab qilinayotgani yo'q. a[0] element a[n-1] bilan almashsin, va hakazo, teskari tartibda joylashtirish talab qilinyapti)
 */

// let arr=[1,2,3,4,5,6,7]
// arr.reverse()
// console.log(arr)

/*Array24. n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.

 */
//MASALAGA UNCHALIK TUSHUNMADIM

/*Array25. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini bir qadam chapga siklik siljituvchi programma tuzilsin. a[n-1] element qiymati a[n-2] ga o'tadi, a[n-2] esa a[n-3] ga, ... a[0] esa a [n-1] ga o'tadi.
 */

// let arr = [1, 2, 3, 4, 5];
// let first = arr[0];

// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }

// arr[arr.length - 1] = first;

// console.log(arr); // [2, 3, 4, 5, 1]

/* Array26. n ta elementdan tashkil topgan massiv va k butun soni berilgan (0<= k < n). Indeksi k ga teng bo'lgan elementni o'chiruvchi va yangi massiv qaytaruvchi deleteElementWithIndex(arr, k) nomli funksiya tuzilsin.*/

// let arr = [2, 3, 4, 5, 6, 7, 8];

// function deleteElementWithIndex(arr, k) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i !== k) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }
// console.log(deleteElementWithIndex(arr, 2));

/*Array27. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin. */

// let arr=[5,6,7,8,9,10,11,12]
// let k=3
// let m=6
//  let newArr=[]

// for(let i=0;i<arr.length;i++){
//     if(i<k || i>m ){
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)

/*Array28. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsin */

// let arr = [23, 24, 25, 25, 23, 25];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== arr[i + 1]) {
//     result.push(arr[i]);
//   }
// }

// console.log(result);

/*Array29. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.
Input: [1, 5, 6, 1, 5, 7, 2]
Output: [6, 7, 2]
 */

// let arr = [1, 5, 6, 1, 5, 7, 2];

// function getElementsOneTime(arr) {
//   const result = [];
//   const count = {};

//   for (let i = 0; i < arr.length; i++) {
//     count[arr[i]] = (count[arr[i]] || 0) + 1;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (count[arr[i]] === 1 && !result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }
// console.log(getElementsOneTime(arr));

/*Array30. arr nomli massivda k qiymatli bir nech element mavjude. Shu elementlar indekslari massividan iborat qiymat qaytaruvchid searchAllElements(arr) nomli funksiya hosil qiling ! */

// let arr=[7,2,3,7,5,6,7,8]
// let k=7

// function searchAllElements(arr){
//     let indices=[]
//   for(i=0;i<arr.length;i++){
//     if(arr[i]==k){
//         indices.push(i)
//     }
//   }
//   return indices
// }
// console.log(searchAllElements(arr))