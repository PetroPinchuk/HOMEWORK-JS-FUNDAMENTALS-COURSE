console.log('%c ---------------Task 6---------------', 'background-color: yellow; font-weight: bold; color:red');

arr = [];

for (let i = 0; i <= 2; i++) {
   arr[i] = function () {
      console.log(i);
   };
}

arr[0](); // 0
arr[arr.length - 1](); // 2