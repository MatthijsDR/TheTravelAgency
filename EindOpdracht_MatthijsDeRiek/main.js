$(document).ready(function(){
  $('.header').height($(window).height());
})
$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
});