<script>
$(document).ready(function(){

    var list = $("#mapList");
    $(list).hide();

  $("button").click(function(){
    $("#mapList").toggle();
  })

  $("#food").hide();
  $("ol").hide();

  $("#restaurantsBars").click(function(){
    $("#food, ol").toggle("highlight");
  })

})
</script>
