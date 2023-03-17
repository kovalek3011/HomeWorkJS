// 1.1. Преобразование строки к нижнему регистру, но первая буква большая. "Abscd"

function ucFirst(str) {
  console.log(str[0].toUpperCase() + str.toLowerCase().slice(1));
  return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

alert(`Готово!\n\n${ucFirst(
  prompt(
    "1.1 Введите произвольную строку, я преобразую ее к нижнему регистру, а первую букву сделаю большой!",
    "пРоИзВоЛьНаЯ СтРоКа"
  )
)}
`);
