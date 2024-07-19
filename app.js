console.log("Я загадал число от 1 до 10. Попробуй угадать его!");

let secretNumber = Math.floor(Math.random() * 10 + 1);

// console.log(secretNumber); 
let attempts = 3

while (attempts > 0) {
  let userNumber = Number(prompt('Введите число: '));
    
     if (userNumber < secretNumber) {
        console.log("Секретное число больше");
        attempts = attempts -1;
      //   attempts--;
     } else if (userNumber === secretNumber) {
        console.log("Вы угадали!");
        break;
     }
     else {
        console.log("Секретное число меньше");
        attempts = attempts -1;
     }
}
// for (let i = i <= 5; i++) {
//     console.log("Привет!")
// }

// let a = 0;

// while(a < 5) {
//     console.log("Привет!", a)
//     a++;
// }
