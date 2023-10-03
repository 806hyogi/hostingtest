// polyline.js: 폴리라인(경로) 관련 기능을 처리합니다.

// 폴리라인 생성
var polyline=new kakao.maps.Polyline({
  strokeWeight:3,
  strokeColor:"#db4040",
  strokeOpacity:1,
  strokeStyle:'solid'
});

function drawMultiPath() {
   // 여러 임의 좌표 생성
   var positions=[
     new kakao.maps.LatLng(37.65803 ,126.84206),
     new kakao.maps.LatLng(37.65688 ,126.84427),
     new kakao.maps.LatLng(37.65638 ,126.84393)
   ];

   // 현재 위치에서 임의 좌표까지 경로 설정
   polyline.setPath([currentPosition].concat(positions));

   // 지도에 선을 표시합니다 
   polyline.setMap(map); 
}
