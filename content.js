$(document).ready( function(){
    $('.course-list .name').hover(function() {
            var className = $(this).text();
            var tokenizer = className.split('-');
            className = tokenizer[1]; 
            console.log(className);
            $(this).attr('data-trigger','hover');
            $(this).attr('data-container','body');
            searchableName = className.replace(/ /g,'').toLowerCase();//name to use in search
            $(this).popover({title: '<h1><strong>'+className+'</strong></h1>',
                content: '<h2>'+ +'</h2>', html: true, placement: 'right'});
    })
});