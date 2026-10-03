function checkNumber() {
  let input = prompt("Введите число:");
  if (input === null || input.trim() === "" || isNaN(input)) {
    alert("введите только числа");
    return;
  }
  let num = Number(input);

  if (num % 2 === 0) {
    alert("четное");
  } else {
    alert("нечетное");
  }
}
checkNumber();