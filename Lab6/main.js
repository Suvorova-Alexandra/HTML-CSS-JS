$(document).ready(function(){
  
    $('#button1b').click(function(){
        $('#id1:even').toggleClass('red');
      $('#id3:even').toggleClass('red');
       $('#id5:even').toggleClass('red');
       $('#id2:even').toggleClass('classNew');
      $('#id4:even').toggleClass('classNew');
      $('#id6:even').toggleClass('classNew');
});
$('#but2').click(function(){
    
  $('#button1b').attr('disabled', true);
  $('#button1b:even').toggleClass('disabled');
  $('.images').fadeToggle(2500);
});

})