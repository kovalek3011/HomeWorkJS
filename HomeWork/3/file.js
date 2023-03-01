/*
3. Создать класс данных "Товар"
С полями
Название
Цена
Количество
Описание
Наполнить массив объектами такого класса.
Написать метод, который получает строку вида
"name-contains-fd&price-=2-&quantity->5&description-ends-abc"
"name-starts-fd&quantity=5"
На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)
*/

class Product {
  constructor(name, price, quantity, description) {
    this.Name = name;
    this.Price = price;
    this.Quantity = quantity;
    this.Description = description;
  }
}

function searchProducts(searchString) {
  const searchParams = searchString.split("&");
  const filteredProducts = products.filter((product) => {
    for (let i = 0; i < searchParams.length; i++) {
      let arr = searchParams[i].split("-");
      let field;
      let operator;
      let value;

      if (arr.length == 3) {
        [field, operator, value] = searchParams[i].split("-");
      } else {
        field = arr[0];
        operator = arr[1].replace(/[0-9]/, "");
        value = arr[1].replace(/[^+\d]/g, "");
      }

      if (
        field === "name" &&
        operator === "contains" &&
        !product.Name.includes(value)
      ) {
        return false;
      } else if (
        field === "name" &&
        operator === "starts" &&
        !product.Name.startsWith(value)
      ) {
        return false;
      } else if (
        field === "name" &&
        operator === "ends" &&
        !product.Name.endsWith(value)
      ) {
        return false;
      } else if (
        field === "price" &&
        operator === "<" &&
        !(product.Price < value)
      ) {
        return false;
      } else if (
        field === "price" &&
        operator === "=" &&
        !(product.Price == value)
      ) {
        return false;
      } else if (
        field === "price" &&
        operator === ">" &&
        !(product.Price > value)
      ) {
        return false;
      } else if (
        field === "price" &&
        operator === "<=" &&
        !(product.Price <= value)
      ) {
        return false;
      } else if (
        field === "price" &&
        operator === ">=" &&
        !(product.Price >= value)
      ) {
        return false;
      } else if (
        field === "quantity" &&
        operator === "<" &&
        !(product.Quantity < value)
      ) {
        return false;
      } else if (
        field === "quantity" &&
        operator === "=" &&
        !(product.Quantity == value)
      ) {
        return false;
      } else if (
        field === "quantity" &&
        operator === ">" &&
        !(product.Quantity > value)
      ) {
        return false;
      } else if (
        field === "quantity" &&
        operator === "<=" &&
        !(product.Quantity <= value)
      ) {
        return false;
      } else if (
        field === "quantity" &&
        operator === ">=" &&
        !(product.Quantity >= value)
      ) {
        return false;
      } else if (
        field === "description" &&
        operator === "contains" &&
        !product.Description.includes(value)
      ) {
        return false;
      } else if (
        field === "description" &&
        operator === "starts" &&
        !product.Description.startsWith(value)
      ) {
        return false;
      } else if (
        field === "description" &&
        operator === "ends" &&
        !product.Description.endsWith(value)
      ) {
        return false;
      }
    }
    return true;
  });
  return filteredProducts;
}

const products = [
  new Product("Rolls-fd-Royce", 2, 8, "German Car-abc"),
  new Product("fd-Bentley", 3, 5, "English abc Car"),
  new Product("Jaguar", 1, 2, "English-abc Car"),
  new Product("fLada", 50, 3, "Russian Car abc"),
  new Product("fdLamborghini", 2, 13, "Italian-Car-abc"),
];

const str1 = "name-starts-fd&quantity-=5";
const str2 = "name-contains-fd&price-=2&quantity->5&description-ends-abc";

console.log(searchProducts(str1));
console.log(searchProducts(str2));
