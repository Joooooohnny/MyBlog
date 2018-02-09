$(document).ready(function() {
   
    function showDate(){
        var d=new Date();
        var day=d.getDate();
        var month=d.getMonth() + 1;
        var year=d.getFullYear();
     
        return year+'/'+month+'/'+day;
    }

    function showTime(){
        var d=new Date();
        var hour=d.getHours();
        var minute=d.getMinutes();
       

        return hour+':'+minute;

    }
    $("#time").text(showTime());
    $("#date").text(showDate());

    setInterval(function(){
        $("#time").text(showTime())
    },1000);

    function showpanel() {

        $('.container').removeClass('startup');
        $('.ball').addClass('active').delay(2000).queue(function(next) {
              $(this).removeClass('active');
              next();
          });
       }
      
    $('.ball').click(function() {
        $(this).toggleClass('active');
      });
  
  
    $('i').click(function() {
        $('.ball').addClass('expand');
        $('.back').addClass('show');
      });
  
    $('.back').click(function() {
          $(this).removeClass('show');
          $('.ball').removeClass('expand');
          $('.container').addClass('shake').delay(500).queue(function(next) {
              $(this).removeClass('shake');
              next();
          });
      });
      
   setTimeout(showpanel, 1800);
  });