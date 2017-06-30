$(document).ready(function() {
    // When hovering over the social media icons animate
    $('#social1').hover(function() {
        $("#social1").animate({
            paddingTop: "10px"
        }, 100, function() {
            $("#social1").animate({
                paddingTop: "1px"
            }, 100)
        });
    });
    
    $('#social2').hover(function() {
        $("#social2").animate({
            paddingTop: "10px"
        }, 100, function() {
            $("#social2").animate({
                paddingTop: "3px"
            }, 100)
        });
    });
    
     $('#social3').hover(function() {
        $("#social3").animate({
            paddingTop: "10px"
        }, 100, function() {
            $("#social3").animate({
                paddingTop: "3px"
            }, 100)
        });
    });
    
    $('#social4').hover(function() {
        $("#social4").animate({
            paddingTop: "10px"
        }, 100, function() {
            $("#social4").animate({
                paddingTop: "3px"
            }, 100)
        });
    });
    
    
    
    // The alert when a person signs up
    
    $("#signUp").click(function() {
        var name = $("#clientName").val();
        var email = $("#clientEmail").val();
        alert("Hi " + name + " thank you for signing up! We will send an email to " + email + " shortly.");
    });
    
    //$("#signUp").click(function() {
//         $('#thankyouModal').modal('show');
  //      $('#thankyouModal').submit(function(e) {
    //        e.preventDefault(); // don't submit multiple times
      //      this.submit(); // use the native submit method of the form element
        //    $('#thankyouModal').modal('show'); //Open the model
    //    });        var name = $("#clientName").val();
      //  var email = $("#clientEmail").val();
        //document.getElementById("#textBody").innerHTML = "Hi " + name + " thank you for signing up! We will send an email to " + email + " shortly.";
//    });




});


