// main.js: 주요 기능을 처리합니다.

var marker;
var currentPosition;
var lastPosition = null;

var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 2
};

var map = new kakao.maps.Map(container, options);

// 여러 포인트 지점 좌표 생성
var pointPositions = [
new kakao.maps.LatLng(37.55443, 126.89574),
new kakao.maps.LatLng(37.54306, 126.91400),
new kakao.maps.LatLng(37.52988, 126.95228),
new kakao.maps.LatLng(37.51955, 126.99581),
new kakao.maps.LatLng(37.53037, 127.06723),
new kakao.maps.LatLng(37.54338, 12710737)
];

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(watchPositionSuccessCallback,
        watchPositionErrorCallback,
        { enableHighAccuracy: true,maximumAge:30000 ,timeout:27000 });
} else{
    console.log("Geolocation API가 지원하지 않습니다.");
}
