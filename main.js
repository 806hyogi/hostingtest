var marker;
var currentPosition;
var lastPosition = null;

var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3
};

var map = new kakao.maps.Map(container, options);

function moveToCurrentLocation(){
  if (navigator.geolocation) {
  
  // Geolocation API를 사용하여 접속 위치를 얻어옵니다.
  navigator.geolocation.getCurrentPosition(function(position) {
  
  var lat = position.coords.latitude,
  lon = position.coords.longitude;
  
  var locPosition = new kakao.maps.LatLng(lat, lon);
  
  // 마커와 인포윈도우를 표시합니다.
  displayMarker(locPosition);
  });
  } else { // Geolocation API가 지원되지 않으면
  
  alert("Geolocation is not supported by this browser.");
  
  }
}
