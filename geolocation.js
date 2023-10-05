if (navigator.geolocation) {
  navigator.geolocation.watchPosition(function (position) {
    var lat = position.coords.latitude,
      lon = position.coords.longitude;

    currentPosition = new kakao.maps.LatLng(lat, lon);

    if (marker != null) {
      marker.setMap(null);
    }

    if (lastPosition != null) {
      let angle = calculateAngle(lastPosition, currentPosition);
      marker = rotateMarker(marker, angle);
    } else {
      lastPosition = currentPosition;
    }

    // 모든 포인트 범위 안에 들어왔을때 사용자를 체크한다.
    pointPositions.forEach(function (pointPosition) {
      if (kakao.maps.geometry.distance(currentPosition, pointPosition) <= 1000) {
        alert("포인트 +1");
        window.close(); // 페이지 자동 종료
      }
    });

    map.setCenter(currentPosition);


  }, function (error) {
    console.log("Error occurred in watchPosition.");
    console.log(error);
  }, {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  });
} else {
  console.log("Geolocation API가 지원하지 않습니다.");
}
