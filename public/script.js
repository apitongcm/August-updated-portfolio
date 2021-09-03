$(document).ready(function(){
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          window.location.hash = hash;
        });
      }     });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });


      $('#viewc2').click(function(){
          window.location.href="https://github.com/apitongcm/CV-Portfolio";
      })
      $('#view2').click(function(){
          window.location.href="https://apitongcm-cv.netlify.app/";
      })
      $('#viewc1').click(function(){
          window.location.href="https://github.com/apitongcm/personal-portfolio1/tree/master";
      })
      $('#view1').click(function(){
          window.location.href="https://carlportfolio.netlify.app/";
      })
      $('#viewc3').click(function(){
          window.location.href="https://github.com/apitongcm/tip-calculator/tree/master";
      })
      $('#view3').click(function(){
          window.location.href="https://tipcalculate.netlify.app/";
      })
  })
});