const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
const tabIndicator = document.querySelector('.active-indicator');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    removeActive(); //remove all active classes
    switchTab(i); //add active to current tab
  });
}

const removeActive = () => {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
    contents[i].classList.remove('active');
  }
};

const switchTab = (i) => {
  tabs[i].classList.add('active');
  contents[i].classList.add('active');
  tabIndicator.style.left = `${(100 / tabs.length) * i}%`;
};

window.addEventListener('load', switchTab(0));

let firstAngle = document.querySelector('#first-angle');
let secondAngle = document.querySelector('#second-angle');
let thirdAngle = document.querySelector('#third-angle');
let angleBtn = document.querySelector('#angle-btn');
let angleOutput = document.querySelector('#angle-output');

const isTriangle = (angle1, angle2, angle3) => {
  angle1 = Number(angle1);
  angle2 = Number(angle2);
  angle3 = Number(angle3);
  let sum = angle1 + angle2 + angle3;
  console.log(sum);
  if (sum === 180) {
    angleOutput.style.color = 'green';
    angleOutput.innerHTML = '<h2>Yayy!! This angles make a &#x25B3;</h2>';
  } else {
    angleOutput.style.color = 'red';
    angleOutput.innerHTML =
      '<h2>No!! Thease angles do not form a &#x25B3;</h2>';
  }
};

let bLength = document.querySelector('#base');
let pLength = document.querySelector('#height');
let hypotenuseBtn = document.querySelector('#hypotenuse-btn');
let hypotenuseOutput = document.querySelector('#hypotenuse-output');

const findHypotenuse = (b, p) => {
  let h = Math.sqrt(b * b + p * p);
  hypotenuseOutput.innerHTML = `<h2>Hypotenuse length is ${h}</h2>`;
};

let baseOfTriangle = document.querySelector('#base-of-triangle');
let heightOfTriangle = document.querySelector('#height-of-triangle');
let areaBtn = document.querySelector('#area-btn');
let areaOutput = document.querySelector('#area-output');

const findArea = (b, h) => {
  let a = 0.5 * (b * h);
  areaOutput.innerHTML = `<h2>Area of &#x25B3; is ${a}</h2>`;
};

areaBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (baseOfTriangle.value !== '' && heightOfTriangle.value !== '') {
    findArea(baseOfTriangle.value, heightOfTriangle.value);
  }
});

hypotenuseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (bLength.value !== '' && pLength.value !== '') {
    findHypotenuse(bLength.value, pLength.value);
  }
});

angleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    firstAngle.value !== '' &&
    secondAngle.value !== '' &&
    thirdAngle.value !== ''
  ) {
    isTriangle(firstAngle.value, secondAngle.value, thirdAngle.value);
  }
});
