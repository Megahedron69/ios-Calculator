//variables
let hrs = document.getElementById("hour");
let min = document.getElementById("minute");
let ans = document.getElementById("output");
let ac = document.getElementById("AC");
let plmi = document.getElementById("pm");
let per = document.getElementById("perce");
let divide = document.getElementById("divi");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let multiply = document.getElementById("mult");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let minus = document.getElementById("min");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let plus = document.getElementById("plu");
let zero = document.getElementById("0");
let decimal = document.getElementById("dec");
let equal = document.getElementById("eq");
let firstnum;
let secondnum;
let operator;
let fans;
//arrays and objs

//Time changing function
function rendertime() {
  let mytime = new Date();
  let htime = mytime.getHours();
  let mtime = mytime.getMinutes();
  if (htime > 12) {
    htime -= 12;
    if (htime < 10) {
      hrs.textContent = `0${htime}`;
    } else hrs.textContent = htime;
  } else hrs.textContent = htime;
  if (mtime < 10) {
    min.textContent = `0${mtime}`;
  } else min.textContent = mtime;
}
rendertime();

//printing numbers on output screen
one.addEventListener("click", function () {
  ans.textContent += "1";
});
two.addEventListener("click", function () {
  ans.textContent += "2";
});
three.addEventListener("click", function () {
  ans.textContent += "3";
});
four.addEventListener("click", function () {
  ans.textContent += "4";
});
five.addEventListener("click", function () {
  ans.textContent += "5";
});
six.addEventListener("click", function () {
  ans.textContent += "6";
});
seven.addEventListener("click", function () {
  ans.textContent += "7";
});
eight.addEventListener("click", function () {
  ans.textContent += "8";
});
nine.addEventListener("click", function () {
  ans.textContent += "9";
});
zero.addEventListener("click", function () {
  ans.textContent += "0";
});
decimal.addEventListener("click", function () {
  ans.textContent += ".";
});

//event listeners for operations
divide.addEventListener("click", function (firstnum, secondnum) {
  operator = "/";
  firstnum = JSON.parse(ans.textContent);
  console.log(firstnum);
  ans.textContent = "";
  fans = firstnum / secondnum;
});

multiply.addEventListener("click", function (firstnum, secondnum) {
  operator = "*";
  firstnum = JSON.parse(ans.textContent);
  console.log(firstnum);
  ans.textContent = "";
  fans = firstnum * secondnum;
});

plus.addEventListener("click", function (firstnum, secondnum) {
  operator = "+";
  firstnum = JSON.parse(ans.textContent);
  console.log(firstnum);
  ans.textContent = "";
  fans = firstnum + secondnum;
});

minus.addEventListener("click", function (firstnum, secondnum) {
  operator = "-";
  firstnum = JSON.parse(ans.textContent);
  console.log(firstnum);
  ans.textContent = "";
  fans = firstnum - secondnum;
});

equal.addEventListener("click", function () {
  if (operator === "-") {
    ans.textContent = fans;
    console.log(fans);
  } else if (operator === "+") {
    ans.textContent = fans;
    console.log(fans);
  } else if (operator === "*") {
    ans.textContent = fans;
    console.log(fans);
  } else if (operator === "/") {
    ans.textContent = fans;
    console.log(fans);
  }
});
ac.addEventListener("click", function () {
  ans.textContent = "";
  console.log("allcleared");
});
plmi.addEventListener("click", function (firstnum) {
  let abs = JSON.parse(ans.textContent);
  ans.textContent = abs * -1;
});
per.addEventListener("click", function (firstnum) {
  let pe = JSON.parse(ans.textContent);
  ans.textContent = pe / 100;
});
