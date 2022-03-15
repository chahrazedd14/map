var mymap = L.map("mapid").setView([45.242, 6.26635], 74);
var zoomOut = document.querySelector("#myCarousel");
L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: 'Map sheraD&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ',
        maxZoom: 8,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: "pk.eyJ1IjoiY2hlcmF6ZWRkdXJhbmQiLCJhIjoiY2tweHdtdGg1MWFyZDJwcDlsdnQyMXg3ciJ9.DY018IwBvEnjWeOqUaQfTA",
    }
).addTo(mymap);


var greenIcon = L.icon({
    iconUrl: './marker/map-marker.png',
    shadowUrl: './marker/marker-shadow.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.marker([45.242, 6.26635],{icon: greenIcon}).addTo(mymap).bindPopup("<h6>Résidence Club <span class=\u0022mmvfont\u0022>mmv</span><br> Les Chalets des Cimes </h6>");



(function() {
    var $section = $("#imgDiv");
    $section.find(".panzoom").panzoom({
        $zoomIn: $section.find(".zoom-in"),
        $zoomOut: $section.find(".zoom-out"),
        $zoomRange: $section.find(".zoom-range"),
        $reset: $section.find(".reset"),
    });
})();

$("#filter-options :checkbox").click(function() {
    $("#product-list .filter").hide();
    $("#filter-options :checkbox:checked").each(function() {
        $("." + $(this).val()).fadeIn();
    });

    if ($("#filter-options :checkbox").filter(":checked").length < 1) {
        $("#product-list .filter").fadeIn();
    }
});

$("document").ready(function() {
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function() {
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    if ($(this).attr("rel") == "tab2") {
        $(".tab-slider--tabs").addClass("slide");
    } else {
        $(".tab-slider--tabs").removeClass("slide");
    }
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
});
document.querySelector(".zoom-out").onclick = (e)=>{
    if(zoomOut.style.transform <= "matrix(1, 0, 0, 1, 0, 0)"){
        zoomOut.setAttribute("style","transition:1s; transform:matrix(1, 0, 0, 1, 0, 0) !important");
        console.log("zoom out");
    }
}