let coordinates = {}


$document().ready(function(){
    get_coordinates();
    get_weather();
})

function get_coordinates(){
    let searchParams = new URLSearchParams(window.location.search)
    if(searchParams.has("source") && searchParams.has("destination")){
        let source = searchParams.get("source")
        let destination = searchParams.get("destination")
        coordinates.sourceLat = source.split(";")[0]
        coordinates.sourceLon = source.split(";")[1]
        coordinates.destLat = source.split(";")[0]
        coordinates.destLon = source.split(";")[1]
    }else{
        alert("COORDINATES NOT SELECTED ALLOW LOCATION IN YOUR DEVICE")
        window.history.back()
    }
}

function get_weather(){
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.destLat}&lon=${coordinates.destLon}&appid=dc6c2d702f991dc4dd8c16fbfc76f0d6`,
        type:'get',
        success:function(response){
            let name = response.name
            let weather = response.weather[0].main

            $("#scene_container").append(
                `
                <a-entity gps-entity-place="latitude: ${steps[i].maneuver.location[1]}; longitude: ${steps[i].maneuver.location[0]};">
                        <a-entity>
                            <a-text height="50" value="Weather forcast is ${weather} at ${name}"></a-text>
                        </a-entity>
                    </a-entity>
                `
            )
        }
    })
}
