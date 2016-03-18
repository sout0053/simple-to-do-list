var $input = $('#todo-input');
var $list = $('.list');

$('form').on('submit', function (e) {
  var $li = $('<li>');

  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
  $input.val('');
});

$('ul').on('click', 'li', function (e) {
  $(this).toggleClass('todo-input');
});
