(function() {

  $(".about_body, .skills_body").hide();
  $(".about, .skill").removeClass("active");

  $(".about, .skills").on("click", function () {
    $(".about_body, .skills_body").hide();
    $(".about, .skills").removeClass("active");        

    if ($(this).attr("class") == "about")
    {
      $(".about_body").fadeIn();
      $(".about").addClass("active");
    }
    else
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
  });

  $(".title").on("click", function() {
    $(".about_body, .skills_body").hide();
    $(".about, .skill").removeClass("active");
  })


})();
