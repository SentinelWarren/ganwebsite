$(document).ready(function() {

    // Added active class to header nav
    var url = window.location.href;

    $('.site-nav a').filter(function() {
        return this.href == url;
    }).parent().addClass('active');


    // Toggle modal
    $(".modal-trigger").on("click", function() {
        $(".modal").addClass("modal-open");
        $("body").addClass("modal-overlay");
    });


    // Toggle multiselect
    var list = "[searchable-dropdown] ul";

    $(list).hide();

    $(".display-value").on("click", function() {
        $(".display-value .btn").toggleClass("active");
        $(list).toggle();
    });
});