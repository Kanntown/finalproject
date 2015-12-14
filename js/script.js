/* Contact form script on about page */

function postToGoogle () {
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var city = $("#city").val();
  var email = $("#email").val();

  $.ajax({
    url: "https://docs.google.com/forms/d/1obo-iqIwDah27yHg8rJ49OiJIty7oLvVLwbbX_ouixU/formResponse",
    data: { "entry_1646104219": firstName,
    "entry_831410926": lastName,
    "entry_1209985360": city,
    "entry_1789308797": email
    },
    type: "POST",
    dataType: "json",
    statusCode: {
      0: function() {
        window.location.replace("thank-you.html");
      },
      200: function() {
        window.location.replace("thank-you.html");
      }
    }
  });
}

$(document).ready(function() {
    $("#submit").click(function() {
      event.preventDefault();
      postToGoogle();
    })
})
