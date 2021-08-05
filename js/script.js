window.addEventListener('DOMContentLoaded', function(){
  let showMenu = () => {
    document.querySelectorAll('.genrel-menu__btn').forEach(function(tabsMenu){
      tabsMenu.addEventListener('click', function(ev){
        const href = ev.currentTarget.dataset.href;
        document.querySelectorAll('.hidden-menu__list').forEach(function(tabContent){
          tabContent.classList.remove('hidden-menu--active')
        })
        document.querySelector(`[data-targets="${href}"]`).classList.add('hidden-menu--active');
    });
  })
  document.querySelectorAll(".hidden-menu__btn-close").forEach(function(btnClose){
    btnClose.addEventListener('click', function(){
        document.querySelectorAll('.hidden-menu__list').forEach(function(tabContents){
            tabContents.classList.remove('hidden-menu--active')

          })
    })
})
  };
  showMenu();

  let showBurger = () =>{
    document.querySelector('#burger-btn').addEventListener('click', function() {
      gsap.from(".burger-menu", { duration: 0.5,y: -200});
      document.querySelector('.burger-menu').classList.toggle('burger_active');

    })
    const tool = document.getElementById('burger-btn');
    tool.addEventListener('click', () => {
        tool.classList.toggle('btn_active');
      })
  }

  showBurger ();


  let searchActive = () =>{
    document.querySelector('.header__search-btn').addEventListener('click', function() {
      document.querySelector('.header__input-search').classList.toggle('search_active');
      document.querySelector('.header__burger-form').classList.toggle('form-bg');
    })
  };

  searchActive ();

  let tableBurgerActive = ( ) =>{
    document.querySelector('.header__search-btn-table').addEventListener('click', function() {
      document.querySelector('.header__burger-btn').style.display = "none"
      document.querySelector('.header__logo-table').style.display = "none"
      document.querySelector('.header__input-search-table').classList.add('search_active');
      document.querySelector('.header_burger-form-table').style.width = '100%';
      document.querySelector('.header__close-btn').classList.add('btn_close-active');
    })
  };

  tableBurgerActive ();


  let tableBurgerClosed = () => {
    document.querySelector('.header__close-btn').addEventListener('click', function() {
      document.querySelector('.header__burger-btn').style.display = "block"
      document.querySelector('.header__logo-table').style.display = "block"
      document.querySelector('.header__input-search-table').classList.remove('search_active');
      document.querySelector('.header__close-btn').classList.remove('btn_close-active');
      document.querySelector('.header_burger-form-table').style.width = '';
    })
  }
  tableBurgerClosed ();


let mobileBurgerActive = () =>{
     document.querySelector('.header__search-btn-mobile').addEventListener('click', function() {
      document.querySelector('.header_burger-form-mobile').classList.add('search_active');
      document.querySelector('.header__search-btn-mobile').classList.add('display_none');
    })
  };

  mobileBurgerActive ();

  let mobileBurgerClose = () =>{
     document.querySelector('.header__close-btn-mobile').addEventListener('click', function() {
      document.querySelector('.header_burger-form-mobile').classList.remove('search_active');
      document.querySelector('.header__search-btn-mobile').classList.remove('display_none');
    })
  };

  mobileBurgerClose ();

let galleryModals = () => {
    const btns = document.querySelectorAll(".gallery__slide-btn");
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelectorAll('.modal')
    const btnClose = document.querySelectorAll(".modal__btn-close")
    btns.forEach( (el) => {
        el.addEventListener('click', (e) => {
            let path = e.currentTarget.getAttribute('data-path');

            modal.forEach((el) => {
                el.classList.remove("modal--visible")
            })

            document.querySelector(`[data-target="${path}"]`).classList.add("modal--visible");
            modalOverlay.classList.add('modal-overlay--visible');
        })
    });
    modalOverlay.addEventListener('click', (e) => {
        if (e.target == modalOverlay){
            modalOverlay.classList.remove("modal-overlay--visible")
            modal.forEach((el) => {
                el.classList.remove("modal--visible")
            })
        }
    });
    btnClose.forEach((el) => {
        el.addEventListener('click', () => {
            modalOverlay.classList.remove("modal-overlay--visible")
        })
    })
}
galleryModals();


let subtitleChoices = () =>{
    document.querySelectorAll('.catalog__btn').forEach(function(tabsLang){
      tabsLang.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path;
        document.querySelectorAll('.catalog__subtitle').forEach(function(tabContent){
          tabContent.classList.remove('catalog__subtitle_active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__subtitle_active')
      })
    });
  }

subtitleChoices();


let accordionChoices = () => {
  document.querySelectorAll('.catalog__btn').forEach(function(tabsLang){
    tabsLang.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tab__content').forEach(function(tabContent){
        tabContent.classList.remove('accordion_active')
      })
      document.querySelectorAll('.accordion__persons').forEach(function(tabContent){
        tabContent.classList.remove('acardinon__persons-color')
      })
      document.querySelectorAll('.catalog-painter__information').forEach(function(tabContent){
        tabContent.classList.remove('catalog-painter_active')
      })
    document.querySelector(`[data-country="${path}"]`).classList.add('accordion_active')

      if (path === 'germany') {
        let germany = document.querySelector('.catalog-painter__germany');
        let firstElementGermany = germany.getElementsByClassName('catalog-painter__information')
        firstElementGermany[0].classList.toggle('catalog-painter_active');
        let germanyBtn = document.getElementById('germany')
        let germanyBtnActive = germanyBtn.getElementsByClassName('accordion__persons')
        germanyBtnActive[0].classList.add('acardinon__persons-color')
      }
      if (path === 'franch') {
        let franch = document.querySelector('.catalog-painter__franch');
        let firstElementFranch = franch.getElementsByClassName('catalog-painter__information')
        firstElementFranch[0].classList.toggle('catalog-painter_active');
        let franchBtn = document.getElementById('franch')
        let franchBtnActive = franchBtn.getElementsByClassName('accordion__persons')
        franchBtnActive[0].classList.add('acardinon__persons-color')
      }
      if (path === 'italian') {
        let italian = document.querySelector('.catalog-painter__italian');
        let firstElementItalian = italian.getElementsByClassName('catalog-painter__information')
        firstElementItalian[0].classList.toggle('catalog-painter_active');
        let italianBtn = document.getElementById('italian')
        let italianBtnActive = italianBtn.getElementsByClassName('accordion__persons')
        italianBtnActive[0].classList.add('acardinon__persons-color')
      }
      if (path === 'russia') {
        let russia = document.querySelector('.catalog-painter__russia');
        let firstElementRussia = russia.getElementsByClassName('catalog-painter__information')
        firstElementRussia[0].classList.toggle('catalog-painter_active');
        let russiaBtn = document.getElementById('russia')
        let russiaBtnActive = russiaBtn.getElementsByClassName('accordion__persons')
        russiaBtnActive[0].classList.add('acardinon__persons-color')
      }
      if (path === 'belgium') {
        let belgium = document.querySelector('.catalog-painter__belgium');
        let firstElementBelgium = belgium.getElementsByClassName('catalog-painter__information')
        firstElementBelgium[0].classList.toggle('catalog-painter_active');
        let belgiumBtn = document.getElementById('belgium')
        let belgiumBtnActive = belgiumBtn.getElementsByClassName('accordion__persons')
        belgiumBtnActive[0].classList.add('acardinon__persons-color')
      }
    })
  });
}
accordionChoices ();



let accordionChoicesAnimation = () =>{
  document.querySelectorAll('.catalog__btn').forEach(function(tabsLang){
    tabsLang.addEventListener('click', function(){
      gsap.from(".catalog__subtitle", {duration: 1, opacity: 0});
      gsap.from(".catalog-painter", {duration: 1, y:100, opacity: 0});
    })
  });
  document.querySelectorAll('.accordion__persons').forEach(function(tabsLang){
    tabsLang.addEventListener('click', function(){
      gsap.from(".catalog-painter__information", {duration: 1, opacity: 0, x: -150});

    })
  });
};
accordionChoicesAnimation ();



let painterChoices = () => {

  document.querySelectorAll('.accordion__persons').forEach(function(tabsAcardion){
  tabsAcardion.addEventListener('click', function(event){
  const path = event.currentTarget.dataset.path;
  document.querySelectorAll('.catalog-painter__information').forEach(function(tabContent){
    tabContent.classList.remove('catalog-painter_active')

  })
  document.querySelector(`[data-target="${path}"]`).classList.add('catalog-painter_active')
  })
  });
}
painterChoices();

let countryBackgroundСhanges = () => {
  document.querySelectorAll('.catalog__btn').forEach(function(tabsAcardion){
    tabsAcardion.addEventListener('click', function(event){
    const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.catalog__btn').forEach(function(tabContent){
        tabContent.classList.remove('catalog__btn_bg')
        })
          document.querySelector(`[data-path="${path}"]`).classList.add('catalog__btn_bg')
          })
    });
}
countryBackgroundСhanges ();


let painterColorСhanges = () => {
  document.querySelectorAll('.accordion__persons').forEach(function(tabsAcardion){
    tabsAcardion.addEventListener('click', function(event){
    const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.accordion__persons').forEach(function(tabContent){
        tabContent.classList.remove('acardinon__persons-color')
        })
          document.querySelector(`[data-path="${path}"]`).classList.add('acardinon__persons-color')
          })
    });
}
painterColorСhanges ();

let scrollGalleryMobile = () => {
    if($(window).width() < 1000){  
       const btn = document.querySelectorAll('.accordion__persons');
       function scrollElem (element){
                $('html').animate({scrollTop: element.offset().top}, 500); 
        }
        $(document).ready(function(){
            $(btn).each(function(){
                $(this).on('click', function(){
                    scrollElem($(".catalog-painter__container"))
                    console.log($(this).text())
                })
            })
        })
          }
}

scrollGalleryMobile();

    
$(document).ready(function(){
    var numToShow = 3;

  if($(window).width() > 1023){
    var numToShow = 3;
  }

  if($(window).width() < 1023 ){
    var numToShow = 2;
  }
  if($(window).width() < 500 ){
    var numToShow = 6;
  }

  var list = $(".events__article-list li");
  var button = $(".events__btn");
  var numInList = list.length;
  list.hide();
if (numInList > numToShow){
    button.show();
  }

  list.slice(0, numToShow).show();

  button.click(function(){
    var showing = list.filter(':visible').length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    var nowShowing = list.filter(':visible').length;
    if(nowShowing >= numInList){
      button.hide();
    }
    
  });
  if($(window).width() < 531 ) {
    button.hide();
}
 

  if($(window).width() < 480){

    var editionButton = $(".editions__btn-mobile");
    $(".editions__inputs:not(:checked)").parent().parent().hide(400);
    $(".editions__inputs:checked").parent().parent().addClass('.editions__inputs_active');
  
    $(".editions__btn-mobile").on("click", function() {
      $(".editions__btn-mobile").toggleClass("editions__btn-mobile_active");
      showList();
    });
  
     function showList(){
      if(editionButton.hasClass("editions__btn-mobile_active")){
         $(".editions__inputs:not(:checked)").parent().parent().show(400);
         $(".editions__inputs").parent().parent().removeClass('.editions__inputs_active');
      }
      else{
          $(".editions__inputs:not(:checked)").parent().parent().hide(400);
          $(".editions__inputs:checked").parent().parent().show(400);
      }
      }
  }

});


    // VALIDATION

    var selector = document.querySelector('input[type="tel"]');
    var im = new Inputmask("+7 (999) 999-99-99");

    im.mask(selector);


    new JustValidate('.callback-contacts',{
    colorWrong: '#ff3300',
    rules: {
      name: {
        required: true,
        minLength:2,
        maxLength:10
      },
      tel: {
        required: true,
        function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
        }
      },
    },
    messages: {
      name: {
        required:"Введите Имя",
        minLength: 'Введите больше двух символов',
        maxLength: 'Слишком большое имя'
      },
      tel: {
        required:"Введите Телефон",
        function:"Введите больше цифр"
      }
    },

  });



// accordion

$( ".accordion" ).accordion({
  collapsible: true,
  animate: 500,
  active:0,
  heightStyle: "content"
});
$ ('.accordion').accordion("refresh");

// Свипер для вкладки проэкты

const swiper = new Swiper(".gallery__swiper-container", {
speed: 800,
  navigation: {
  nextEl: '.gallery__btn-next',
  prevEl: '.gallery__btn-prev',
  },
  pagination:{
    el: '.gallery__pagination',
    type: 'fraction',
  },
  breakpoints: {
    320:{
      slidesPerGroup:1,
      slidesPerView: 1,
    },
    490:{
      slidesPerColumn:2,
      slidesPerGroup:1,
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768:{
      slidesPerColumn:2,
      slidesPerGroup:2,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024:{
      slidesPerColumn:2,
      slidesPerGroup:2,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1300:{
      slidesPerColumn:2,
      slidesPerGroup:2,
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1650:{
      slidesPerColumn:2,
      slidesPerGroup:3,
      slidesPerView: 3,
      spaceBetween: 45,
    }
  },
  watchOverflow:true,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
});




new Swiper(".partners-projects__swiper-container", {
  speed: 800,
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup:3,
  breakpoints: {
    320:{
      slidesPerGroup:1,
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480:{
      slidesPerGroup:1,
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768:{
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween: 7,
    },
    1024:{
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween: 30,
    },
    1300:{
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup:2,

    },
    1650:{
      slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup:3,
    }
  },
  navigation: {
  nextEl: '.partners-projects__next',
  prevEl: '.partners-projects__prev',
  },
  observer:true,
  observeParents:true,
  observeSlideChildren:true,

});

// Свипер для вкладки Издания

new Swiper(".publications-book", {
  speed: 800,
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup:2,
  navigation: {
  nextEl: '.editions__btn-next',
  prevEl: '.editions__btn-prew',
  },
  pagination:{
    el: '.editions__pagination',
    type: 'fraction'
  },
  breakpoints: {
 
    480:{
      slidesPerGroup:2,
      slidesPerView: 2,
      slidesPerColumn:1,
      spaceBetween: 21,
    },
    768:{
      slidesPerGroup:2,
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024:{
      slidesPerGroup:2,
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1300:{

      slidesPerGroup:2,
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1650:{

      slidesPerGroup:3,
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
});

new Swiper(".events__article-list_mobile", {
  slidesPerGroup:1,
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
});

// Свипер для вкладки hero

 new Swiper(".swiper-hero ", {
  //Optional parameters
  loop: true,
  autoplay: {
  delay: 6000,
  },
  effect: 'fade',
  fadeEffect: {
  crossFade: true
  },
});

new Swiper(".events__swiper-container ", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination:{
    el: '.events__pagination',
    type: 'bullets',
    clickable:true,
  },
});

// инпут для вкладки галерея

const element = document.querySelector('.gallery-menu__select');
      new Choices(element, {
        itemSelectText: "",
        searchEnabled: false,
        shouldSort: false,
      });
  });

