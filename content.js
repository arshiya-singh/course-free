$(document).ready( function(){
    $('.course-list .name').hover(function() {
            var className = $(this).text();
            var tokenizer = className.split('-');
            className = tokenizer[1]; 
            console.log(className);
            $(this).attr('data-trigger','click');
            $(this).attr('data-container','body');
            searchableName = className.replace(/ |&/g,'').toLowerCase();//name to use in search
            var url = "https://api.coursera.org/api/catalog.v1/courses?fields=video&q=search&query=" + searchableName;
            var $this = $(this);
            console.log(url);
            getSites(url, className, $this);
    });

    function getSites(url, className,variable) {
        $.ajax({
            'url' : url,
            'type' : 'GET',
            'success' : function(data) {
              if (data != null) {
                var entry = "";
                data.elements.forEach(function(element) {
                    entry = entry + '<a target="_tab" href='+"https://youtube.com/watch?v="+element.video+'>'+ element.name + '</a>' + "<br/>";
                });
                variable.popover({title: '<h1><strong>'+className+'</strong></h1>', 
                    content: '<p>'+ entry + '<br/><p>', html: true, placement: 'right'});
                }
            },

            'error' : function() {
                var copyName= className;
                copyName = copyName.trim().split(" ");
                url = "https://api.coursera.org/api/catalog.v1/courses?fields=video&q=search&query=" +copyName[0];
                getSites(url, className, variable);
            }
        });
    }
});