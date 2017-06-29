$(document).ready(function() {

    /*$("#social").click(function() {
        $(".col-sm-6").animate({
            height: "300px"*/
            
            $("#social").hover(function();
            {$(this).css("background-color:rgb(255,255,255)");
            } , function(){
              $(this).css("background-color:rgb(1,2,255)");
            }
              
            
        );
        
         $("#signUp").click(function() {
             alert("Hi " + name + "thank you for signing up! We will send an email to " + email + " shortly.");
         });

        
    });

   

var name = $("#clientName").val();
var email = $("#clientEmail").val();
