// geolocation.js: 위치 정보와 관련된 기능을 처리합니다.

function moveToCurrentLocation(){
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var lat = position.coords.latitude,
          lon = position.coords.longitude;
          
          var locPosition = new kakao.maps.LatLng(lat, lon);
        
          displayMarker(locPosition);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(locPosition);
      });
  } else { 
      alert("Geolocation is not supported by this browser.");
  }
}



function watchPositionSuccessCallback(position){
  var lat = position.coords.latitude,
    lon = position.coords.longitude;

  var newPosition = new kakao.maps.LatLng(lat, lon);

  // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
  map.setCenter(newPosition);

  if (lastPosition != null) {
      let angle = calculateAngle(lastPosition, newPosition);
      rotateMarker(angle); // modified this line
   } else {
       lastPosition=newPosition;
   }

   currentPosition = newPosition; // update current position after using it for calculation

   pointPositions.forEach(function(pointPostion){
       if(kakao.map.geometry.distance(currentPostion ,pointPostion)<=1000){
           alert("포인트 +1");
           window.close();
       }
   });
}


function watchPositionErrorCallback(error){
console.log("Error occurred in watchposition.");
console.log(error);
}
