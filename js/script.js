$('#ham-menu').click(function(){
    $(".sidebar").addClass("small-view");
    $(".header").addClass("small-header"); 
    $(".big-logo").hide();
    $(".small-logo").show();
    $(this).hide();
    $('.head-menu button').show();
})
$('.head-menu button').click(function(){
    $(".sidebar").removeClass("small-view");
    $(".header").removeClass("small-header"); 
    $(".big-logo").show();
    $(".small-logo").hide();
    $("#ham-menu").show()
    $(this).hide();
});
$(window).resize(function(){
    if ( $(window).width() < 500 ) {
        $(".sidebar").addClass("small-view");
        $(".header").addClass("small-header"); 
        $(".big-logo").hide();
        $(".small-logo").show();
        $('#ham-menu').hide();
        $('.head-menu button').show();
    }
  });