var content = $('.contents');

$('button[data-filter]').on('click', (e)=>
{
  var filter = $(e.currentTarget).attr('data-filter');
  $('li', content).show();
  if (filter) $('li:not(.' + filter.split(' ').join(', .') + ')', content).hide()
});