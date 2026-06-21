
  // const nav = document.querySelector("nav");
  // window.addEventListener("scroll" , () => {
  //   if (window.scrollY > 50) {
  //     nav.classList.add("active-1");
  //   } else {
  //     nav.classList.remove("active-1");
  //   }
  // });


//   let students = [
//   { name: "Aman", marks: 85 },
//   { name: "Priya", marks: 92 },
//   { name: "Raj", marks: 100 }
// ];
// // students.reduce((acc,cur)=>{
// //   return acc.marks>cur.marks?acc:cur
// // })
// console.log(students.reduce((acc,cur)=>{
//   return acc.marks>cur.marks?acc:cur
// }));


// let text = "javascript is fun is";
// function countWords(str) {
//   str = str.toLowerCase();
//   let words = str.split(" ");
//   let wordCount = {}
//     for (let word of words){
//       wordCount[word] = (wordCount[word] || 0) + 1;
//     }
//     return wordCount;
// }

// console.log(countWords(text))

// let products = [1, 2, 3, 4, 5];
// let sold = [2, 4];


// function findUnsoldProducts(products, sold) {
//   let unsoldProducts = []
//       products.filter(product => !sold.includes(product) && unsoldProducts.push(product))
//   return unsoldProducts;
// }

// console.log(findUnsoldProducts(products, sold))


// let employees = [
//   { name: "Aman", dept: "IT", salary: 50000 },
//   { name: "Priya", dept: "HR", salary: 40000 },
//   { name: "Raj", dept: "IT", salary: 30000 }
// ];
// let report = employees.reduce((acc, emp) => {
//     if (acc[emp.dept]) {
//         acc[emp.dept] += emp.salary;  // department pehle se hai
//     } else {
//         acc[emp.dept] = emp.salary;   // naya department
//     }
//     return acc;
// }, {});  // {} empty object se shuru

// // { IT: 80000, HR: 40000 }
// console.log(report)



// var addTwoNumbers = function(l1, l2) {
//    l1.reverse();
//    l2.reverse();
//    let num1 = parseInt(l1.join(''));
//    let num2 = parseInt(l2.join(''));
//    let sum = num1 + num2;
//    return sum.toString().split('').reverse().map(Number);
// };

// console.log(addTwoNumbers([2,4,3],[5,6,4]))



// function findMissingNumber(arr,target) {
//      let indx=[]
//        for(let i=0;i<arr.length;i++){
//                for(let j=1;j<arr.length;j++){
//                   if(arr[i]+ arr[j]==target){
//                    return  indx=[i,j]
//                   }
//                }
//        }
//       return indx
// }
// console.log(findMissingNumber([3,2,3], 6));





// var findMedianSortedArrays = function(nums1, nums2) {
//     let num=(nums1.concat(nums2)).sort((a,b)=>a-b)
//     let retval=0
//       if(num.length%2!=0){
//         console.log([ num[Math.floor(num.length/2)] ])      
//       }
//       return retval
// };


// console.log(findMedianSortedArrays([1,3],[2,5,4]));


// #call stack  code ko exicute karna ma help karaga gec global 



// setTimeout is a delay 
// setTimeout(() => { 
//    console.log("Hello, World!");
// }, 4000); // 1000 milliseconds = 1 second



// let nums=[1,1,1,2,4,7,7,3,2,2,4,5,6,7,8,9,9]

// let count={}
// for(let i=0;i<nums.length;i++){
//   count[nums[i]] = (count[nums[i]] || 0) + 1;
// }
// console.log(count)
// let books=[
//   {title:"Book A", author:"Author X", year:2020, id:1},
//   {title:"Book B", author:"Author Y", year:2018, id:2},
//   {title:"Book C", author:"Author X", year:2010, id:3},
//   {title:"Book D", author:"Author Y", year:2033, id:4},
//   {title:"Book e", author:"Author Y", year:2014, id:5},
//   {title:"Book f", author:"Author Y", year:2012, id:6},
//   {title:"Book g", author:"Author Y", year:2018, id:7},
//    {title:"Book h", author:"Author Y", year:2013, id:8},
//    {title:"Book i", author:"Author Y", year:2018, id:9},
//   {title:"Book j", author:"Author Y", year:2011, id:10},
// ]
// let userbooks=[]

// function borrowBook(books,book_id){
//    let book = books.find(book => book.id === book_id);
//    if (book) {
//        userbooks.push(book);
//        delete books[books.indexOf(book)];
//        return "Book borrowed successfully";
//    } else {
//        return "Book not found";
//    }
// }
// function returnBook(book_id){
//   let book = userbooks.find(book => book.id === book_id);
//   if (book) {
//       books[book.id - 1] = book; // Assuming book IDs start from 1 and are sequential
//       delete userbooks[userbooks.indexOf(book)];
//       return "Book returned successfully";
//   } else {
//       return "Book not found in user's borrowed list";
//   }
// }
// addBook(title,author)
// console.log( borrowBook(books,5) )
// console.log( userbooks )
// console.log( books )

// console.log( returnBook(5) )
// console.log( books )

// // showAvailableBooks()
let arr=[1 ,9, 3, 2, 9, 10, 5, 6, 7, 3, 4]

 let n=arr.length
    let bubbleelm=arr[0]
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(arr[j]<arr[i]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }

    console.log(arr)