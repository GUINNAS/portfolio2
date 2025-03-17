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

const navbar = document.querySelector('.navbar');
const links = navbar.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

const botoes = document.querySelectorAll('.botao-especialidade');

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const target = botao.getAttribute('data-target');
    const div = document.querySelector(target);
    if (div) {
      const divs = document.querySelectorAll('.conteudo-especialidades div');
      divs.forEach((d) => {
        d.style.display = 'none';
      });
      div.style.display = 'block';
      botoes.forEach((b) => {
        b.classList.remove('ativo');
      });
      botao.classList.add('ativo');
    } else {
      console.error(`Div não encontrada: ${target}`);
    }
  });
});