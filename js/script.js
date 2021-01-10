window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#btn-realism').addEventListener('click', function() {
      document.querySelector('#hidden-menu').classList.toggle('hidden-menu--active');
      document.querySelector('.header__svg').classList.toggle('header--svg');
    })
});