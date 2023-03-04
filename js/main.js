var content = $('.contents');

$('button[data-filter]').on('click', (e)=>
{
  var filter = $(e.currentTarget).attr('data-filter');
  $('li', content).show();
  if (filter) $('li:not(.' + filter.split(' ').join(', .') + ')', content).hide()
});

function lightmode() {
  const body = document.body
  const wasLightmode = localStorage.getItem('lightmode') === 'true'

  localStorage.setItem('lightmode', !wasLightmode)
  body.classList.toggle('wrapper-light', !wasLightmode)
}

document.querySelector('.theme').addEventListener('click', lightmode)

function onload() {
  document.body.classList.toggle('wrapper-light', localStorage.getItem('lightmode') === 'true')
}
document.addEventListener('DOMContentLoaded', onload)
