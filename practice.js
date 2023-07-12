// function x() {
//   setTimeout(() => {
//     console.log(x1);
//   }, 1000);
// }
// x();
// let x1 = 10;

// const emplObj = [
//   {
//     name: "subhransu",
//     age: "26",
//     company: {
//       name: "Alethea",
//       position: "Developer",
//     },
//   },
//   {
//     name: "Shivam",
//     age: "26",
//     company: {
//       name: "Alhghethea",
//       position: "Developer",
//       team: {
//         name: "UI",
//         lead: "dinesh",
//         team1: {
//           name: "ManagerLevel",
//           manager: "Gagan",
//         },
//       },
//     },
//   },
//   {
//     name: "Richa",
//     age: "26",
//     company: {
//       name: "Alethea",
//       position: "Developer",
//       team: {
//         name: "Backend",
//         lead: "shiva",
//         team1: {
//           name: "ManagerLevel",
//           manager: "Gagan",
//         },
//       },
//     },
//   },
// ];

// function rec(emplObj) {
//   let nameObj = [];
//   for (let key in emplObj) {
//     if (typeof emplObj[key] === "object" && emplObj[key] !== null) {
//       nameObj = nameObj.concat(rec(emplObj[key]));
//     } else if (key === "name") {
//       nameObj.push(emplObj[key]);
//     }
//   }
//   return nameObj;
// }

// console.log(rec(emplObj));

const employees = {
  status: "success",
  data: [
    {
      id: 1,
      employee_name: "Tiger Nixon",
      employee_salary: 320800,
      employee_age: 61,
      profile_image: "",
    },
    {
      id: 2,
      employee_name: "Garrett Winters",
      employee_salary: 170750,
      employee_age: 63,
      profile_image: "",
    },
    {
      id: 3,
      employee_name: "Ashton Cox",
      employee_salary: 86000,
      employee_age: 66,
      profile_image: "",
    },
    {
      id: 4,
      employee_name: "Cedric Kelly",
      employee_salary: 433060,
      employee_age: 22,
      profile_image: "",
    },
    {
      id: 5,
      employee_name: "Airi Satou",
      employee_salary: 162700,
      employee_age: 33,
      profile_image: "",
    },
    {
      id: 6,
      employee_name: "Brielle Williamson",
      employee_salary: 372000,
      employee_age: 61,
      profile_image: "",
    },
    {
      id: 7,
      employee_name: "Herrod Chandler",
      employee_salary: 137500,
      employee_age: 59,
      profile_image: "",
    },
    {
      id: 8,
      employee_name: "Rhona Davidson",
      employee_salary: 327900,
      employee_age: 55,
      profile_image: "",
    },
    {
      id: 9,
      employee_name: "Colleen Hurst",
      employee_salary: 205500,
      employee_age: 39,
      profile_image: "",
    },
    {
      id: 10,
      employee_name: "Sonya Frost",
      employee_salary: 103600,
      employee_age: 23,
      profile_image: "",
    },
    {
      id: 11,
      employee_name: "Jena Gaines",
      employee_salary: 90560,
      employee_age: 30,
      profile_image: "",
    },
    {
      id: 12,
      employee_name: "Quinn Flynn",
      employee_salary: 342000,
      employee_age: 22,
      profile_image: "",
    },
    {
      id: 13,
      employee_name: "Charde Marshall",
      employee_salary: 470600,
      employee_age: 36,
      profile_image: "",
    },
    {
      id: 14,
      employee_name: "Haley Kennedy",
      employee_salary: 313500,
      employee_age: 43,
      profile_image: "",
    },
    {
      id: 15,
      employee_name: "Tatyana Fitzpatrick",
      employee_salary: 385750,
      employee_age: 19,
      profile_image: "",
    },
    {
      id: 16,
      employee_name: "Michael Silva",
      employee_salary: 198500,
      employee_age: 66,
      profile_image: "",
    },
    {
      id: 17,
      employee_name: "Paul Byrd",
      employee_salary: 725000,
      employee_age: 64,
      profile_image: "",
    },
    {
      id: 18,
      employee_name: "Gloria Little",
      employee_salary: 237500,
      employee_age: 59,
      profile_image: "",
    },
    {
      id: 19,
      employee_name: "Bradley Greer",
      employee_salary: 132000,
      employee_age: 41,
      profile_image: "",
    },
    {
      id: 20,
      employee_name: "Dai Rios",
      employee_salary: 217500,
      employee_age: 35,
      profile_image: "",
    },
    {
      id: 21,
      employee_name: "Jenette Caldwell",
      employee_salary: 345000,
      employee_age: 30,
      profile_image: "",
    },
    {
      id: 22,
      employee_name: "Yuri Berry",
      employee_salary: 675000,
      employee_age: 40,
      profile_image: "",
    },
    {
      id: 23,
      employee_name: "Caesar Vance",
      employee_salary: 106450,
      employee_age: 21,
      profile_image: "",
    },
    {
      id: 24,
      employee_name: "Doris Wilder",
      employee_salary: 85600,
      employee_age: 23,
      profile_image: "",
    },
  ],
  message: "Successfully! All records has been fetched.",
};

// map, filter , for, index, include ,set , some(), findIndex(), concat()

// function isNameExits(name) {
//1st solution
//   for (let data in employees.data) {
//     if (employees.data[data].employee_name === name) {
//       return true;
//     }
//   }
//   return false;
//second solution

//   let x = employees.data;
//   let useraaa = x.some((users) => {
//     return users.employee_name === name;
//   });
//   return useraaa;
//third solution
//   let x = employees.data;
//   let useraaa = x.find((users) => {
//     return users.employee_name === name;
//   });
//   return Boolean(useraaa);
// }
// console.log(isNameExits("Doris Wilder"));

// const numbers = [1, 4, 9];
// const doubles = numbers.map((num) => {
//   return num * 2;
// });

// console.log(doubles);
//find unique value
// const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8];

// function uniqueArray() {
//   const uniwueArray = [];

//   arr.forEach((data) => {
//     if (!uniwueArray.includes(data)) {
//       uniwueArray.push(data);
//     }
//   });
//   return uniwueArray;
// }
// solution
// function uniqueArray() {
//   return [...new Set(arr)];
// }

// function uniqueArray() {
//   return arr.reduce((acc, ele) => {
//     return acc.includes(ele) ? acc : [...acc, ele];
//   }, []);
// }
// console.log(uniqueArray());
const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8];

const numbers = [1, 4, 9];
console.log(numbers.concat(...arr));
