'use strict';

$.fn.removeClassRegex = function(regex) {
  return $(this).removeClass(function(index, classes) {
    return classes.split(/\s+/).filter(function(c) {
      return regex.test(c);
    }).join(' ');
  });
};

// Screen height adjustments
function setHeight() {
    let body = document.getElementById('body');
    let windowHeight = window.innerHeight;

    body.style.height = windowHeight + 'px';
}

// mobile nav menu
function openNav() {
    document.getElementById("myNav").style.height = "100%";
};
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
};


$(document).on('click', '#myNav a', function (event) {
    closeNav()
});

$(document).ready(function(){
    switch(location.hash) {
        case "#web":
            selectCategoty("web");
            break;
        case "#print":
            selectCategoty("print");
            break;
        case "#branding":
            selectCategoty("branding");
            break;
    }

    function selectCategoty(category) {
        $('.portfolio-entry').addClass('hide');
        $('.portfolio-entry').removeClass('show');
        $('.portfolio-entry.' + category).addClass('show');
        $('.portfolio-entry.' + category).removeClass('hide');

        $('.filter-menu').removeClassRegex(/^category-active-/);
        $('.filter-menu').addClass('category-active-' + category);

        $(".filter-menu").css("transition","0.5s");
    }

    $('.category-button').click(function(event){
        var category = $(this).attr('data-toggle');

        selectCategoty(category);
    })
})
