console.log('Hello!');
// const showSelectedSports = document.getElementById('showSelectedSports');
// const displayBtn = document.getElementById('displayBtn');
// const sports = document.getElementsByName('sports');
// for (let i = 0; i < sports.length; i++) {
//   sports[i].addEventListener('change', () => {
//     const selectedSports = [];
//     for (let j = 0; j < sports.length; j++) {
//       if (sports[j].checked) {
//         console.log('hi');
//         selectedSports.push(sports[j].value);
//       }
//     }
//     showSelectedSports.textContent = `Your Selected Sports are:${selectedSports.join(
//       ', '
//     )}`;
//   });
// }

// 2nd method
// const showSelectedSports = document.getElementById('showSelectedSports');
// const displayBtn = document.getElementById('displayBtn');
// const sports = document.getElementsByName('sports');
// displayBtn.addEventListener('click', () => {
//   const selectedSportsArray = [];
//   for (let i = 0; i < sports.length; i++) {
//     if (sports[i].checked) {
//       selectedSportsArray.push(sports[i].value);
//     }
//     showSelectedSports.textContent = `Your Selected sports are:${selectedSportsArray.join(
//       ', '
//     )}`;
//   }
// });

// Question 2 Choose multiple Vacation Destinations-
// const destinations = document.getElementsByName('destinations');
// const displayBtn2 = document.getElementById('displayBtn2');
// const showSelectedDestinations = document.getElementById(
//   'showSelectedDestinations'
// );
// console.log(destinations, displayBtn2, showSelectedDestinations);
// displayBtn2.addEventListener('click', () => {
//   const arr = [];
//   for (let i = 0; i < destinations.length; i++) {
//     if (destinations[i].checked) {
//       arr.push(destinations[i].value);
//     }
//     console.log(arr);
//     showSelectedDestinations.textContent = `Your Selected destinations are: ${arr.join(
//       ', '
//     )}`;
//   }
// });

// Question 3 Select multiple Movie Genres
const movies = document.getElementsByName('movies');
const displayBtn3 = document.getElementById('displayBtn3');
const showSelectedMovies = document.getElementById('showSelectedMovies');
displayBtn3.addEventListener('click', () => {
  const arr = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].checked) {
      arr.push(movies[i].value);
    }
    showSelectedMovies.textContent = `Your Selected Movies Are:${arr.join(
      ', '
    )}`;
  }
});

// Question-4- Choose Multiple items for a restaurant menu
const menu = document.getElementsByName('menu');
const displayBtn4 = document.getElementById('displayBtn4');
const showSelectedMenu = document.getElementById('showSelectedMenu');
displayBtn4.addEventListener('click', () => {
  const arr4 = [];
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].checked) {
      arr4.push(menu[i].value);
    }
    showSelectedMenu.textContent = `Your Selected menu are: ${arr4.join(', ')}`;
  }
});

// Question 5 Select Multiple Fruits
const fruits = document.getElementsByName('fruits');
const showSelectedFruits = document.getElementById('showSelectedFruits');
const displayBtn5 = document.getElementById('displayBtn5');
displayBtn5.addEventListener('click', () => {
  const arr5 = [];
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].checked) {
      arr5.push(fruits[i].value);
    }
    showSelectedFruits.textContent = `Your Selected Fruits are:${arr5.join(
      ', '
    )}`;
  }
});
