/* 2.Написать модуль, который способен выполнять операции с числами любой длины.
4 метода для сложения, умножения, вычитания и деления. */
function sumBI(a, b) {
  res = BigInt(a) + BigInt(b);
  console.log(res);
  return res;
}

function multBI(a, b) {
  res = BigInt(a) * BigInt(b);
  console.log(res);
  return res;
}

function subBI(a, b) {
  res = BigInt(a) - BigInt(b);
  console.log(res);
  return res;
}

function divBI(a, b) {
  if (b == 0) {
    console.log("На ноль делить нельзя");
    return "На ноль делить нельзя";
  } else {
    res = BigInt(a) / BigInt(b);
    console.log(res);
    return res;
  }
}

alert(sumBI(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));
alert(multBI(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));
alert(subBI(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));
alert(divBI(Number.MAX_SAFE_INTEGER, 0));
alert(divBI(Number.MAX_SAFE_INTEGER, 2));
