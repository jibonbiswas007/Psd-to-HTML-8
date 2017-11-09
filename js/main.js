$(document).ready(function(){
    
    $(".product-list").masonry();
    
    $('.hompage-slide').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    navText:["<i class='fa fa-long-arrow-left'><i/>", "<i class='fa fa-long-arrow-right'><i/>"],
    smartSpeed:2000,
    animateIn:'fadeInRight',
    animateOut:'flipOutX',
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
    
    $('.product-promotion').owlCarousel({
    loop:true,
    nav:false,
    smartSpeed:2000,
    animateIn:'lightSpeedIn',
    animateOut:'zoomOut',
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
    $(".menu-trigger").on("click", function(){
        $(".offcanvas-menu, .offcanvas-overley").addClass("active");
        
    });
    
    $(".menu-close, .offcanvas-overley").on("click", function(){
        $(".offcanvas-menu, .offcanvas-overley").removeClass("active");
        
    });
    
    $(".search-trigger").on("click", function(){
        $(".search-text, .offcanvas-overley, .search-close").addClass("active");
        
    });
    
    $(".offcanvas-overley, .search-text a, .search-close").on("click", function(){
        $(".search-text, .offcanvas-overley").removeClass("active");
        
    });
    
});