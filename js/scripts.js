
$(document).ready(function() {
  $("form.things1").submit(function(event){
    var thingsInput = [];
    var thingInput1 = $("#list1").val();
    var thingInput2 = $("#list2").val();
    var thingInput3 = $("#list3").val();
    var newThings = [];
    thingsInput.push(thingInput1, thingInput2, thingInput3);
    event.preventDefault();
    console.log(thingsInput);
    newThings.push(thingsInput[1], thingsInput[0], thingsInput[2]);
    console.log(newThings);
    $("#item1").prepend("<li>" + newThings[0] + "</li>", "<li>" + newThings[1] + "</li>", "<li>" + newThings[2] + "</li>");
  });
});
