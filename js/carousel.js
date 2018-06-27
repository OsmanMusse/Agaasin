$(document).ready(function(){
$('.slides').slick({
  dots : true,
  arrows :false,
  mobileFirst : true,
  nextArrow : '<i class="fas fa-caret-left"></i>',
  prevArrow : '<i class="fas fa-caret-right"></i>',
  responsive : [
    {
    breakpoint: 575,
    settings:{
      arrows : true,
      dots : true,
    },



  }]
});




});
