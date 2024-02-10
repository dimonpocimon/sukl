//Определение количества выполнений цикла while
let i = 0;

while (i < 10) {
  console.log(`Выполнение ${i + 1}`);
  i++;
}

// Вывод всех чисел от 45 до 67 с помощью оператора while

let i = 45;

while (i <= 67) {
  console.log(i);
  i++;
}

//Вывод всех чисел от 45 до 670, кратных 10, с помощью оператора while
let i = 45;

while (i <= 670) {
  if (i % 10 === 0) {
    console.log(i);
  }
  i++;
}

//Выполнение двух предыдущих заданий с помощью оператора for

// Вывод всех чисел от 45 до 67
for (let i = 45; i <= 67; i++) {
    console.log(i);
  }
  
  // Вывод всех чисел от 45 до 670, кратных 10
  for (let i = 45; i <= 670; i++) {
    if (i % 10 === 0) {
      console.log(i);
    }
  }

  //Вывод слова в зависимости от значения переменной n с помощью оператора switch
  const n = 3;

switch (n) {
  case 0:
    console.log('ноль');
    break;
  case 1:
    console.log('один');
    break;
  case 2:
    console.log('два');
    break;
  case 3:
    console.log('три');
    break;
  case }

// Вывод десяти одинаковых изображений с помощью цикла for
for (let i = 0; i < 10; i++) {
    document.write('<img src="..img/Atomic_Heart_Cover_Art.jpg" alt="img" />');
  }
