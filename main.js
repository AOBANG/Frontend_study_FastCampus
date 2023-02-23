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
