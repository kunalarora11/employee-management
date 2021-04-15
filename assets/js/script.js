//  Function for searching the data

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().indexOf(value) > -1)
      });
    });
  });