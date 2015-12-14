/* function init () {
  var mapOptions = {
    center: new google.maps.LatLng(25.8042441,-80.19891860000001),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  var venueMap;
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}


function loadScript () {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript; */
/*
$(document).ready(function(){

  $("svg").attr("style", "height: " + window.innerHeight);

  var euro = "euro";

    // display all European Union nations
    $("#euro").hover(function() {
      // mouseenter


})
*/


//click function
/* $(document).ready(function() {

  $("svg").attr("style","height: " + window.innerHeight + "px;");

  function clearMap() {
    $("svg path").attr("class", null);
  }
  function highlightMap() {
    $(string).attr("class");
  }

  var map = $("svg path[class*='food', 'gallery', 'museum', 'artist', 'estate', 'cinema', 'event']");

  $("svg path").mouseleave(function() {
    var attr = $(this).getAttribute("class")
    console.log(attr);
    if (!attr) {
      $(this).attr("class", null);
    } else {
      $(this).attr("class", "relation");
    }
  }); */
/*
$(document).ready(function() {

  $("svg").attr("style","height: " + window.innerHeight + "px;");


  function clearMap() {
    $("svg path").attr("class", null);//.off();
  }

  function highlightMap(string) {
    $(string).attr("class", "relation");
  }

  var map = $("svg path[class*='food', 'gallery', 'museum', 'artist', 'estate', 'cinema', 'event']");

  $("#restaurantsBars").click(function() {
      clearMap()
      highlightMap("#Jimmy-Kitchen-Wynwood, #Lesters, #Wood-Tavern, #Miam-Café, #Joeys, #Jugo-Fresh, #Wynwood-Kitchen-Bar, #The-TSL-Lounge, #The-Butcher-Shop, #Suviche-Wynwood, #Shots-Miami, #Shikany-Wynwood, #panther-coffee, #R-House, #Pride-Joy-BBQ, #Morgans-Restaurant, #Wynwood-Brewing-Company, #Zak-The-Baker, #Bardot, #Cafeina, #Concrete-Beach-Brewery, #Gramps-Bar")
    });

  $("artGallery").click(function() {
    clearMap()
    highlightMap("#University-of-Miami, #The_P.T.-Experiment, #NOW-Contemporary-Art, #Diana-Lowenstein-Fine-Arts, #Dina-Mitrani-Gallery, #TUB-Gallery-Miami, #Sean-Havas-Photography, #White-Porch-Gallery, #The-Screening-Room, #Wyn-317, #Pan-American-Art-Projects, #Mindy-Solomon-Gallery, #Namdi-Contemporary, #Ricart-Gallery, #Robert-Fontaine-Gallery, #Emerson-Dorsch, #Harold-Golen, #Pop-Communications, #PSH-Projects, #House-of-Art, #Juan-Ruiz-Gallery, #Dot-Fifty-One, #Espace-Expression, #Kelley-Roy-Gallery, #Lelia-Mordoch-Gallery, #M-Art, #EVL-World, #Gallery-Diet, #Unix-Contemporary, #Ascaso-Gallery, #Brisky-Gallery, #Curator-Voice-Art-Projects")
  });

  $("eventVenue").click(function() {
    clearMap()
    highlightMap("#Mana-Production-Village, #Soho-Studios, #The-Space-Miami")
  });
  $("cinemaPerform").click(function() {
    clearMap()
    highlightMap("#Miami_Light-Project, #OCinema")
  });

  $("realEstate").click(function() {
    clearMap()
    highlightMap("#Terminal-Lofts, #_Wynwood, #The-Green-Space, #The-Wynwood-House, #Mizrach-Realty-Associates, #Metro-Properties, #Goldman-Properties-Wynwood, #Cynergi, #The-Wynwood-Building, #Wynwood-Block, #Dorissa, #Lombardi-Properties")
  });

  $("artistStudio").click(function() {
    clearMap()
    highlightMap("#TheSTUDIO-by-H.-Xhixha, #A.-Dale-Nally-Studio, #Britto-Central, #William-Betts-Studio")
  });

  $("museumComplexes").click(function() {
    clearMap
    highlightMap("#Margulies-Collection-at-the-Warehouse, #Rubell-Family-Collection, #Bakehouse-Art-Complex, #Mitrani-Warehouse, #Museo-Vault, #The-Wynwood-Walls")
  });

}); */

$(document).ready(function(){





})

document.getElementById("University-of-Miami").onclick = function 
