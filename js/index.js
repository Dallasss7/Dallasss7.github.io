(function() {

  $(".about_body, .skills_body, .easter").hide();
  $(".about, .skill").removeClass("active");

  $(".about, .skills, .easter_button").on("click", function () {
    $(".about_body, .skills_body, .easter").hide();
    $(".about, .skills").removeClass("active");        

    if ($(this).attr("class") == "about")
    {
      $(".about_body").fadeIn();
      $(".about").addClass("active");
    }
    else if($(this).attr("class") == "skills")
    {
      $(".skills_body").fadeIn();
      $(".skills").addClass("active");

      $('.chart').easyPieChart({
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'butt',
        barColor: '#73b14b',
        trackColor: '#C1C1C1' ,
        size: 90,
        animate: 800
      });
    }
    else
    {
      $('.easter').fadeIn();
    }
  });

  $(".title").on("click", function() {
    $(".about_body, .skills_body, .easter").hide();
    $(".about, .skill").removeClass("active");
  })


})();
