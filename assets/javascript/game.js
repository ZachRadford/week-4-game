  


  var target

  var counter

  var numberOptions

  var img1

  $("#playAgain").on("click", function(){
    setupGame();
  })

setupGame();

  function setupGame(){
    target = Math.floor(Math.random() * 100) + 1;;
    $("#guessWhat").text(target);
    counter = 0;
    numOptions();
    imgDraw();
    img1 = $(".crystal-image")
    addclick();
    $("#playAgain").css("display", "none")
    $("#outcome, #score").empty();
  }


function numOptions(){
  numberOptions = [1, 5, 3, 7, 10, 12].sort(function(a, b){
    console.log(a, b);
    return 0.5 - Math.random()
  }); 
}


 function imgDraw(){
    for (var i = 0; i < numberOptions.length; i++) {

   
      var imageCrystal = $("<img>");


      imageCrystal.addClass("crystal-image");

      
      imageCrystal.attr("src", "assets/images/3O8AMde.jpg");

     
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    
      $("#crystals").append(imageCrystal);
    }
  }


  function addclick(){

      img1.on("click", function() {

      
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);

      counter += crystalValue;

      $('#score').text("New score: " + counter);

      if (counter === target) {
        $('#outcome').text("You win!");
        playAgain();
        return;
        
      }

      else if (counter >= target) {
        $('#outcome').text("You lose, nobody likes you, you will have low resale value on your home, low tire pressure, and cluttered drawers.")        
        playAgain();
        return;
      }

    });
  }


    function playAgain(){
        $("#crystals").empty();
        $("#playAgain")
          .css("display", "block")


    }