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
