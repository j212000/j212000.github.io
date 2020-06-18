


// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
var x = null;
var y = null;
var email = "example@email.com";
var cc = "xxx-xxx-xxx";
var cc2 = "xxxx xxxx xxxx xxxx";

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function book(){
  var dateInput = document.getElementById("dateTimeInput").value;
  var ccInput = document.getElementById("credit").value;
  var emailInput = document.getElementById("email").value;
  console.log(dateInput);
  console.log(ccInput);
  console.log(emailInput);
  console.log(y);
  console.log(x);
  if((dateInput == "" || dateInput.length == 0 || dateInput == null)||(ccInput == "" || ccInput.length == 0 || ccInput == null)||(emailInput == "" || emailInput.length == 0 || emailInput == null)||(y==null)||(x==null)){
    document.getElementById("message").innerHTML = "Complete all fields";
    console.log(cc);
  }

  else if(ccInput == cc || emailInput == email || ccInput == cc2){
    document.getElementById("message").innerHTML = "Credit Card or Email cannot have default values";
  }

  else{
    document.getElementById("message").innerHTML = "Appointment Booked";
  }
}

function validateCard(txtCard) {
    var a = document.getElementById(txtCard).value

    console.log(a);
    var b = String(a);
    var strip = b.replace(/\s/g,'');
    console.log(strip);
    var filter = /^\d{16}$/;
    if (filter.test(strip)) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(txtEmail) {
    var a = document.getElementById(txtEmail).value

    console.log(a);
    var b = String(a);
    var strip = b.replace(/\s/g,'');
    console.log(strip);
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (filter.test(strip)) {
        return true;
    }
    else {
        return false;
    }
}

function validateDate(txtDate) {
    var a = document.getElementById(txtDate).value

    console.log(a);
    var b = String(a);
    var strip = b.replace(/\s/g,'');
    console.log(strip);
    var filter = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    if (filter.test(strip)) {
        return true;
    }
    else {
        return false;
    }
}

function validateServ(serv){
  var b = serv;
  console.log(b);
  if(b=="KidsHaircut"){
    y = 5;
  }
  else if(b=="AdultsHaircut"){
    y = 4;
  }
  else if(b=="Cut&Shampoo"){
    y = 3;
  }
  else if(b=="SpeicalService"){
    y=2;
  }
  else if(b=="All-Over"){
    y=1;
  }
  else if(b=="Highlights"){
    y=0;
  }

  return y;
}

function validateBarber(mech){
  var a = mech;
  console.log(a);
  if (a=="felixMr.Clean"){
    x = 2;
  }
  else if(a == "Skythestar"){
    x = 1;
  }
  else if(a == "Matt"){
    x = 0;
  }

  console.log(x);

  return x;


}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
var felixDates = [1,2,4];
var skyDates = [0,2,5];
var mattDates = [1,3];
const setDateFormat = "mm/dd/yy";




function disableDates(date) {

    if(x ==2){
      return [date.getDay()!= 0 && date.getDay()!= 2 && date.getDay()!=5];
    }
    else if(x==1){
      return [date.getDay()!= 0 && date.getDay()!= 4];
    }
    else if(x==0){
      return [date.getDay()!= 1 && date.getDay()!= 3 && date.getDay()!=6];
    }else{
      return[true];
    }





}




// HERE, JQuery "LISTENING" starts
$(document).ready(function(){


    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateTimeInput" ).datepicker(
        {

            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            // beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates

        }
    );




    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put

    $("#credit").on("change", function(){
        if (!validateCard("credit")){
            alert("Wrong format for credit card");
            $("#credit").val("xxxx xxxx xxxx xxxx");
            $("#credit").addClass("error");
        }
        else {
            $("credit").removeClass("error");
        }
    });

    $("#credit").on("mouseenter", function(){
        $("#credit").addClass("showInput");
    });

    $("#credit").on("mouseleave", function(){
        $("#credit").removeClass("showInput");
    });



    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#credit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });





      $("#email").on("change", function(){
          if (!validateEmail("email")){
              alert("Wrong format for email");
              $("#email").val("abc@123.com");
              $("#email").addClass("error");
          }
          else {
              $("email").removeClass("error");
          }
      });

      $("#email").on("mouseenter", function(){
          $("#email").addClass("showInput");
      });

      $("#email").on("mouseleave", function(){
          $("#email").removeClass("showInput");
      });



      // https://jqueryui.com/tooltip/
      // The class "highlight" used here is predefined in JQuery UI
      // the message of the tooltip is encoded in the input (in the HTML file)
      $("#email").tooltip({
          classes: {
            "ui-tooltip": "highlight"
          }
        });





        $("#dateTimeInput").on("change", function(){
            if (!validateDate("dateTimeInput")){
                alert("Wrong format for date");
                $("#dateTimeInput").val("mm/dd/yyyy");
                $("#dateTimeInput").addClass("error");
            }
            else {
                $("#dateTimeInput").removeClass("error");
            }
        });

        $("#dateTimeInput").on("mouseenter", function(){
            $("#dateTimeInput").addClass("showInput");
        });

        $("#dateTimeInput").on("mouseleave", function(){
            $("#dateTimeInput").removeClass("showInput");
        });










});
