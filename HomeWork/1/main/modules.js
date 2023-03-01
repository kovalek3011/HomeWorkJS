// 1.1. Преобразование строки к нижнему регистру, но первая буква большая. "Abscd"
//export
function ucFirst(str) {
  console.log(str[0].toUpperCase() + str.toLowerCase().slice(1));
  return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

/* 1.2. Преобразование строки с целью правильно расстановки пробелов. 
  "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены." =>
  "Вот пример строки,в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.*/
//export
function removingSpaces(str) {
  console.log(formatStr(str));
  return formatStr(str);
}

function formatStr(str) {
  let new_str = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      new_str += str[i];
      {
        if ((str[i] == "," || str[i] == ".") && str[i + 1] != " ") {
          new_str += " "; // ставит пробел после , . если его нет
        }
      }
    } else if (str[i + 1] != " " && str[i + 1] != "," && str[i + 1] != ".") {
      new_str += str[i]; // удаляет лишние пробелы и пробелы перед , .
    }
  }
  return new_str;
}

// 1.3. Подсчитывающие кол-во слов в строке.
// export
function counterWord(message) {
  let str = formatStr(message)
    .trim()
    .replace(/[^a-zа-яё\s]/gi, "");
  let splitMessage = str.split(" ");
  let wordsNumber = splitMessage.length;
  let res = `Строка "${message}" состоит из ${wordsNumber} ${getNoun(
    wordsNumber,
    "слова",
    "слов",
    "слов"
  )}`;

  console.log(res);

  return res;
}

/* 1.4. Подсчитывающий, уникальные слова. 
  "Текст, в котором слово текст несколько раз встречается и слово тоже" - в ответе,
  что "слово - 2 раза, текст - 2 раза, в - 1 раз, несколько - 1 раз". 
  Самостоятельно придумать наиболее удачную структуру данных для ответа. */
//export
function counterUniqueWord(message) {
  let str = formatStr(message)
    .trim()
    .replace(/[^a-zа-яё\s]/gi, "");
  let words = str.toLowerCase().split(" ");
  let wordsCount = words.reduce((acc, word) => {
    if (acc[word]) {
      acc[word] += 1;
    } else {
      acc[word] = 1;
    }
    return acc;
  }, {});

  const arr = [];
  for (let word in wordsCount) {
    let res = `Слово "${word}" встречается ${wordsCount[word]} ${getNoun(
      wordsCount[word],
      "раз",
      "раза",
      "раз"
    )} в данной строке`;
    console.log(res);
    arr.push(`\n` + res);
  }

  return arr;
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
