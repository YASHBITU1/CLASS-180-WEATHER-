var destination,latitude,longitude

$(document).ready(function(){
alert("PLEASE ALLOW THE DEVICE TO KNOW LOCATION")
    getGeoLocation()
})

function getGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success)
    }
    else{
        alert("YOUR BROWSER DOES'NT SUPPORT LOCATION SERVICES!")
    }
}

function success(position){
    console.log(position)
    latitude = position.coords.latitude
    longitude = position.coords.longitude
    mapboxgl.accessToken = 'pk.eyJ1IjoieWFzaGJpdHUiLCJhIjoiY2wzYTVpdDl2MDJkbDNrbnJkdHRxdmY5YyJ9.NUyi1Hk5PSIo8EBXnjTCKQ'

    const map = new mapboxgl.Map({
        container:"map",
        style:"mapbox://styles/mapbox/satellite-streets-v11",
        center:[longitude,latitude],
        zoom:16,
        doubleClickZoom:true
    })
    
    
var image1 = document.querySelector("#INDIAGATE")
var marker1= new mapboxgl.Marker({
    element:image1
}).setLngLat([77.22967063010981,28.613081516693292]).addTo(map)


var image2 = document.querySelector("#TAJMAHAL")
var marker2= new mapboxgl.Marker({
    element:image2
}).setLngLat([ 77.1942865820362,28.64765724022653]).addTo(map)


var image3 = document.querySelector("#MANALI")
var marker3= new mapboxgl.Marker({
    element:image3
}).setLngLat([77.19745845632119,32.232562414520096]).addTo(map)


var image4 = document.querySelector("#MOUNTABU")
var marker4= new mapboxgl.Marker({
    element:image4
}).setLngLat([ 72.71385707574596,24.59200019599404]).addTo(map)


var image5 = document.querySelector("#DAGDUSHETGANPATI")
var marker5= new mapboxgl.Marker({
    element:image5
}).setLngLat([73.8561110568788,18.51640827376786]).addTo(map)



map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)

    map.on("click",function(e){
        destination = e.lngLat
        console.log(destination)
    })
$(function(){
    $("#navigate-button").click(function(){
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})



}

