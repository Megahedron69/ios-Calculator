/********************DOM VARIABLES*********************************/
const hrs = document.getElementById("hour");                                      /*****TO DO********/
const min = document.getElementById("minute");                                     //1. MAKE COMA SYSTEM ACTIVE
const ans = document.getElementById("output");                                     //2. ADD BACKSPACE FEATURE
const ac = document.getElementById("AC");
const plmi = document.getElementById("pm");
const per = document.getElementById("perce");
const divide = document.getElementById("divi");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const multiply = document.getElementById("mult");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const minus = document.getElementById("min");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const plus = document.getElementById("plu");
const zero = document.getElementById("0");
const decimal = document.getElementById("dec");
const equal = document.getElementById("eq");

let numinmem = null;
let operatorinmem = null;
/********************arrays and objs*********************************/
let numbersel = [zero, one, two, three, four, five, six, seven, eight, nine];
/********************PRINTING NUMS AND DECIMAL***********************/
const coma = (numstre) => {
  let n = Number(numstre);
  let value = n.toLocaleString("en"); //coma system works in console
  return value;
};

const printnum = (numstr) => {
  if (ans.textContent === "0") ans.textContent = numstr;
  else ans.textContent += numstr;
};

for (let i = 0; i < numbersel.length; i++) {
  numbersel[i].addEventListener("click", () => {
    printnum(i);
  });
}

decimal.addEventListener("click", function () {
  if (!ans.textContent.includes(".")) ans.textContent += ".";
  else console.log("Only 1 decimal can be inserted");
});
/********************GETTING NUMBERS FROM CALCULATOR*****************/
const getnum = () => {
  let firstnum = parseFloat(ans.innerText);
  console.log("firstnum" + "=" + firstnum);
};

/********************AUXILARY OPERATIONS[AC,ABS,PERCENT]*************/
ac.addEventListener("click", function () {
  ans.textContent = "0";
  let numinmem = null;
  let operatorinmem = null;
  console.log("allcleared");
});
plmi.addEventListener("click", function (firstnum) {
  let abs = JSON.parse(ans.textContent);
  ans.textContent = abs * -1;
});
per.addEventListener("click", function (firstnum) {
  let pe = JSON.parse(ans.textContent);
  ans.textContent = pe / 100;
  let numinmem = null;
  let operatorinmem = null;
});
/********************OPERATOR FUNCTIONS*****************************/

const getResultOfOperationAsStr = () => {
  const currentValueNum = parseFloat(ans.textContent);
  const valueNumInMemory = parseFloat(ans.textContent);
  let newValueNum;
  if (operatorinmem === "addition") {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operatorinmem === "subtraction") {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operatorinmem === "multiplication") {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operatorinmem === "division") {
    newValueNum = valueNumInMemory / currentValueNum;
  }
  return newValueNum.toString();
};

operationperf = (operation) => {
  if (!numinmem) {
    numinmem = parseFloat(ans.textContent);
    operatorinmem = operation;
    ans.textContent = "";
    return;
  }
  operatorinmem = operation;
  ans.textContent = getResultOfOperationAsStr();
  ans.textContent = "";
};
//operation event listeners
plus.addEventListener("click", () => {
  operationperf("addition");
});
minus.addEventListener("click", () => {
  operationperf("subtraction");
});
multiply.addEventListener("click", () => {
  operationperf("multiplication");
});
divide.addEventListener("click", () => {
  operationperf("division");
});
equal.addEventListener("click", () => {
  if (ans.textContent) {
    ans.textContent = getResultOfOperationAsStr();
    valueStrInMemory = null;
    operatorInMemory = null;
  }
});

/********************Time changing function*************************/
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
setInterval(rendertime, 1000);
rendertime();
