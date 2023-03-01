// 1.3. Подсчитывающие кол-во слов в строке.

// Взял предыдущую функцию, чтобы убрать лишние пробелы и знаки
function removingSpaces(str) {
  let new_str = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      new_str += str[i];
      {
        if ((str[i] == "," || str[i] == ".") && str[i + 1] != " ") {
          new_str += " ";
        }
      }
    } else if (str[i + 1] != " " && str[i + 1] != "," && str[i + 1] != ".") {
      new_str += str[i];
    }
  }
  return (new_str = new_str.trim().replace(/[^a-zа-яё\s]/gi, "")); // убрал все кроме букв и пробелов, и пробелы по краям str
}

function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

function counterWord(message) {
  let str = removingSpaces(message);
  let splitMessage = str.split(" ");
  let wordsNumber = splitMessage.length;

  console.log(
    `Строка "${message}" состоит из ${wordsNumber} ${getNoun(
      wordsNumber,
      "слова",
      "слов",
      "слов"
    )}`
  );

  return `Строка "${message}" состоит из ${wordsNumber} ${getNoun(
    wordsNumber,
    "словa",
    "слов",
    "слов"
  )}`;
}

alert(
  `Готово!\n\n${counterWord(
    prompt(
      "1.3 Введи произвольную строку, я посчитаю кол-во слов",
      "Произвольная   строка,состоящая   из шести слов."
    )
  )}`
);
