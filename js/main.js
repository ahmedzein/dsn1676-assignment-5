var $form = $('form');
var $input = $('#list-item');
var $theTask = $('.task');
var $currentTask = $('#task');

$form.on('submit', function(eventObject) {
    eventObject.preventDefault();
    
    var $theH1 = $('<h1>');
    $theH1.html($input.val());
    
    $theTask.append($theH1);
    
    $input.val('');
});

$theTask.on('click', 'h1' , function () {
   $(this).addClass('js-highlight');
});