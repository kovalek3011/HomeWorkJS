/* 1.4. Подсчитывающий, уникальные слова. 
"Текст, в котором слово текст несколько раз встречается и слово тоже" - в ответе,
 что "слово - 2 раза, текст - 2 раза, в - 1 раз, несколько - 1 раз". 
 Самостоятельно придумать наиболее удачную структуру данных для ответа. */

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

function counterUniqueWord(message) {
  let str = removingSpaces(message);
  let words = str.toLowerCase().split(" ");
  let wordsCount = words.reduce((acc, word) => {
    if (acc[word]) {
      acc[word] += 1;
    } else {
      acc[word] = 1;
    }
    return acc;
  }, {});

  for (let word in wordsCount) {
    console.log(
      `Слово "${word}" встречается ${wordsCount[word]} ${getNoun(
        wordsCount[word],
        "раз",
        "раза",
        "раз"
      )} в данной строке`
    );
  }

  const arr = [];
  for (let word in wordsCount) {
    arr.push(
      `\nСлово "${word}" встречается ${wordsCount[word]} ${getNoun(
        wordsCount[word],
        "раз",
        "раза",
        "раз"
      )} в данной строке`
    );
  }

  return arr;
}

alert(
  `Готово!\n${counterUniqueWord(
    prompt(
      "1.4 Введи произвольную строку, я посчитаю количество уникальных слов",
      "Текст, в котором слово текст несколько раз встречается и слово тоже"
    )
  )}`
);
