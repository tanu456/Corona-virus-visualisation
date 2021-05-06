function updateMap(){
    console.log("Updating...")
    fetch("./data.json")
    .then(response => response.json())
    .then(rsp=>{
        console.log(rsp);
        rsp.data.forEach(element => {
            latitude = element.latitude
            longitude = element.longitude
            cases = element.infected;
            if(cases>255){
                cl = "rgb(255 , 0, 0)";
            }
            else{
                cl = `rgb(${cases} , 0, 0)`;
            }
            //Mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color : cl,
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })

}
let interval=2000;
setInterval(updateMap, interval);
// updateMap();
