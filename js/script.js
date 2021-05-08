//Task 3.0
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

//Task 1.0
const mainEl = document.querySelector('main');
//Task 1.1.
mainEl.style.backgroundColor = 'var(--main-bg)';
//Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
//how do we check to see if it's working?

//Task 1.3
mainEl.classList.add('flex-ctr');

//Task 2.0

const topMenuEl = document.getElementById('top-menu');

//Task 2.1
topMenuEl.style.height = "100%";
//not working?

//Task 2.2.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Task 2.3
topMenuEl.classList.add('flex-around');

//Task 3.1
for (let link of menuLinks) {
  const linkTag = document.createElement('a');
  linkTag.setAttribute('href', link.href);
  linkTag.innerHTML = link.text;
  topMenuEl.append(linkTag);

}
