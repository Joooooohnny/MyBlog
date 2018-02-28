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
       if(minute<10)
       {
           minute='0'+minute;
       }

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
        // 显示 focus to-do 页面
        $('.tomato').css("display","block");
        $("#audio-selector").css("display","flex");
      });
        // 回到主页面
    $('.back').click(function() {
        
          $(this).removeClass('show');
          $('.ball').removeClass('expand');
          $('.tomato').css("display","none");
          $("#audio-selector").css("display","none");        
          $('.container').addClass('shake').delay(500).queue(function(next) {
              $(this).removeClass('shake');
              next();
          });
      });
      
   setTimeout(showpanel, 1800);
   let $audio = $("audio"), 
       $theme = $(".theme");

   function audioSelect(e){
    $theme.removeClass("selected");
    $(e.target).addClass("selected");
    switch(e.target.id){
      case "forest": $audio.attr("src", "./mp3/forest.mp3"); break;
      case "ocean" : $audio.attr("src", "./mp3/ocean.mp3");  break;
      case "rainy" : $audio.attr("src", "./mp3/rain.mp3");   break;
      case "peace" : $audio.attr("src", "./mp3/peace.mp3");  break;
      case "cafe"  : $audio.attr("src", "./mp3/cafe.mp3");   break;
    }
  }
     $("#forest").click(function(){
        $audio.attr("src", "./mp3/forest.mp3");
        $audio.animate({volume: 1}, 1000);
     })

  init();
//   初始化背景音乐的音量
    function init(){
      $audio.prop("volume", 0);
      $theme.click(e => audioSelect(e));
    }

    

 
  });