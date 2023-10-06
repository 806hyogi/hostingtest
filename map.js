var map;
var currentPosition;
var totalDistance = 0; // 총 주행 거리 (초기값 0)
var lastPosition = null; // 이전 위치

function initializeMap() {
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(36.450701, 126.570667),
        level: 3
    };
    
    map = new kakao.maps.Map(container, options);
}

// 지도 확대 함수
function zoomIn() {
    var level = map.getLevel();
    map.setLevel(level - 1);
}

// 지도 축소 함수
function zoomOut() {
    var level = map.getLevel();
    map.setLevel(level + 1);
}
