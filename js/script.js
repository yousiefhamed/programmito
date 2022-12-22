// when click on logo you will go to top of the page
const brand = document.getElementById('brand');
brand.onclick = () => { document.location = '#' };

// fixed nav bar style when going down
const navBar = document.getElementById('navBar');
const upArrow = document.getElementById('upArrow');
const mainHeader = document.getElementById('mainHeader');
document.addEventListener('scroll', () => {
  if (mainHeader.getBoundingClientRect().top.toFixed() < 0) {
    navBar.classList.add('fixed-nav-bar');
    upArrow.style.display = 'block';
  } else {
    navBar.classList.remove('fixed-nav-bar');
    upArrow.style.display = 'none';
  }
})
upArrow.addEventListener('click', () => {
  document.location = '#';
})

//declaration of nav srcs
const logo = document.getElementById('logo');
const menuBtn = document.getElementById('menuBtn');
const menuItems = document.getElementById('menuItems');
const menuIcon = document.getElementById('menuIcon');
const home = document.getElementById('Home');
const javascript = document.getElementById('javascript');
const java = document.getElementById('java');
const SQL = document.getElementById('SQL');
const python = document.getElementById('python');
let SignIn = document.getElementById('SignIn');
let SignUp = document.getElementById('SignUp');
let menuSrc;
let crossSrc;
let signSrc;
if (document.title == `Programmito | Home`) {
  menuSrc = 'assets/imgs/icons/menu.png';
  crossSrc = 'assets/imgs/icons/cross.png';
  signSrc = 'html/subscribe/sign.html';
  logo.addEventListener('click', () => {
    document.location = '#';
  })
  javascript.href = 'html/Articles/javascript.html';
  java.href = 'html/Articles/java.html';
  SQL.href = 'html/Articles/SQL.html';
  python.href = 'html/Articles/python.html';
} else {
  menuSrc = '../../assets/imgs/icons/menu.png';
  crossSrc = '../../assets/imgs/icons/cross.png';
  signSrc = '../subscribe/sign.html';
  logo.addEventListener('click', () => {
    document.location = '../../index.html';
  });
  home.href = '../../index.html';
  javascript.href = 'javascript.html';
  java.href = 'java.html';
  SQL.href = 'SQL.html';
  python.href = 'python.html';
}
menuIcon.src = menuSrc;

SignIn.addEventListener('click', () => {
  signSrc += '#signIn';
  SignIn.href = signSrc;
})
SignUp.addEventListener('click', () => {
  signSrc += '#signUp';
  SignUp.href = signSrc;
})

//open and close menu
menuItems.style.display = 'none';
menuBtn.onclick = () => {
  if (menuItems.style.display == 'none') {
    menuItems.style.display = 'block';
    menuIcon.src = crossSrc;
    document.body.addEventListener('click', () => {
      if (menuItems.style.display == 'block') {
        var x = event.target;
        if (x.nodeName != 'NAV' && x.id != 'menuIcon') {
          menuItems.style.display = 'none';
          menuIcon.src = menuSrc;
        }
      }
    })
  } else {
    menuItems.style.display = 'none';
    menuIcon.src = menuSrc;
  };
}

//if the same page gp to the top of the page
let menus = ['Home', 'javascript', 'SQL', 'python', 'java', 'subscribe'];
for (let menu of menus) {
  if (document.title == `Programmito | ${menu}`) {
    let active = document.getElementById(`${menu}`);
    active.href = '#';
    active.classList.add('active-menu-item');
  }
}

//go to main section when click on down arrow in header section
const scrollToContent = document.getElementById('scrollToContent');
const mainTag = document.getElementById('mainTag');
scrollToContent.addEventListener('click', () => {
  mainTag.scrollIntoView();
})

//add a class "flex" to all children of articleSectiond and to figures
let articleSections = document.getElementById('articleSections').children;
for (let articleSection of articleSections) {
  articleSection.classList.add('flex');
}
let figures = document.getElementsByTagName('figure');
for (let figure of figures) {
  figure.classList.add('flex');
}