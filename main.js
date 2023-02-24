import getType from "./getType";

console.log(typeof "Hello world!");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(getType(123));
console.log(getType(false));
console.log(getType({}));
console.log(getType([]));

// 삼항 연산자(ternary operator)
const a = 1 < 2;
console.log(a ? "true" : "false"); // true

// 반복문
const ulEl = document.querySelector("ul");

for (let i = 0; i < 3; i += 1) {
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;
  li.addEventListener("click", function () {
    console.log(li.textContent);
  });
  ulEl.appendChild(li);
}

// 함수
function sum(x, y) {
  return x + y;
}
console.log(sum(1, 3));

// 화살표 함수

// function () {}
const double = function (x) {
  return x * 2;
};
console.log("double: ", double(7));

// () => {}
const doubleArrow = (x) => {
  return x * 2;
};
console.log("doubleArrow: ", doubleArrow(7));

// 즉시 실행 함수
const b = 7;
function double() {
  console.log(b * 2);
}
double();

(function () {
  console.log(b * 2);
})();

(function () {
  console.log(b * 2);
})();

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
const c = 7;

double();

function double() {
  console.log(c * 2);
}

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

const timer = setTimeout(() => {
  console.log("Hi");
}, 3000);

const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  clearTimeout(timer);
});

// 콜백(Callback)
// 함수의 인수로 사용되는 함수
function timeout(cb) {
  setTimeout(() => {
    console.log("hi");
    cb();
  }, 3000);
}
timeout(() => {
  console.log("done");
});

// 생성자 함수
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
const seh = new User("sehyun", "park");
console.log(seh);
console.log(seh.getFullName());

// ES6 Classes
class User2 {
  contructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// 배열 .map()
const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banna", "Cherry"];

const d = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`);
});
console.log(d);

const e = fruits.map((fruit, index) => ({
  id: index,
  name: fruit,
}));
console.log(e);

// 배열 .filter()
const f = numbers.map((number) => {
  return number < 3;
});
console.log(f);

const g = numbers.filter((number) => {
  return number < 3;
});
console.log(g);

// 배열 .find() .findIndex()
const h = fruits.find((fruit) => {
  return /^B/.test(fruit);
});
// const h = fruits.find(fruit => /^B/.text(fruit))
console.log(h);

const i = fruits.findIndex((fruit) => {
  return /^B/.test(fruit);
});
// const i = fruits.findIndex(fruit => /^B/.text(fruit))
console.log(h);

// 배열 .includes()
const j = numbers.includes(3);
console.log(j);

// 배열 .unshift()
numbers.unshift(0); // 배열 맨 앞에 삽입
console.log(numbers);

// 배열 .splice()
numbers.splice(2, 1); // 인덱스 2부터 1개의 원소를 지운다
console.log(numbers);
