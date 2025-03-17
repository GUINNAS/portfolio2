const tabs = document.querySelectorAll('.tab-sobre-mim');
const contents = document.querySelectorAll('.tab-content-sobre-mim');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    contents.forEach((content) => {
      content.classList.remove('active');
    });
    contents[index].classList.add('active');
  });
});
