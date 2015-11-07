$(document).ready() {
    $('table course-box').hover {
        function () {
            $('table course-box:nth-child(' + ($(this).index() + 1) + ')').addClass('hover');
        },

        function () {
            $('table course-box:nth-child(' + ($(this).index() + 1) + ')').removeClass('hover');
        }
    }
    //add hover box
}