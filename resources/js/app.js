window.$ = window.jQuery = require('jquery');
// import "babel-polyfill";
import macy from  'macy';
import slick from 'slick-carousel';
import '../js/vendors/scroll';
import '../js/vendors/map';



class App {
  constructor() {
  }

  macy_params(selector, column,trueOrder, waitForImages, m_x, m_y, br_1200, br_940, br_520, br_400
  ) {
    return{
      container: selector,
      columns: column,
      trueOrder: trueOrder,
      waitForImages: waitForImages,
      margin: {
        x: m_x,
        y: m_y
      },
      breakAt: {
        1200: br_1200,
        940: br_940,
        520: br_520,
        400: br_400
      }
    }
  }
  cut_eny_text(selector, condition,neededlength) {
    let text  = document.querySelectorAll(`.${selector}`);
    for (let i =0; i < text.length; i++) {
      let getText = text[i].textContent;


      text[i].textContent = getText.length > condition    ?
          text[i].textContent.slice(0, neededlength) + '...' :
          text[i].textContent;
    }
  };
  load_more_items(selector,condition) {
    let that = this;
    let counter = () => {
      let visible_items = $(`${selector}:visible`);
      let all_products = $(selector);
      let btn = $('.js-load-more');
    };

    $(selector).slice(0, 5).css('display','block');
    counter();
    $(".js-load-more").on('click', function (e) {
      e.preventDefault();
      setTimeout(() => {
        if ($(`${selector}:hidden`).length == 0) {
          $(this).remove();
          return
        }
      },400);

      $(`${selector}:hidden`).slice(0, condition).css('display','block');
      that.macy_gallery();

      counter();

      $('html,body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });

  };
  show_all_items(selectItem) {
    $(selectItem).css('display','block');
  };
  load_home_gallery_items(){
    this.load_more_items('.gallery-item', 5);
  };
  show_all_popular_home(selector, button) {
    let items = $('.most-popular__wrap .pool-item');
    let btn = $('.js-btn--show-all');
    items.slice(0, 3).css('display','block');

    btn.on('click', () => {
      this.show_all_items(items);
      $('html,body').animate({
        scrollTop: btn.offset().top
      }, 1000);

      if ($(`items:hidden`).length == 0) {
        btn.addClass('hidden');
      }
    });
  };
  show_all_hit_sale(selector, button) {
    let items = $('.hit-sale .product');
    let btn = $('.js-hit-sale');
    items.slice(0, 5).css('display','block');

    btn.on('click', () => {
      this.show_all_items(items);
      if ($(`items:hidden`).length == 0) {
        btn.addClass('hidden');
      }
    });
  };
  show_all_sales(selector, button) {
    let items = $('.all-sales .product');
    let btn = $('.js-all-sales');
    items.slice(0, 5).css('display','block');

    btn.on('click', () => {
      this.show_all_items(items);
      if ($(`items:hidden`).length == 0) {
        btn.addClass('hidden');
      }
    });
  };
  sick_set() {

  };
  slider_powder_color() {
    let img_slider = $('.s-powder-color .slider-white-fon');
    img_slider.slick({
      nextArrow: `<button type="button" class="sliders-nav sliders-nav__next">
        <img src="resources/img/home-page/next.png" alt="">
      </button>`,
      prevArrow: `<button type="button" class="sliders-nav sliders-nav__prev">
        <img src="resources/img/home-page/prev.png" alt="">
      </button>`,
      adaptiveHeight: true,
    });
  };
  slider_powder_gradient() {
    let slider_powder_gradient = $('.slider-gradient');
    slider_powder_gradient.slick({
      nextArrow: `<button type="button" class="sliders-nav sliders-nav__next">
        <img src="resources/img/home-page/next_linear.png" alt="">
      </button>`,
      prevArrow: ` <button type="button" class="sliders-nav sliders-nav__prev">
        <img src="resources/img/home-page/pre_linear.png" alt="">
      </button>`,
      slidesToShow: 1,
      adaptiveHeight: true,
    });
  };
  scroll_why_us() {
    $(".s-why-us__wrap").mCustomScrollbar({
      axis: 'x',
      autoDraggerLength: false,
      scrollInertia:200,
      moveDragger:true,
    });
  };
  select_2() {
    let select  = $('.custom-select');
    select.on('click', function () {
      $(this).toggleClass('active');
    });
    $(document).on('mouseup', (e) =>{
      let p = $(".custom-select");
      if (!p.is(e.target) && p.has(e.target).length === 0) {
        select.removeClass('active');
      }
    });
  };
  mobile_menu() {
    let open = $('.js-menu-open');
    let close = $('.js-menu-close');
    let menu = $('.nav');

    open.on('click', function () {
      menu.removeClass('close');
      menu.addClass('open');
    });
    close.on('click', function () {
      menu.addClass('close');
      menu.removeClass('open');

    });

    $(document).on('mouseup', (e) =>{
      let p = $(".nav");
      if (!p.is(e.target) && p.has(e.target).length === 0) {
        menu.addClass('close');
        menu.removeClass('open');
      }
    });
  };
  toggle_map_order() {
    let btn = $('.js-do-order');
    let form = $('.form-order');
    btn.on('click',function (e) {
      e.preventDefault();
      e.stopPropagation();
      form.toggleClass('shown');
        btn.addClass('hidden');
    });

    $(document).on('mouseup', (e) =>{
      let p = $(".form-order");
      if (!p.is(e.target) && p.has(e.target).length === 0) {
        form.removeClass('shown');
        setTimeout(()=> {
          btn.removeClass('hidden');
        },400);
      }
    });
  };
  call_back_popup() {
    let btn   = $('.js-call-back'),
        popup = $('.call-back-popup'),
        out   = $('.call-back-popup__wrap');

    btn.on('click', function () {
      popup.addClass('open');
    });

    $(document).on('mouseup', (e) =>{
      // let p = $(".form-order");
      if (!out.is(e.target) && out.has(e.target).length === 0) {
        popup.removeClass('open');
      }
    });

  };
  popups_opener(b, s, c, isbody){
    // b = button
    // s = select
    // c = class
    $(b).on('click', function (e) {
      e.preventDefault();
      $(s).addClass(c);
      if(isbody != undefined) {
        $(isbody).addClass('overflow');
      }
    });
  }
  call_popups(){
    this.popups_opener('.js-order-popup', '.order-popup', 'open','body');
    $(document).on('mouseup', (e) =>{
      let a = $('.order-popup__wrap');
      // let p = $(".form-order");
      if (!a.is(e.target) && a.has(e.target).length === 0) {
        $('.order-popup').removeClass('open');
        $('body').removeClass('overflow');
      }
    });
  }
  scale_smth(selector,clas, scaler) {
    let select = $(selector);
    let scaller = $(scaler);
    select.on('click', function (e) {
      if(e) e.preventDefault();
      scaller.find('img').attr('src', $(this).attr('src'));
      scaller.addClass(clas);
    });
    scaller.on('click', function () {
      $(this).removeClass(clas);
    });
  }
  scale_init() {
    this.scale_smth('.sertificate img', 'active', '.scaler');
  }
  init () {
    this.cut_eny_text();
    this.load_home_gallery_items();
    this.show_all_popular_home();
    this.slider_powder_color();
    this.slider_powder_gradient();
    this.show_all_hit_sale();
    this.show_all_sales();
    this.scroll_why_us();
    this.select_2();
    this.mobile_menu();
    this.toggle_map_order();
    this.call_back_popup();
    this.call_popups();
    this.scale_init();
  }

}

let app = new  App();

app.init();


/*dima ttv*/