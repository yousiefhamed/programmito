// when click on logo you will go to top of the page
const brand = document.getElementById('brand');
brand.onclick = () => { document.location = '../../index.html' };

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
const menuBtn = document.getElementById('menuBtn');
const menuItems = document.getElementById('menuItems');
const menuIcon = document.getElementById('menuIcon');

const home = document.getElementById('Home');
const javascript = document.getElementById('javascript');
const java = document.getElementById('java');
const SQL = document.getElementById('SQL');
const python = document.getElementById('python');

home.href = '../../index.html';
javascript.href = '../Articles/javascript.html';
java.href = '../Articles/java.html';
SQL.href = '../Articles/SQL.html';
python.href = '../Articles/python.html';

let menuSrc = '../../assets/imgs/icons/menu.png';
let crossSrc = '../../assets/imgs/icons/cross.png';
menuIcon.src = menuSrc;

let SignIn = document.getElementById('SignIn');
let SignUp = document.getElementById('SignUp');
SignIn.href = '#signIn';
SignUp.href = '#signUp';

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
