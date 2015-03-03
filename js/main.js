var $form = $('form');
var $input = $('#list-item');
var $theTask = $('.task');


$form.on('submit', function(eventObject) {
    eventObject.preventDefault();
    
    var $theLi = $('<li>').html($input.val());

    var $done =$('<button class="finished">X</button>')
    
$done.on('click', function () {
    $theLi.remove('li');
});

$theTask.on('click', 'li' , function () {
   $(this).addClass('js-done');
});
    
    $theLi.append($done);
    $theTask.append($theLi);
    $input.val('');
    
 });