$(document).ready(function() {
    $('course-list name').hover {

        function () {
            var className = document.getElementsByClassName("name").lastChild();
            var tokenizer = className.split(-);
            className = tokenizer[1]; 

            $('course-list name:nth-child(' + ($(this).index() + 1) + ')').addClass('hover');
            $(".hover").append();
        }
    }
    function () {
        $('course-list name:nth-child(' + ($(this).index() + 1) + ')').removeClass('hover');
    }

     $('.something').mouseover(function() {
        $('.popup p').show();
    });

    $('.something').mouseout(function() {
        $('.popup p').hide();
    });
});