// 전역 변수 marker와 currentPosition 추가
var marker = null;
var currentPosition = null;

// 마커 이미지의 이미지 크기 입니다
var imageSize = new kakao.maps.Size(20, 20); 
var markerImageSrc = './src/star1.png';
var markerImageOption = { offset: new kakao.maps.Point(17, 34) };
var markerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize ,markerImageOption);

// 각 포인트 지점마다 마커 생성
pointPositions.forEach(function (pointPosition) {
    var pointMarker = new kakao.maps.Marker({
        position: pointPosition,
        map: map,
        image: markerImage
    });
});

// 기존의 marker가 있으면 지워줍니다.
function removeMarker() {
    if (marker != null) {
        marker.setMap(null);
        marker = null;
    }
}

// 전역 변수인 marker에 새로운 Marker 객체를 할당합니다.
function setMarker(locPosition, imageSrc) {
    // 마커 이미지의 이미지 크기 입니다
    let imageSize = new kakao.maps.Size(40, 40); 

    let markerImageSrc = imageSrc || './src/north.png';
    let markerImageOption ={offset :new kakao.maps.Point(17,34)};
    let markerImage=new kakao.maps.MarkerImage(markerImageSrc,imageSize ,markerImageOption);

     // 전역 변수인 maker에 새로운 Marker 객체를 할당합니다.
     return new kakao.maps.Marker({
         position: locPosition,
         image:markerImage
       }); 
}

function displayMarker(locPosition) {

   // 기존의 maker가 있으면 지워줍니다.
   removeMarker();
   
   // 새로운 Marker 객체를 생성하고 이를 전역 변수인 maker에 할당합니다.
   var newMarker = setMarker(locPosition);
   
   // 마커가 지도 위에 표시되도록 설정합니다
   newMarker.setMap(map);  
}

// 각도에 따른 방향 이미지 변환 함수 추가
function rotateMarker(angle) {
  var direction;
  if (angle >= -22.5 && angle < 22.5) { direction= 'east'; } 
  else if (angle >= 22.5 && angle < 67.5) { direction= 'northeast'; } 
  else if (angle >= 67.5 && angle < 112.5){ direction= 'north'; } 
  else if (angle >=112.5 && angle <157.5){ direction= 'northwest'; }
  else if ((angle>=157.5&&angle<=180)||(angle>=-180&&angle<-157)){direction='west'}
  else if (angle>-157&&angle<-112){direction='southwest'}
  else if (angle>-112&&angle<-67){direction='south'}
  else {direction='southeast'}

    var markerImageSrc = `./src/${direction}.png`;
  
    removeMarker();

    // 새로운 Marker 객체를 생성하고 이를 전역 변수인 maker에 할당합니다.
    marker = setMarker(currentPosition, markerImageSrc);

     // 마커가 지도 위에 표시되도록 설정합니다
     marker.setMap(map);  
}
