const menu = document.querySelector('.items-menu')
const menuParent = document.querySelector('.menu')
function showMenu(){
    menu.style.display = 'block';
}



document.addEventListener('click', (event) => {

  if (!menuParent.contains(event.target)) {
        menu.style.display = 'none';
  }
});   