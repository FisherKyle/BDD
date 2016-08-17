$(document).ready(function() {
    $("#inputForm").submit(function(event) {
      event.preventDefault();

      var year = $("#inputYear").val();

      function leapYear(year) {
        if (year % 4 === 0){
          return true;
        } else {
          return false;
        }
      };

      var yearBoolean = leapYear(year);

      console.log(yearBoolean);
    $(".determinalized").empty();

      if(yearBoolean){
        $(".determinalized").append(" a leap year.");
      } else {
        $(".determinalized").append(" not a leap year.")
      }









  });
});
