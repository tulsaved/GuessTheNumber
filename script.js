'use strict';

let RanNum = Math.trunc(Math.random() * 20) + 1;
console.log(RanNum);
const Num1 = Number(document.querySelector('.guess').value);

document.querySelector('.btn').addEventListener('click', function () {
  const Num1 = Number(document.querySelector('.guess').value);
  console.log(Num1);
  if (!Num1) {
    document.querySelector('.text').textContent = '👀No, Number';
  } else if (Num1 < RanNum) {
    document.querySelector('.text').textContent = 'Too low, keep on guessing';
  } else if (Num1 > RanNum) {
    document.querySelector('.text').textContent = 'Too high, keep on guessing';
  } else {
    document.querySelector('.text').textContent = '🎉Yay, correct guess';
    document.querySelector('.icon').textContent = Num1;
    document.querySelector('body').style.backgroundColor = '#6666ff';
  }
});
function changes() {
  document.querySelector('.guess').value = '';
  document.querySelector('.text').textContent = 'Start Guessing...';
  RanNum = Math.trunc(Math.random() * 20) + 1;
  console.log(RanNum);
}
document.querySelector('.again').addEventListener('click', function () {
  const Num1 = Number(document.querySelector('.guess').value);
  if (Num1 == RanNum) {
    changes();
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.icon').textContent = '?';
  } else {
    changes();
  }
});
