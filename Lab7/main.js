
$("#button1").click(function(){
    $.ajax({
        url: 'Minsk.txt',
        dataType: 'text',
        
        success: function (data) {
            $("#Minsk").append(data);
            $("#Minsk").toggleClass('Minsk');
        }
      });
      $('#button1').attr("disabled",true);
});

$("#button2").click(function(){
    $.ajax({
        url: 'Moskow.txt',
        dataType: 'text',
        success: function (data) {
            $("#Moscow").append(data);
            $("#Moscow").toggleClass('Moscow');
        },
       
      });
      $('#button2').attr("disabled",true);
    
});

$("#button3").click(function(){
    $.ajax({
        url: 'London.txt',
        dataType: 'text',
        
        success: function (data) {
            $("#London").append(data);
            $("#London").toggleClass('London');
        }
      });
      $('#button3').attr("disabled",true);
});

$("#button4").click(function(){
    $.ajax({
        url: 'Paris.txt',
        dataType: 'text',
        
        success: function (data) {
            $("#Paris").append(data);
            $("#Paris").toggleClass('Paris');
        }
      });
      $('#button4').attr("disabled",true);
});

$("#button5").click(function(){
    $.getJSON( "Minsk.json", function(obj) {
$.each(obj, function(key, value) {
$("#MinskInfo").append("<div>"+"<span class='color'>"+key+"</span>"+value+".</div>");
$("#MinskInfo").toggleClass('infoMinsk');
});

});
$.getJSON( "Moskow.json", function(obj) {
$.each(obj, function(key, value) {
$("#MoscowInfo").append("<div>"+"<span class='color'>"+key+"</span>"+value+"</div>");
$("#MoscowInfo").toggleClass('infoMoscow');
});
});
$.getJSON( "London.json", function(obj) {
$.each(obj, function(key, value) {
$("#LondonInfo").append("<div>"+"<span class='color'>"+key+"</span>"+value+"</div>");
$("#LondonInfo").toggleClass('infoLondon');
});
});
$.getJSON( "Paris.json", function(obj) {
$.each(obj, function(key, value) {
$("#ParisInfo").append("<div>"+"<span class='color'>"+key+"</span>"+value+"</div>");
$("#ParisInfo").toggleClass('infoParis');
});
});
$('#button5').attr("disabled",true);
});

$("#button6").click(function(){

   $("#MinskCompanyInfo").text('Eurotrips - это новый взгляд на молодёжные путешествия. Никаких скучных экскурсий, дружная и интересная компания 18 - 35 летних попутчиков, море веселья и приключений. Наполни жизнь яркими путешествиями!'); // задаем содержимое элементов <p>
    $("#MinskCompanyInfo").toggleClass('info');
    $("#MoscowCompanyInfo").text('Eurotrips - это новый взгляд на молодёжные путешествия. Никаких скучных экскурсий, дружная и интересная компания 18 - 35 летних попутчиков, море веселья и приключений. Наполни жизнь яркими путешествиями!'); // задаем содержимое элементов <p>
     $("#MoscowCompanyInfo").toggleClass('info');
     $("#LondonCompanyInfo").text('Eurotrips - это новый взгляд на молодёжные путешествия. Никаких скучных экскурсий, дружная и интересная компания 18 - 35 летних попутчиков, море веселья и приключений. Наполни жизнь яркими путешествиями!'); // задаем содержимое элементов <p>
     $("#LondonCompanyInfo").toggleClass('info');
     $("#ParisCompanyInfo").text('Eurotrips - это новый взгляд на молодёжные путешествия. Никаких скучных экскурсий, дружная и интересная компания 18 - 35 летних попутчиков, море веселья и приключений. Наполни жизнь яркими путешествиями!'); // задаем содержимое элементов <p>
     $("#ParisCompanyInfo").toggleClass('info');
     $('#MinskImage').load("images.html");
   $('.MoscowImage').load("images2.html");
   $('#LondonImage').load('images3.html');
   $('#ParisImage').load('images4.html');
    $('#button6').attr("disabled",true);
});



  