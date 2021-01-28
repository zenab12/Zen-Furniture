$(document).ready(function () {
//create slider

$('.indicators li').on('click', function () {
        
    $(this).addClass('active').siblings().removeClass('active');
    
    $("." +  $(this).data('img')).addClass('active').siblings().removeClass('active');

   $('.' + $(this).data('div')).removeClass('hiden').siblings().addClass('hiden');
});

$('.slider .fa-chevron-right').on('click', function () {
    
    if ($('.indicators li.active').is(':last-child')) {
        $('.indicators li').eq(0).click();
    } else {
         
        $('.indicators .active').next().click();
    }
    
});
$('.slider .fa-chevron-left').on('click', function () {
    
    
    if ($('.indicators li.active').is(':first-child')) {
        $('.indicators li').eq(2).click();
    } else {
         
        $('.indicators li.active').prev().click();
    }
  
});

$('.indicators .icons .fa-chevron-right').on('click', function () {
    
    if ($('.indicators li.active').is(':last-child')) {
        $('.indicators li').eq(0).click();
    } else {
         
        $('.indicators li.active').next().click();
    }
    
});
$('.indicators .icons .fa-chevron-left').on('click', function () {
    
    
    if ($('.indicators li.active').is(':first-child')) {
        $('.indicators li').eq(3).click();
    } else {
         
        $('.indicators li.active').prev().click();
    }
  
});


$(".currancy").click(function () {


    $('.currancyOption').slideToggle('slow');
});

$(".nav3 li.shop").click(function () {


    $('.nav3 .shop .collection').slideToggle().css('display','flex');
}
);



function blinkwarning() {
    $('.nav1 h3').fadeOut(3000, function () {
        $(this).fadeIn(1000);
        blinkwarning();
    });
}
blinkwarning();



$('i.wish').hover(function () {

    $(this).toggleClass('far').toggleClass('fas');
});



$(".pound").on('click',function(){
    for (var i=0;i< $('.price span.Price').length;i++){
        var pound = $('.price span.Price')[i];
    
   pound.innerHTML = parseInt(pound.getAttribute('value')) * (15.72);
   console.log(pound);

   var symbol =  $('.price span.Dollar')[i];
       symbol.innerHTML= "E";
    }
    
});

$(".dollar").on('click',function(){
    for (var i=0;i< $('.price span.Price').length;i++){
        var pound = $('.price span.Price')[i];
    
   pound.innerHTML = parseInt(pound.getAttribute('value')) * (1);
   console.log(pound);

   var symbol =  $('.price span.Dollar')[i];
       symbol.innerHTML= "$";

    }});

    $(".euro").on('click',function(){
        for (var i=0;i< $('.price span.Price').length;i++){
            var pound = $('.price span.Price')[i];
        
       pound.innerHTML = parseInt(pound.getAttribute('value')) * (19.42);
       console.log(pound);

       var symbol =  $('.price span.Dollar')[i];
       symbol.innerHTML= "Y";

   
        }
    
});


// $('.productItem .colors li').on('click', function () {
        
//     $(this).addClass('active').siblings().removeClass('active').parent().siblings().removeClass('active');
    
//     $("." + $(this).data('color')).addClass('active').siblings().removeClass('active')
// });

$(".fa-list").on('click',function(){
    
   $('.livingroom').addClass('someFurniture');
   $(".AccentChairs").addClass('someFurniture');
    $(".AccentChairs > div").removeClass('featuredProducts').addClass('randomProducts');
    $("p.random").removeClass('hidden');

    });

$(".fa-th").on('click',function(){
    
    $('.livingroom').removeClass('someFurniture');
    $(".AccentChairs").removeClass('someFurniture');
     $(".AccentChairs > div").removeClass('randomProducts').addClass('featuredProducts');
     $("p.random").addClass('hidden');
 
});

$(".productItem .productDetail .colors li").on('click', function (e) {
    $(e.target).addClass('active').siblings().removeClass('active');

    var colorClass = "img." + $(e.target).data('color');

    var imgsContainer = $(e.target).parent().parent().parent().parent().children('.productimg').children();

    imgsContainer.children(colorClass).addClass('active').siblings().removeClass('active');             
});

/*  
let arr = [];
     for (var i=3;i< $('.productItem').length;i++){
         product =$(".productItem")[i];
         arr.push(product);
     }

     console.log(arr[0]);
    arr[0].children.find('.colors').find('li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active').parent().siblings().removeClass('active');
    $("." + $(this).data('color')).addClass('active').siblings().removeClass('active').parent().siblings().removeClass('active');
         
 })
 
 

    


 li.addEventListener('click',function(){
    for (var j=0;j< arr.length;j++){
        prod =arr[j];
    this.addClass('active').siblings().removeClass('active');

    document.querySelectorAll((`${prod} img` + "." + this.data('color'))).addClass('active').siblings().removeClass('active')
    }
}
 */




 /*
var table = document.getElementById('table');
var tbody = document.getElementById('tbody');
 $(".productIcon .fa-cart-arrow-down").one('click',function(){
    var tr= $("<tr></tr>");
    var td = $('<td></td>');
    var img = $(this).parents('.productItem').find('img.active').attr('src');
    var newImg = $('<img>').attr('src',img);
    var imgdiv = $('<div class="img"> </div>')
    tbody.append(tr);
    tr.append(td);
    td.append(imgdiv);
    imgdiv.append(newImg);
    
    
    var newName = $('<td></td>');
    var td2 = $(this).parents('.productimg').siblings('.productDetail').find('p').text();
    tr.append(newName);
    newName.append(td2);
    

      
     

    function calcAll(){
        var count = $('.cartCounter').text($("table tr").length);
    }

    
 
 });*/

 


 $('.Sign .links li').on('click', function () {
        
    $(this).removeClass('active').siblings().addClass('active');
    
    $("." +  $(this).data('class')).removeClass('hiden').siblings().addClass('hiden');
});



$(window).scroll(function () {

  
    if($(window).scrollTop() >= 1000) {
      
        
        $('.scrollTop').fadeIn(1000);
    } else {
        $('.scrollTop').fadeOut(1000);
       

    }
    
});


$('.scrollTop').on('click',function(e){
e.preventDefault();
$('html,body').animate({
    scrollTop: 0
},2000);
});

$(".bigAside i").on('click',function(){

    $(this).toggleClass('.fa-chevron-up');
    $("." + $(this).data('type')).toggleClass('hidden');
    $(this).siblings('h4').fadeIn(200)
})



})
