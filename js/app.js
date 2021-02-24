(function(e){
    $("#rank_open").hide();
    $("#rank_list").hide();
    $(".popup").fadeOut(0);
})();

$("#rank_close").on("click", function (){
    $("#rank_close").hide();
    $("#rank_open").show();
    $("#rank_list").slideDown();
});

$("#rank_open").on("click", function (){
    $("#rank_open").hide();
    $("#rank_close").show();
    $("#rank_list").slideUp();
});

$('.fiction_tab li').on("click", function(e) {
    $(this).siblings().removeClass('active');
    $(e.target).addClass('active');
})

$('.vote_btn_link').on("click", function (e){
    const id = $(e.target).attr('id');
    $('#' + id).addClass('fin');
    $('#' + id).prop('disabled', true);
})

$('#close_layer').on("click", function(){
    $(".popup").fadeOut(1000);
})

$('.banner').on("click", function(){
    $(".popup").fadeIn(1000);
})
