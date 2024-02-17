

// about us page slider 
$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:1,
      itemsDesktop:[1000,2],
      itemsDesktopSmall:[980,1],
      itemsTablet:[768,1],
      pagination:true,
      navigation:false,
      navigationText:["<",">"],
      autoPlay:true
  });
});



// video pop up 
$(document).ready(function () {
  // video2 activation
  $(".btn2").magnificPopup({
    type: "iframe"
  });
});


// sticky header 
$(function(){
  
	createSticky($("#scrollheader"));

});

function createSticky(sticky) {
	
	if (typeof sticky !== "undefined") {

		var	pos = sticky.offset().top + 10,
				win = $(window);
			
		win.on("scroll", function() {
    		win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");      
		});			
	}
}


// scroll top btn 
var btn = $('#scrollbutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});








// next previous 
;
(function($) {
  $.switcher = function(options) {
    var defaultOptions = {
      switcherSelector: '.switcher',
      previousSelector: '.previous',
      nextSelector: '.next',
      elementSelector: '.element',
      sleep: 10
    };

    var options = $.extend(defaultOptions, options || {});

    var $switcher = $(options.switcherSelector);
    var $previousButton = $(options.previousSelector, $switcher);
    var $nextButton = $(options.nextSelector, $switcher);
    var $elements = $(options.elementSelector, $switcher);

    var tid = null;
    var length = $elements.length;
    var pos = 0;

    $nextButton.on('click',function(event) {
      event.preventDefault();
      view('+');
    });

    $previousButton.on('click',function(event) {
      event.preventDefault();
      view('-');
    });

    var init = function() {
      $elements.hide();
      $elements.first().show();

    }

    var view = function(direction) {
      if (direction === '-') {
        pos--;
        if ($elements.get(pos) == null) {
          pos = length - 1;
        }
      } else if (direction === '+') {
        pos++;
        if ($elements.get(pos) == null) {
          pos = 0;
        }
      } else {
        console.log('error on view');
        return;
      }
      resetTimer();
      $elements.hide();
      $($elements.get(pos)).show();
    }

    /**
        Reset Timer
    */
    var resetTimer = function() {
        if (tid != null) {
          clearInterval(tid);
        }
        startTimer();
      }
      /**
         start Timer
      */
    var startTimer = function() {
      tid = setInterval(timer, (options.sleep * 100000));
    }

    function timer() {
      view('+');
    }

    init();
    startTimer();
  }
})($);




// cart 
// Code By Webdevtrick ( https://webdevtrick.com )
/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}

// grid js 
$(".pro_row .fa-th-large").on("click", function () {
  $(".pro_row").removeClass("list-view");
  $(".pro_row .fa-th-large").css({
    color: "#FB2E86",
  });
  $(".pro_row .fa-list").css({
    color: "#151875",
  });
});

$(".pro_row .fa-list").on("click", function () {
  $(".pro_row").addClass("list-view").removeClass("grid-view");
  $(".pro_row .fa-list").css({
    color: "#FB2E86",
  });
  $(".pro_row .fa-th-large").css({
    color: "#151875",
  });
});

// dropdown js 
$(".status_change .dropdown-item").click(function(){
    var getStatusText = $(this).text();
    $(this).closest(".status_dropdown").find(".status__btn").text(getStatusText);
    var generateStatusClass = `${$(this).attr('data-class')}-status`
    $(this).closest(".status_dropdown").attr("data-color", `${generateStatusClass}`);
})


$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel , top-crousel");
    owl.owlCarousel({
      // items: 4,
      margin: 20,
      loop: true,
      // nav: false,
      responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    }
      
    });
  });


//   product gallery 
  $(function() {
    $('.tabs-nav a').click(function() {
  
      // Check for active
      $('.tabs-nav li').removeClass('active');
      $(this).parent().addClass('active');
  
      // Display active tab
      let currentTab = $(this).attr('href');
      $('.tabs-content .tab_boxes').hide();
      $(currentTab).show();
  
      return false;
    });
  });

  $(document).ready(function(){
    $(".clear_cart").click(function(){
      $(".product").remove();
    });
  });



      // Sal Animation js
      sal({
        threshold: 0.1,
        once: true,
      });



      // cart pop up
      function wishList(){
        var list = document.getElementById("toast");
      list.classList.add("show");
      list.innerHTML = '<i class="far fa-heart wish"></i> Product added to List';
      setTimeout(function(){
        list.classList.remove("show");
      },3000);
    }
    
    function addCart(){
          var cart = document.getElementById("toast-cart");
      cart.classList.add("show");
      cart.innerHTML = '<i class="fas fa-shopping-cart cart"></i> Product added to cart';
      setTimeout(function(){
        cart.classList.remove("show");
      }, 3000);
    }


// item per page 
/* 3.Items Per Page */
$(function() {
  $("div.holder").jPages({
      containerID : "itemContainer",
      perPage : 12
  });
  $("select").change(function(){
    var newPerPage = parseInt( $(this).val() );
    $("div.holder").jPages("destroy").jPages({
          containerID   : "itemContainer",
          perPage       : newPerPage
      });
  });
});

//以下jPages.jsの中身
;(function($, window, document, undefined) {

var name = "jPages",
    instance = null,
    defaults = {
      containerID: "",
      first: false,
      previous: "← previous",
      next: "next →",
      last: false,
      links: "numeric", // blank || title
      startPage: 1,
      perPage: 13,
      midRange: 5,
      startRange: 1,
      endRange: 1,
      keyBrowse: false,
      scrollBrowse: false,
      pause: 0,
      clickStop: false,
      delay: 50,
      direction: "forward", // backwards || auto || random ||
      animation: "", // http://daneden.me/animate/ - any entrance animations
      fallback: 400,
      minHeight: true,
      callback: undefined // function( pages, items ) { }
    };


function Plugin(element, options) {
  this.options = $.extend({}, defaults, options);

  this._container = $("#" + this.options.containerID);
  if (!this._container.length) return;

  this.jQwindow = $(window);
  this.jQdocument = $(document);

  this._holder = $(element);
  this._nav = {};

  this._first = $(this.options.first);
  this._previous = $(this.options.previous);
  this._next = $(this.options.next);
  this._last = $(this.options.last);

  /* only visible items! */
  this._items = this._container.children(":visible");
  this._itemsShowing = $([]);
  this._itemsHiding = $([]);

  this._numPages = Math.ceil(this._items.length / this.options.perPage);
  this._currentPageNum = this.options.startPage;

  this._clicked = false;
  this._cssAnimSupport = this.getCSSAnimationSupport();

  this.init();
}

Plugin.prototype = {

  constructor : Plugin,

  getCSSAnimationSupport : function() {
    var animation = false,
        animationstring = 'animation',
        keyframeprefix = '',
        domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
        pfx = '',
        elm = this._container.get(0);

    if (elm.style.animationName) animation = true;

    if (animation === false) {
      for (var i = 0; i < domPrefixes.length; i++) {
        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
          pfx = domPrefixes[i];
          animationstring = pfx + 'Animation';
          keyframeprefix = '-' + pfx.toLowerCase() + '-';
          animation = true;
          break;
        }
      }
    }

    return animation;
  },

  init : function() {
    this.setStyles();
    this.setNav();
    this.paginate(this._currentPageNum);
    this.setMinHeight();
  },

  setStyles : function() {
    var requiredStyles = "<style>" +
    ".jp-invisible { visibility: hidden !important; } " +
    ".jp-hidden { display: none !important; }" +
    "</style>";

    $(requiredStyles).appendTo("head");

    if (this._cssAnimSupport && this.options.animation.length)
      this._items.addClass("animated jp-hidden");
    else this._items.hide();

  },

  setNav : function() {
    var navhtml = this.writeNav();

    this._holder.each(this.bind(function(index, element) {
      var holder = $(element);
      holder.html(navhtml);
      this.cacheNavElements(holder, index);
      this.bindNavHandlers(index);
      this.disableNavSelection(element);
    }, this));

    if (this.options.keyBrowse) this.bindNavKeyBrowse();
    if (this.options.scrollBrowse) this.bindNavScrollBrowse();
  },

  writeNav : function() {
    var i = 1, navhtml;
    navhtml = this.writeBtn("first") + this.writeBtn("previous");

    for (; i <= this._numPages; i++) {
      if (i === 1 && this.options.startRange === 0) navhtml += "<span>...</span>";
      if (i > this.options.startRange && i <= this._numPages - this.options.endRange)
        navhtml += "<a href='#' class='jp-hidden'>";
      else
        navhtml += "<a>";

      switch (this.options.links) {
        case "numeric":
          navhtml += i;
          break;
        case "blank":
          break;
        case "title":
          var title = this._items.eq(i - 1).attr("data-title");
          navhtml += title !== undefined ? title : "";
          break;
      }

      navhtml += "</a>";
      if (i === this.options.startRange || i === this._numPages - this.options.endRange)
        navhtml += "<span>...</span>";
    }
    navhtml += this.writeBtn("next") + this.writeBtn("last") + "</div>";
    return navhtml;
  },

  writeBtn : function(which) {

    return this.options[which] !== false && !$(this["_" + which]).length ?
    "<a class='jp-" + which + "'>" + this.options[which] + "</a>" : "";

  },

  cacheNavElements : function(holder, index) {
    this._nav[index] = {};
    this._nav[index].holder = holder;
    this._nav[index].first = this._first.length ? this._first : this._nav[index].holder.find("a.jp-first");
    this._nav[index].previous = this._previous.length ? this._previous : this._nav[index].holder.find("a.jp-previous");
    this._nav[index].next = this._next.length ? this._next : this._nav[index].holder.find("a.jp-next");
    this._nav[index].last = this._last.length ? this._last : this._nav[index].holder.find("a.jp-last");
    this._nav[index].fstBreak = this._nav[index].holder.find("span:first");
    this._nav[index].lstBreak = this._nav[index].holder.find("span:last");
    this._nav[index].pages = this._nav[index].holder.find("a").not(".jp-first, .jp-previous, .jp-next, .jp-last");
    this._nav[index].permPages =
      this._nav[index].pages.slice(0, this.options.startRange)
        .add(this._nav[index].pages.slice(this._numPages - this.options.endRange, this._numPages));
    this._nav[index].pagesShowing = $([]);
    this._nav[index].currentPage = $([]);
  },

  bindNavHandlers : function(index) {
    var nav = this._nav[index];

    // default nav
    nav.holder.bind("click.jPages", this.bind(function(evt) {
      var newPage = this.getNewPage(nav, $(evt.target));
      if (this.validNewPage(newPage)) {
        this._clicked = true;
        this.paginate(newPage);
      }
      evt.preventDefault();
    }, this));

    // custom first
    if (this._first.length) {
      this._first.bind("click.jPages", this.bind(function() {
        if (this.validNewPage(1)) {
          this._clicked = true;
          this.paginate(1);
        }
      }, this));
    }

    // custom previous
    if (this._previous.length) {
      this._previous.bind("click.jPages", this.bind(function() {
        var newPage = this._currentPageNum - 1;
        if (this.validNewPage(newPage)) {
          this._clicked = true;
          this.paginate(newPage);
        }
      }, this));
    }

    // custom next
    if (this._next.length) {
      this._next.bind("click.jPages", this.bind(function() {
        var newPage = this._currentPageNum + 1;
        if (this.validNewPage(newPage)) {
          this._clicked = true;
          this.paginate(newPage);
        }
      }, this));
    }

    // custom last
    if (this._last.length) {
      this._last.bind("click.jPages", this.bind(function() {
        if (this.validNewPage(this._numPages)) {
          this._clicked = true;
          this.paginate(this._numPages);
        }
      }, this));
    }

  },

  disableNavSelection : function(element) {
    if (typeof element.onselectstart != "undefined")
      element.onselectstart = function() {
        return false;
      };
    else if (typeof element.style.MozUserSelect != "undefined")
      element.style.MozUserSelect = "none";
    else
      element.onmousedown = function() {
        return false;
      };
  },

  bindNavKeyBrowse : function() {
    this.jQdocument.bind("keydown.jPages", this.bind(function(evt) {
      var target = evt.target.nodeName.toLowerCase();
      if (this.elemScrolledIntoView() && target !== "input" && target != "textarea") {
        var newPage = this._currentPageNum;

        if (evt.which == 37) newPage = this._currentPageNum - 1;
        if (evt.which == 39) newPage = this._currentPageNum + 1;

        if (this.validNewPage(newPage)) {
          this._clicked = true;
          this.paginate(newPage);
        }
      }
    }, this));
  },

  elemScrolledIntoView : function() {
    var docViewTop, docViewBottom, elemTop, elemBottom;
    docViewTop = this.jQwindow.scrollTop();
    docViewBottom = docViewTop + this.jQwindow.height();
    elemTop = this._container.offset().top;
    elemBottom = elemTop + this._container.height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));

    // comment above and uncomment below if you want keyBrowse to happen
    // only when container is completely visible in the page
    /*return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) &&
              (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );*/
  },

  bindNavScrollBrowse : function() {
    this._container.bind("mousewheel.jPages DOMMouseScroll.jPages", this.bind(function(evt) {
      var newPage = (evt.originalEvent.wheelDelta || -evt.originalEvent.detail) > 0 ?
      (this._currentPageNum - 1) : (this._currentPageNum + 1);
      if (this.validNewPage(newPage)) {
        this._clicked = true;
        this.paginate(newPage);
      }
      evt.preventDefault();
      return false;
    }, this));
  },

  getNewPage : function(nav, target) {
    if (target.is(nav.currentPage)) return this._currentPageNum;
    if (target.is(nav.pages)) return nav.pages.index(target) + 1;
    if (target.is(nav.first)) return 1;
    if (target.is(nav.last)) return this._numPages;
    if (target.is(nav.previous)) return nav.pages.index(nav.currentPage);
    if (target.is(nav.next)) return nav.pages.index(nav.currentPage) + 2;
  },

  validNewPage : function(newPage) {
    return newPage !== this._currentPageNum && newPage > 0 && newPage <= this._numPages;
  },

  paginate : function(page) {
    var itemRange, pageInterval;
    itemRange = this.updateItems(page);
    pageInterval = this.updatePages(page);
    this._currentPageNum = page;
    if ($.isFunction(this.options.callback))
      this.callback(page, itemRange, pageInterval);

    this.updatePause();
  },

  updateItems : function(page) {
    var range = this.getItemRange(page);
    this._itemsHiding = this._itemsShowing;
    this._itemsShowing = this._items.slice(range.start, range.end);
    if (this._cssAnimSupport && this.options.animation.length) this.cssAnimations(page);
    else this.jQAnimations(page);
    return range;
  },

  getItemRange : function(page) {
    var range = {};
    range.start = (page - 1) * this.options.perPage;
    range.end = range.start + this.options.perPage;
    if (range.end > this._items.length) range.end = this._items.length;
    return range;
  },

  cssAnimations : function(page) {
    clearInterval(this._delay);

    this._itemsHiding
      .removeClass(this.options.animation + " jp-invisible")
      .addClass("jp-hidden");

    this._itemsShowing
      .removeClass("jp-hidden")
      .addClass("jp-invisible");

    this._itemsOriented = this.getDirectedItems(page);
    this._index = 0;

    this._delay = setInterval(this.bind(function() {
      if (this._index === this._itemsOriented.length) clearInterval(this._delay);
      else {
        this._itemsOriented
        .eq(this._index)
        .removeClass("jp-invisible")
        .addClass(this.options.animation);
      }
      this._index = this._index + 1;
    }, this), this.options.delay);
  },

  jQAnimations : function(page) {
    clearInterval(this._delay);
    this._itemsHiding.addClass("jp-hidden");
    this._itemsShowing.fadeTo(0, 0).removeClass("jp-hidden");
    this._itemsOriented = this.getDirectedItems(page);
    this._index = 0;
    this._delay = setInterval(this.bind(function() {
      if (this._index === this._itemsOriented.length) clearInterval(this._delay);
      else {
        this._itemsOriented
        .eq(this._index)
        .fadeTo(this.options.fallback, 1);
      }
      this._index = this._index + 1;
    }, this), this.options.delay);
  },

  getDirectedItems : function(page) {
    var itemsToShow;

    switch (this.options.direction) {
      case "backwards":
        itemsToShow = $(this._itemsShowing.get().reverse());
        break;
      case "random":
        itemsToShow = $(this._itemsShowing.get().sort(function() {
          return (Math.round(Math.random()) - 0.5);
        }));
        break;
      case "auto":
        itemsToShow = page >= this._currentPageNum ?
        this._itemsShowing : $(this._itemsShowing.get().reverse());
        break;
      default:
        itemsToShow = this._itemsShowing;
    }

    return itemsToShow;
  },

  updatePages : function(page) {
    var interval, index, nav;
    interval = this.getInterval(page);
    for (index in this._nav) {
      if (this._nav.hasOwnProperty(index)) {
        nav = this._nav[index];
        this.updateBtns(nav, page);
        this.updateCurrentPage(nav, page);
        this.updatePagesShowing(nav, interval);
        this.updateBreaks(nav, interval);
      }
    }
    return interval;
  },

  getInterval : function(page) {
    var neHalf, upperLimit, start, end;
    neHalf = Math.ceil(this.options.midRange / 2);
    upperLimit = this._numPages - this.options.midRange;
    start = page > neHalf ? Math.max(Math.min(page - neHalf, upperLimit), 0) : 0;
    end = page > neHalf ?
      Math.min(page + neHalf - (this.options.midRange % 2 > 0 ? 1 : 0), this._numPages) :
      Math.min(this.options.midRange, this._numPages);
    return {start: start,end: end};
  },

  updateBtns : function(nav, page) {
    if (page === 1) {
      nav.first.addClass("jp-disabled");
      nav.previous.addClass("jp-disabled");
    }
    if (page === this._numPages) {
      nav.next.addClass("jp-disabled");
      nav.last.addClass("jp-disabled");
    }
    if (this._currentPageNum === 1 && page > 1) {
      nav.first.removeClass("jp-disabled");
      nav.previous.removeClass("jp-disabled");
    }
    if (this._currentPageNum === this._numPages && page < this._numPages) {
      nav.next.removeClass("jp-disabled");
      nav.last.removeClass("jp-disabled");
    }
  },

  updateCurrentPage : function(nav, page) {
    nav.currentPage.removeClass("jp-current");
    nav.currentPage = nav.pages.eq(page - 1).addClass("jp-current");
  },

  updatePagesShowing : function(nav, interval) {
    var newRange = nav.pages.slice(interval.start, interval.end).not(nav.permPages);
    nav.pagesShowing.not(newRange).addClass("jp-hidden");
    newRange.not(nav.pagesShowing).removeClass("jp-hidden");
    nav.pagesShowing = newRange;
  },

  updateBreaks : function(nav, interval) {
    if (
      interval.start > this.options.startRange ||
      (this.options.startRange === 0 && interval.start > 0)
    ) nav.fstBreak.removeClass("jp-hidden");
    else nav.fstBreak.addClass("jp-hidden");

    if (interval.end < this._numPages - this.options.endRange) nav.lstBreak.removeClass("jp-hidden");
    else nav.lstBreak.addClass("jp-hidden");
  },

  callback : function(page, itemRange, pageInterval) {
    var pages = {
          current: page,
          interval: pageInterval,
          count: this._numPages
        },
        items = {
          showing: this._itemsShowing,
          oncoming: this._items.slice(itemRange.start + this.options.perPage, itemRange.end + this.options.perPage),
          range: itemRange,
          count: this._items.length
        };

    pages.interval.start = pages.interval.start + 1;
    items.range.start = items.range.start + 1;
    this.options.callback(pages, items);
  },

  updatePause : function() {
    if (this.options.pause && this._numPages > 1) {
      clearTimeout(this._pause);
      if (this.options.clickStop && this._clicked) return;
      else {
        this._pause = setTimeout(this.bind(function() {
          this.paginate(this._currentPageNum !== this._numPages ? this._currentPageNum + 1 : 1);
        }, this), this.options.pause);
      }
    }
  },

  setMinHeight : function() {
    if (this.options.minHeight && !this._container.is("table, tbody")) {
      setTimeout(this.bind(function() {
        this._container.css({ "min-height": this._container.css("height") });
      }, this), 1000);
    }
  },

  bind : function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  },

  destroy : function() {
    this.jQdocument.unbind("keydown.jPages");
    this._container.unbind("mousewheel.jPages DOMMouseScroll.jPages");

    if (this.options.minHeight) this._container.css("min-height", "");
    if (this._cssAnimSupport && this.options.animation.length)
      this._items.removeClass("animated jp-hidden jp-invisible " + this.options.animation);
    else this._items.removeClass("jp-hidden").fadeTo(0, 1);
    this._holder.unbind("click.jPages").empty();
  }

};

$.fn[name] = function(arg) {
  var type = $.type(arg);

  if (type === "object") {
    if (this.length && !$.data(this, name)) {
      instance = new Plugin(this, arg);
      this.each(function() {
        $.data(this, name, instance);
      });
    }
    return this;
  }

  if (type === "string" && arg === "destroy") {
    instance.destroy();
    this.each(function() {
      $.removeData(this, name);
    });
    return this;
  }

  if (type === 'number' && arg % 1 === 0) {
    if (instance.validNewPage(arg)) instance.paginate(arg);
    return this;
  }

  return this;
};

})(jQuery, window, document);



// cookie bar 

function hideCookies() {
  var hideCookie = Cookies.get('hideCookie');

  if (hideCookie !== undefined) {
      $('.cookie-info').css('display','none');
      $('.title h1').html('<span>Cookie</span> info panel (is hidden)');
  } else {
      $('.cookie-info').css('display','block');
  }
}


$(document).ready(function () {
  $('.cookie-accept').bind('click', function() {
      Cookies.set('hideCookie', 'true', { expires: 365 });
      $('.cookie-info').fadeOut('slow');
  });

});

$(window).load(function () {
  hideCookies();
});



// google captcha 
if (typeof jQuery == "undefined" || !window.jQuery) {
  var hs = document.createElement("script");
  hs.type = "text/javascript";
  hs.async = true;
  hs.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
  document.getElementsByTagName("head")[0].appendChild(hs);
  //document.getElementsByTagName("body")[0].appendChild(hs);
  document.head.appendChild(hs);
  //document.body.appendChild(hs);
}

if (location.host == "cdpn.io") {
  console.clear();
}
const g_site_key = "6LdSg5gUAAAAAKrfCL7OkHCFrS3m09xoWyvFKieF";
(function () {
  submitDisable();
  download_script(
    "https://www.google.com/recaptcha/api.js?render=" +
      g_site_key +
      "&render=explicit",
    function () {
      grecaptcha.ready(function () {
        gexec();
      });
    }
  );
})();

function gexec() {
  //also refresh function
  grecaptcha.execute(g_site_key, { action: "homepage" }).then(function (token) {
    if (location.host == "cdpn.io") {
      var pr = $("pre#token");
      if (pr.length) {
        pr.text(token);
      }
    }
    submitEnable();
    recaptcha_insert_token(token);
  });
}

function recaptcha_insert_token(token) {
  if (typeof jQuery == "undefined") {
    console.log("JQuery Not Loaded");
  } else {
    var f = $("form"),
      fg = f.find('[name="g-recaptcha-response"]');
    if (fg.length === 0) {
      $(
        '<input type="hidden" readonly value="' +
          token +
          '" name="g-recaptcha-response">'
      ).appendTo(f);
    } else {
      fg.val(token);
    }
  }
}

function submitEnable() {
  var woo_buttons = [
    ".woocommerce-form-login button",
    ".woocommerce-form-register button",
    ".woocommerce-ResetPassword button"
  ];
  if (typeof jQuery != "undefined") {
    $.each(woo_buttons, function (i, btn) {
      $(btn).removeAttr("disabled");
    });
    $('[type="submit"], #wp-submit, #submit').prop("disabled", false);
  } else {
    console.log("jquery not loaded");
  }
}

function submitDisable() {
  var woo_buttons = [
    ".woocommerce-form-login button",
    ".woocommerce-form-register button",
    ".woocommerce-ResetPassword button"
  ];
  if (typeof jQuery == "undefined") {
    console.log("jQuery not loaded");
  } else {
    jQuery.each(woo_buttons, function (i, btn) {
      jQuery(btn).attr("disabled", "disabled");
    });
    $('[type="submit"], #wp-submit, #submit').prop("disabled", true);
  }
}

function download_script(url, success = false) {
  var script = document.createElement("script");
  script.src = url;
  var head = document.getElementsByTagName("head")[0],
    done = false;
  if (success) {
    script.onload = script.onreadystatechange = function () {
      if (
        !done &&
        (!this.readyState ||
          this.readyState == "loaded" ||
          this.readyState == "complete")
      ) {
        done = true;
        success();
        script.onload = script.onreadystatechange = null;
        head.removeChild(script);
      }
    };
  }
  head.appendChild(script);
}


