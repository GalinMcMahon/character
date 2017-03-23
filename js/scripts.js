$(document).ready(function() {

  var total = 0;

  $("#Questions").submit(function(event) {

    $("#Questions").fadeToggle(750);
    var valueQ1 = parseInt($("#Q1").val());
    total += valueQ1
        //alert(total);
    var valueQ2 = parseInt($("#Q2").val());
    total += valueQ2
        //alert(total);
    var valueQ3 = parseInt($("#Q3").val());
    total += valueQ3
        //alert(total);
    var valueQ4 = parseInt($("#Q4").val());
    total += valueQ4
        //alert(total);
    var valueQ5 = parseInt($("#Q5").val());
    total += valueQ5
        //alert(total);
    var valueQ6 = parseInt($("#Q6").val());
    total += valueQ6
        //alert(total);
    var valueQ7 = parseInt($("#Q7").val());
    total += valueQ7
        //alert(total);
    event.preventDefault();

    if (total < 4) {
      $("#show1").fadeToggle(750);
    }
    else if (total >= 12) {
      $("#show6").fadeToggle(750);
      return
    }
    else if (total >= 10) {
      $("#show5").fadeToggle(750);
      return
    }
    else if (total >= 8) {
      $("#show4").fadeToggle(750);
      return
    }
    else if (total >= 6) {
      $("#show3").fadeToggle(750);
      return
    }
    else if (total >= 4) {
      $("#show2").fadeToggle(750);
      return
    }
    else if (total >= 2) {
      $("#show1").fadeToggle(750);
      return
    }
  });
});
// var beverage = $("#beverage").val();


// $("#formOne").submit(function(event) {
//   var yourNameInput = $("input#yourName").val();
//   var descInput = $("input#desc").val();
//   var dateInput = $("input#date").val();
//   var timeInput = $("input#time").val();
//
//   $(".yourName").text(yourNameInput);
//   $(".desc").text(descInput);
//   $(".date").text(dateInput);
//   $(".time").text(timeInput);
